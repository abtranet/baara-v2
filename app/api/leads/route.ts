const formTypes = ["audit", "waitlist", "roadmap", "newsletter", "contact"] as const;
const backgrounds = ["Healthcare", "IT", "Admin", "Student", "Career changer", "Other"] as const;
const languages = ["English", "French", "Both"] as const;

type FormType = (typeof formTypes)[number];

interface LeadPayload {
  form_type: FormType;
  first_name: string;
  email: string;
  country: string | null;
  background: string | null;
  language: string | null;
  message: string | null;
  source_path: string | null;
  metadata: {
    user_agent: string | null;
    referer: string | null;
  };
}

export const runtime = "nodejs";

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isFormType(value: string): value is FormType {
  return formTypes.includes(value as FormType);
}

function normalizeOptional(value: string, maxLength: number): string | null {
  if (!value) {
    return null;
  }

  return value.slice(0, maxLength);
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateLead(formData: FormData): { payload: LeadPayload } | { error: string } {
  const formType = getString(formData, "type");
  const firstName = getString(formData, "firstName");
  const email = getString(formData, "email").toLowerCase();
  const country = getString(formData, "country");
  const background = getString(formData, "background");
  const language = getString(formData, "language");
  const message = getString(formData, "message");
  const sourcePath = getString(formData, "sourcePath");

  if (!isFormType(formType)) {
    return { error: "Please refresh the page and try again." };
  }

  if (firstName.length < 1 || firstName.length > 80) {
    return { error: "Please enter your first name." };
  }

  if (email.length > 254 || !isEmail(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (country.length > 80) {
    return { error: "Country must be 80 characters or fewer." };
  }

  if (background && !backgrounds.includes(background as (typeof backgrounds)[number])) {
    return { error: "Please select a valid background." };
  }

  if (language && !languages.includes(language as (typeof languages)[number])) {
    return { error: "Please select a valid language." };
  }

  if (message.length > 2000) {
    return { error: "Message must be 2,000 characters or fewer." };
  }

  if (sourcePath && (!sourcePath.startsWith("/") || sourcePath.length > 300)) {
    return { error: "Please refresh the page and try again." };
  }

  return {
    payload: {
      form_type: formType,
      first_name: firstName.slice(0, 80),
      email,
      country: normalizeOptional(country, 80),
      background: normalizeOptional(background, 80),
      language: normalizeOptional(language, 40),
      message: normalizeOptional(message, 2000),
      source_path: normalizeOptional(sourcePath, 300),
      metadata: {
        user_agent: null,
        referer: null,
      },
    },
  };
}

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
}

function getSupabaseTable(): string {
  const table = process.env.SUPABASE_LEADS_TABLE || "leads";

  if (!/^[A-Za-z0-9_]+$/.test(table)) {
    throw new Error("SUPABASE_LEADS_TABLE may only contain letters, numbers, and underscores");
  }

  return table;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function storeLead(payload: LeadPayload): Promise<void> {
  const supabaseUrl = requireEnv("SUPABASE_URL").replace(/\/+$/, "");
  const serviceRoleKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
  const table = getSupabaseTable();

  const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Supabase lead insert failed: ${response.status} ${details}`);
  }
}

function buildEmail(payload: LeadPayload): { html: string; text: string } {
  const fields = [
    ["Form", payload.form_type],
    ["First name", payload.first_name],
    ["Email", payload.email],
    ["Country", payload.country],
    ["Background", payload.background],
    ["Preferred language", payload.language],
    ["Source", payload.source_path],
    ["Message", payload.message],
  ].filter(([, value]) => Boolean(value));

  const htmlRows = fields
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #e7e5e4;font-weight:600;">${escapeHtml(label || "")}</td>
          <td style="padding:8px 12px;border:1px solid #e7e5e4;">${escapeHtml(value || "").replaceAll("\n", "<br />")}</td>
        </tr>`,
    )
    .join("");

  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");

  return {
    html: `
      <div style="font-family:Arial,sans-serif;color:#1c1917;">
        <h1 style="font-size:20px;">New Baara lead</h1>
        <table style="border-collapse:collapse;">${htmlRows}</table>
        <p style="color:#78716c;font-size:12px;margin-top:16px;">
          Reminder: do not request PHI, confidential employer data, passwords, API keys, or proprietary screenshots from this lead.
        </p>
      </div>`,
    text: `${text}\n\nReminder: do not request PHI, confidential employer data, passwords, API keys, or proprietary screenshots from this lead.`,
  };
}

async function sendNotification(payload: LeadPayload): Promise<void> {
  const apiKey = requireEnv("RESEND_API_KEY");
  const from = requireEnv("RESEND_FROM");
  const to = process.env.LEAD_NOTIFICATION_TO || "sales@globalsabt.com";
  const { html, text } = buildEmail(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `New Baara ${payload.form_type} lead: ${payload.first_name}`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend notification failed: ${response.status} ${details}`);
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();

  if (getString(formData, "companyWebsite")) {
    return Response.json({ ok: true });
  }

  const result = validateLead(formData);

  if ("error" in result) {
    return Response.json({ ok: false, error: result.error }, { status: 400 });
  }

  const payload = {
    ...result.payload,
    metadata: {
      user_agent: request.headers.get("user-agent"),
      referer: request.headers.get("referer"),
    },
  };

  try {
    await storeLead(payload);
    await sendNotification(payload);

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { ok: false, error: "We could not submit the form right now. Please email sales@globalsabt.com." },
      { status: 500 },
    );
  }
}
