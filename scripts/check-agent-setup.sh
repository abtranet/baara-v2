#!/usr/bin/env bash
# =============================================================================
# scripts/check-agent-setup.sh
# Baara v2 — GitHub Actions Setup Status Checker
#
# What this does:
#   Checks whether your GitHub Actions setup is complete and prints a
#   beginner-friendly status report.
#
# Usage:
#   bash scripts/check-agent-setup.sh
# =============================================================================

set -euo pipefail

# ── Colour helpers ────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

ok()   { echo -e "  ${GREEN}✔${RESET}  $*"; }
fail() { echo -e "  ${RED}✖${RESET}  $*"; }
skip() { echo -e "  ${YELLOW}–${RESET}  $*"; }
info() { echo -e "  ${CYAN}ℹ${RESET}  $*"; }

PASS=0
FAIL=0
WARN=0

record_pass() { PASS=$((PASS + 1)); ok "$*"; }
record_fail() { FAIL=$((FAIL + 1)); fail "$*"; }
record_warn() { WARN=$((WARN + 1)); skip "$*"; }

# =============================================================================
echo ""
echo -e "${BOLD}${CYAN}╔══════════════════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}${CYAN}║   Baara v2 — GitHub Actions Setup Status Report     ║${RESET}"
echo -e "${BOLD}${CYAN}╚══════════════════════════════════════════════════════╝${RESET}"
echo ""

# =============================================================================
echo -e "${BOLD}[ 1 ]  Git remote (origin)${RESET}"
echo ""

if git remote get-url origin &>/dev/null; then
  ORIGIN_URL=$(git remote get-url origin)
  record_pass "Origin remote found: ${ORIGIN_URL}"
else
  record_fail "No 'origin' remote found."
  info "Fix: git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git"
fi

echo ""

# =============================================================================
echo -e "${BOLD}[ 2 ]  GitHub CLI authentication${RESET}"
echo ""

if ! command -v gh &>/dev/null; then
  record_fail "GitHub CLI (gh) is not installed."
  info "Install: https://cli.github.com"
elif gh auth status &>/dev/null 2>&1; then
  GH_USER=$(gh api user --jq '.login' 2>/dev/null || echo "unknown")
  record_pass "GitHub CLI authenticated as: ${GH_USER}"
else
  record_fail "GitHub CLI is not authenticated."
  info "Fix: gh auth login"
fi

echo ""

# =============================================================================
echo -e "${BOLD}[ 3 ]  GitHub repo detection${RESET}"
echo ""

REPO=""
if command -v gh &>/dev/null && gh auth status &>/dev/null 2>&1; then
  if REPO=$(gh repo view --json nameWithOwner --jq '.nameWithOwner' 2>/dev/null); then
    record_pass "Repo detected: ${REPO}"
  else
    record_fail "Could not detect GitHub repo."
    info "Make sure the repo has been pushed to GitHub and origin is set."
  fi
else
  record_warn "Skipped repo detection (gh not authenticated)."
fi

echo ""

# =============================================================================
echo -e "${BOLD}[ 4 ]  GitHub Actions workflow files${RESET}"
echo ""

REQUIRED_WORKFLOWS=(
  ".github/workflows/baara-agent-autofix.yml"
  ".github/workflows/baara-ai-agent.yml"
)

for WORKFLOW in "${REQUIRED_WORKFLOWS[@]}"; do
  if [[ -f "${WORKFLOW}" ]]; then
    record_pass "Found: ${WORKFLOW}"
  else
    record_fail "Missing: ${WORKFLOW}"
    info "Create this file or restore it from your branch history."
  fi
done

echo ""

# =============================================================================
echo -e "${BOLD}[ 5 ]  GitHub Actions secrets${RESET}"
echo ""

if [[ -z "${REPO}" ]]; then
  record_warn "Skipped secrets check (could not detect repo)."
elif ! command -v gh &>/dev/null || ! gh auth status &>/dev/null 2>&1; then
  record_warn "Skipped secrets check (gh not authenticated)."
else
  # Get the list of secret names (values are never shown)
  SECRET_LIST=$(gh secret list --repo "${REPO}" 2>/dev/null || echo "")

  check_secret() {
    local name="$1"
    local required="$2"   # "required" or "optional"
    if echo "${SECRET_LIST}" | grep -q "^${name}"; then
      record_pass "${name} — secret exists"
    else
      if [[ "${required}" == "required" ]]; then
        record_fail "${name} — NOT SET (required)"
        info "Fix: gh secret set ${name} --repo ${REPO}"
      else
        record_warn "${name} — not set (optional)"
        info "Set later: gh secret set ${name} --repo ${REPO}"
      fi
    fi
  }

  check_secret "OPENAI_API_KEY"            "required"
  check_secret "SUPABASE_URL"              "optional"
  check_secret "SUPABASE_SERVICE_ROLE_KEY" "optional"
  check_secret "SUPABASE_ANON_KEY"         "optional"
  check_secret "RESEND_API_KEY"            "optional"
  check_secret "FORM_NOTIFICATION_EMAIL"   "optional"
  check_secret "FORM_FROM_EMAIL"           "optional"
fi

echo ""

# =============================================================================
echo -e "${BOLD}[ 6 ]  Workflow permissions (read-only check)${RESET}"
echo ""

if [[ -z "${REPO}" ]]; then
  record_warn "Skipped permissions check (could not detect repo)."
elif ! command -v gh &>/dev/null || ! gh auth status &>/dev/null 2>&1; then
  record_warn "Skipped permissions check (gh not authenticated)."
else
  PERMS=$(gh api "repos/${REPO}/actions/permissions/workflow" 2>/dev/null || echo "")
  if [[ -n "${PERMS}" ]]; then
    DEFAULT_PERMS=$(echo "${PERMS}" | grep -o '"default_workflow_permissions":"[^"]*"' | cut -d'"' -f4 || echo "unknown")
    CAN_APPROVE=$(echo "${PERMS}" | grep -o '"can_approve_pull_request_reviews":[^,}]*' | cut -d: -f2 | tr -d ' ' || echo "unknown")
    if [[ "${DEFAULT_PERMS}" == "write" ]]; then
      record_pass "Default workflow permissions: write"
    else
      record_fail "Default workflow permissions: ${DEFAULT_PERMS} (should be 'write')"
      info "Fix: bash scripts/setup-github-agent.sh"
    fi
    if [[ "${CAN_APPROVE}" == "true" ]]; then
      record_pass "Can approve pull request reviews: true"
    else
      record_warn "Can approve pull request reviews: ${CAN_APPROVE}"
    fi
  else
    record_warn "Could not read workflow permissions (may require admin access)."
    info "Check manually: https://github.com/${REPO}/settings/actions"
  fi
fi

echo ""

# =============================================================================
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo -e "${BOLD}  Summary${RESET}"
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo ""
echo -e "  ${GREEN}✔  Passed:${RESET}  ${PASS}"
echo -e "  ${YELLOW}–  Warnings:${RESET} ${WARN}"
echo -e "  ${RED}✖  Failed:${RESET}  ${FAIL}"
echo ""

if [[ ${FAIL} -eq 0 ]]; then
  echo -e "  ${GREEN}${BOLD}Your GitHub Actions setup looks good!${RESET}"
  echo -e "  ${CYAN}View your workflows: https://github.com/${REPO}/actions${RESET}"
else
  echo -e "  ${YELLOW}${BOLD}Some items need attention.${RESET}"
  echo -e "  ${CYAN}Run the full setup script to fix issues:${RESET}"
  echo -e "    bash scripts/setup-github-agent.sh"
fi

echo ""
