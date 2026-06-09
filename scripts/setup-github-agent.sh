#!/usr/bin/env bash
# =============================================================================
# scripts/setup-github-agent.sh
# Baara v2 — GitHub Actions & Secrets Setup Script
#
# What this does:
#   1. Checks that GitHub CLI (gh) is installed and authenticated
#   2. Detects the current GitHub repo automatically
#   3. Configures GitHub Actions workflow permissions (write access + PR approval)
#   4. Prompts you for secrets and stores them in GitHub Actions — securely
#   5. Verifies the required workflow files are present
#   6. Prints clear next steps when finished
#
# Usage:
#   bash scripts/setup-github-agent.sh
#
# Requirements:
#   - GitHub CLI (gh) installed: https://cli.github.com
#   - Logged in: gh auth login
#   - Run from the root of the baara-v2 repo
# =============================================================================

set -euo pipefail

# ── Colour helpers ────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

info()    { echo -e "${CYAN}ℹ  $*${RESET}"; }
success() { echo -e "${GREEN}✔  $*${RESET}"; }
warn()    { echo -e "${YELLOW}⚠  $*${RESET}"; }
error()   { echo -e "${RED}✖  $*${RESET}" >&2; }
header()  { echo -e "\n${BOLD}${CYAN}━━━  $*  ━━━${RESET}\n"; }
step()    { echo -e "${BOLD}▶  $*${RESET}"; }

# ── Prompt helper — never echoes the value ────────────────────────────────────
# Usage: prompt_secret VAR_NAME "Prompt text"
prompt_secret() {
  local var_name="$1"
  local prompt_text="$2"
  local value=""
  read -r -s -p "$(echo -e "${YELLOW}  ${prompt_text}: ${RESET}")" value
  echo ""   # newline after silent input
  # Assign to the caller's variable by name
  printf -v "$var_name" '%s' "$value"
}

# ── Prompt helper for optional secrets ───────────────────────────────────────
# Returns empty string if user skips; never prints value.
prompt_optional_secret() {
  local var_name="$1"
  local prompt_text="$2"
  local value=""
  read -r -s -p "$(echo -e "${YELLOW}  ${prompt_text} (press Enter to skip): ${RESET}")" value
  echo ""
  printf -v "$var_name" '%s' "$value"
}

# =============================================================================
echo ""
echo -e "${BOLD}${CYAN}╔══════════════════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}${CYAN}║     Baara v2 — GitHub Actions Setup Script          ║${RESET}"
echo -e "${BOLD}${CYAN}╚══════════════════════════════════════════════════════╝${RESET}"
echo ""
info "This script configures GitHub Actions permissions and secrets"
info "for the baara-v2 repo. No secret values will be printed."
echo ""

# =============================================================================
header "Step 1 of 6 — Check GitHub CLI"
# =============================================================================

step "Checking whether 'gh' (GitHub CLI) is installed..."
if ! command -v gh &>/dev/null; then
  error "'gh' is not installed."
  echo ""
  echo "  Install it from: https://cli.github.com"
  echo "  Then run: gh auth login"
  echo ""
  exit 1
fi

GH_VERSION=$(gh --version | head -n1)
success "GitHub CLI found: ${GH_VERSION}"

# =============================================================================
header "Step 2 of 6 — Check GitHub Authentication"
# =============================================================================

step "Checking GitHub CLI authentication..."
if ! gh auth status &>/dev/null; then
  error "You are not logged in to GitHub CLI."
  echo ""
  echo "  Run this to log in:"
  echo "    gh auth login"
  echo ""
  exit 1
fi

GH_USER=$(gh api user --jq '.login' 2>/dev/null || echo "unknown")
success "Authenticated as: ${GH_USER}"

# =============================================================================
header "Step 3 of 6 — Detect GitHub Repo"
# =============================================================================

step "Detecting current GitHub repository..."
if ! REPO=$(gh repo view --json nameWithOwner --jq '.nameWithOwner' 2>/dev/null); then
  error "Could not detect a GitHub repository."
  echo ""
  echo "  Make sure:"
  echo "    1. You are inside a git repository"
  echo "    2. The repo has been pushed to GitHub"
  echo "    3. The 'origin' remote points to GitHub"
  echo ""
  exit 1
fi

success "Detected repo: ${REPO}"

# =============================================================================
header "Step 4 of 6 — Configure GitHub Actions Workflow Permissions"
# =============================================================================

step "Setting default workflow permissions to 'write'..."
step "Enabling GitHub Actions to create and approve pull requests..."

PERMISSIONS_PAYLOAD='{"default_workflow_permissions":"write","can_approve_pull_request_reviews":true}'

if gh api \
  --method PUT \
  --silent \
  "repos/${REPO}/actions/permissions/workflow" \
  --input - <<< "${PERMISSIONS_PAYLOAD}" 2>/dev/null; then
  success "Workflow permissions set: default=write, can_approve_pull_request_reviews=true"
else
  warn "Could not set workflow permissions via API."
  warn "This may mean your GitHub plan does not support this setting."
  warn "You can set it manually:"
  warn "  GitHub → Settings → Actions → General → Workflow permissions"
fi

# =============================================================================
header "Step 5 of 6 — Set GitHub Actions Secrets"
# =============================================================================

echo -e "  Secrets are sent directly to GitHub and never printed to your terminal."
echo -e "  To skip any optional secret, press ${BOLD}Enter${RESET} without typing anything."
echo ""

# ── Required: OPENAI_API_KEY ─────────────────────────────────────────────────
step "OPENAI_API_KEY (required)"
info "Get yours at: https://platform.openai.com/api-keys"
echo ""

while true; do
  OPENAI_API_KEY_VAL=""
  prompt_secret OPENAI_API_KEY_VAL "Paste your OPENAI_API_KEY"

  if [[ -z "${OPENAI_API_KEY_VAL}" ]]; then
    warn "OPENAI_API_KEY cannot be empty. Please paste your key."
  else
    break
  fi
done

printf '%s' "${OPENAI_API_KEY_VAL}" | gh secret set OPENAI_API_KEY --repo "${REPO}" \
  --body - 2>/dev/null || {
  error "Failed to set OPENAI_API_KEY secret."
  exit 1
}
unset OPENAI_API_KEY_VAL
success "OPENAI_API_KEY stored as a GitHub Actions secret."

echo ""

# ── Optional secrets ──────────────────────────────────────────────────────────
declare -A OPTIONAL_SECRETS=(
  [SUPABASE_URL]="SUPABASE_URL (your Supabase project URL)"
  [SUPABASE_SERVICE_ROLE_KEY]="SUPABASE_SERVICE_ROLE_KEY (server-only Supabase key)"
  [SUPABASE_ANON_KEY]="SUPABASE_ANON_KEY (Supabase public anon key)"
  [RESEND_API_KEY]="RESEND_API_KEY (Resend transactional email)"
  [FORM_NOTIFICATION_EMAIL]="FORM_NOTIFICATION_EMAIL (email to receive form alerts)"
  [FORM_FROM_EMAIL]="FORM_FROM_EMAIL (sender address for form emails)"
)

# Process in a predictable order
OPTIONAL_ORDER=(
  SUPABASE_URL
  SUPABASE_SERVICE_ROLE_KEY
  SUPABASE_ANON_KEY
  RESEND_API_KEY
  FORM_NOTIFICATION_EMAIL
  FORM_FROM_EMAIL
)

step "Optional secrets — press Enter to skip any you don't have yet"
echo ""

for SECRET_NAME in "${OPTIONAL_ORDER[@]}"; do
  PROMPT_TEXT="${OPTIONAL_SECRETS[$SECRET_NAME]}"
  SECRET_VAL=""
  prompt_optional_secret SECRET_VAL "${PROMPT_TEXT}"

  if [[ -n "${SECRET_VAL}" ]]; then
    printf '%s' "${SECRET_VAL}" | gh secret set "${SECRET_NAME}" --repo "${REPO}" \
      --body - 2>/dev/null && success "${SECRET_NAME} stored." \
      || warn "Failed to store ${SECRET_NAME} — you can retry later with: gh secret set ${SECRET_NAME}"
    unset SECRET_VAL
  else
    info "Skipped ${SECRET_NAME}"
  fi
done

# =============================================================================
header "Step 6 of 6 — Verify Workflow Files"
# =============================================================================

REQUIRED_WORKFLOWS=(
  ".github/workflows/baara-agent-autofix.yml"
  ".github/workflows/baara-ai-agent.yml"
)

ALL_PRESENT=true

for WORKFLOW in "${REQUIRED_WORKFLOWS[@]}"; do
  if [[ -f "${WORKFLOW}" ]]; then
    success "Found: ${WORKFLOW}"
  else
    error "Missing: ${WORKFLOW}"
    ALL_PRESENT=false
  fi
done

if [[ "${ALL_PRESENT}" == "false" ]]; then
  warn "One or more workflow files are missing."
  warn "GitHub Actions will not trigger until these files are present and pushed."
fi

# =============================================================================
echo ""
echo -e "${BOLD}${GREEN}╔══════════════════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}${GREEN}║                  Setup Complete!                    ║${RESET}"
echo -e "${BOLD}${GREEN}╚══════════════════════════════════════════════════════╝${RESET}"
echo ""
echo -e "${BOLD}Next steps:${RESET}"
echo ""
echo -e "  1. ${CYAN}Push your workflow files to GitHub if you haven't already:${RESET}"
echo -e "       git push origin main"
echo ""
echo -e "  2. ${CYAN}Confirm secrets are stored:${RESET}"
echo -e "       gh secret list --repo ${REPO}"
echo ""
echo -e "  3. ${CYAN}Confirm workflow permissions in the GitHub UI:${RESET}"
echo -e "       https://github.com/${REPO}/settings/actions"
echo -e "       → Workflow permissions → Read and write access"
echo ""
echo -e "  4. ${CYAN}Monitor workflow runs:${RESET}"
echo -e "       https://github.com/${REPO}/actions"
echo ""
echo -e "  5. ${CYAN}To check your setup status anytime:${RESET}"
echo -e "       bash scripts/check-agent-setup.sh"
echo ""
echo -e "  6. ${YELLOW}Secrets NOT stored yet (add later with gh secret set):${RESET}"
echo -e "       NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_CALENDLY_URL,"
echo -e "       NEXT_PUBLIC_WHATSAPP_URL, NEXT_PUBLIC_LINKEDIN_URL"
echo ""
