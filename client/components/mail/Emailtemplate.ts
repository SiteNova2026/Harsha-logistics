// Branded HTML email (navy + cyan, matches the website).
// Email clients ignore most CSS, so everything is inline styles inside tables.

const BRAND = {
  name: "HARSHAVARDHANI",
  tagline: "SHIPPING & FORWARDING",
  footer: "Harshavardhani Shipping & Forwarding",
};

// Change colors here only
const C = {
  page: "#001233", // page background (dark navy)
  card: "#031a45", // main card
  panel: "#02143a", // inner panels
  border: "#0c2a5e",
  cyan: "#00e5ee", // accent + button
  white: "#ffffff",
  text: "#d6e0f2",
  muted: "#8fa3c4",
  label: "#6f86ad",
  tagline: "#3a6bb5",
};

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Arial, Helvetica, sans-serif";

export interface EmailRow {
  label: string;
  value: string;
  href?: string; // makes the value a cyan link (mailto:, tel:)
}

export interface EmailSection {
  title: string;
  rows: EmailRow[];
}

export interface EmailOptions {
  eyebrow: string; // small cyan text above the title
  title: string;
  rows?: EmailRow[];
  sections?: EmailSection[];
  message?: string; // long text block
  replyTo?: { email: string; label: string }; // shows the cyan button
  submittedAt?: Date | string;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function formatDate(date: Date | string | undefined): string {
  const d = date ? new Date(date) : new Date();
  return d.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function rowHtml(r: EmailRow, last = false): string {
  const value = r.href
    ? `<a href="${escapeHtml(r.href)}" style="color:${C.cyan};text-decoration:none;">${escapeHtml(r.value)}</a>`
    : escapeHtml(r.value);

  return `
    <tr>
      <td style="padding:12px 0;${last ? "" : `border-bottom:1px solid ${C.border};`}">
        <div style="font-family:${SANS};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${C.label};">${escapeHtml(r.label)}</div>
        <div style="font-family:${SANS};font-size:15px;color:${C.white};margin-top:4px;">${value}</div>
      </td>
    </tr>`;
}

function rowsTable(rows: EmailRow[]): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    ${rows.map((r, i) => rowHtml(r, i === rows.length - 1)).join("")}
  </table>`;
}

function sectionHtml(s: EmailSection): string {
  return `
    <tr>
      <td style="padding-top:24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
          bgcolor="${C.panel}" style="background:${C.panel};border:1px solid ${C.border};border-top:3px solid ${C.cyan};border-radius:10px;">
          <tr>
            <td style="padding:18px 20px 6px 20px;">
              <div style="font-family:${SERIF};font-size:18px;color:${C.white};">${escapeHtml(s.title)}</div>
            </td>
          </tr>
          <tr><td style="padding:0 20px 8px 20px;">${rowsTable(s.rows)}</td></tr>
        </table>
      </td>
    </tr>`;
}

export function renderEmail(o: EmailOptions): string {
  const messageBlock = o.message
    ? `
    <tr>
      <td style="padding-top:24px;">
        <div style="font-family:${SANS};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${C.label};margin-bottom:8px;">Message</div>
        <div style="font-family:${SANS};font-size:15px;line-height:1.7;color:${C.text};background:${C.panel};border-left:3px solid ${C.cyan};border-radius:6px;padding:16px 18px;">
          ${escapeHtml(o.message).replace(/\r?\n/g, "<br>")}
        </div>
      </td>
    </tr>`
    : "";

  const button = o.replyTo
    ? `
    <tr>
      <td align="center" style="padding-top:32px;">
        <a href="mailto:${escapeHtml(o.replyTo.email)}"
          style="display:inline-block;background:${C.cyan};color:${C.page};font-family:${SANS};font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 30px;border-radius:999px;">
          ${escapeHtml(o.replyTo.label)}
        </a>
      </td>
    </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="dark">
  <title>${escapeHtml(o.title)}</title>
</head>
<body style="margin:0;padding:0;background:${C.page};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(o.title)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.page}" style="background:${C.page};">
    <tr>
      <td align="center" style="padding:32px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">

          <!-- Brand header -->
          <tr>
            <td style="padding:0 4px 20px 4px;">
              <div style="font-family:${SANS};font-size:15px;font-weight:bold;letter-spacing:2px;color:${C.white};">${BRAND.name}</div>
              <div style="font-family:${SANS};font-size:11px;letter-spacing:4px;color:${C.tagline};margin-top:2px;">${BRAND.tagline}</div>
            </td>
          </tr>

          <!-- Main card -->
          <tr>
            <td bgcolor="${C.card}" style="background:${C.card};border:1px solid ${C.border};border-radius:14px;padding:36px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <div style="font-family:${SANS};font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:${C.cyan};">${escapeHtml(o.eyebrow)}</div>
                    <div style="font-family:${SERIF};font-size:30px;line-height:1.2;color:${C.white};margin-top:10px;">${escapeHtml(o.title)}</div>
                    <div style="height:3px;width:48px;background:${C.cyan};margin-top:18px;border-radius:2px;"></div>
                  </td>
                </tr>
                ${o.rows ? `<tr><td style="padding-top:18px;">${rowsTable(o.rows)}</td></tr>` : ""}
                ${(o.sections ?? []).map(sectionHtml).join("")}
                ${messageBlock}
                ${button}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:20px 8px 0 8px;font-family:${SANS};font-size:12px;line-height:1.6;color:${C.muted};">
              Submitted on ${escapeHtml(formatDate(o.submittedAt))} (IST)<br>
              ${BRAND.footer}
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}