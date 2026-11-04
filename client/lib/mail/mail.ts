import nodemailer, { Transporter } from "nodemailer";

function createTransporter(): Transporter {
  switch (process.env.MAIL_PROVIDER) {
    case "zoho":
      return nodemailer.createTransport({
        host: "smtp.zoho.in", // use smtp.zoho.com if your account is not on the .in data center
        port: 465,
        secure: true,
        auth: { user: process.env.ZOHO_USER, pass: process.env.ZOHO_PASS },
      });

    case "gmail":
      return nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

    case "godaddy":
      return nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GODADDY_USER,
          pass: process.env.GODADDY_PASS,
        },
      });

    case "mailtrap":
      return nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: { user: process.env.MAILTRAP_USER, pass: process.env.MAILTRAP_PASS },
      });

    default:
      throw new Error("MAIL_PROVIDER not set or unsupported");
  }
}

export function resolveSenderAddress(): string {
  const provider = (process.env.MAIL_PROVIDER ?? "").toLowerCase();
  const explicitFrom = process.env.MAIL_FROM || process.env.ADMIN_MAIL;

  const providerMap: Record<string, string | undefined> = {
    zoho: process.env.ZOHO_USER,
    gmail: process.env.GMAIL_USER,
    godaddy: process.env.GODADDY_USER,
    mailtrap: process.env.MAILTRAP_USER,
  };

  const sender = explicitFrom || providerMap[provider] || process.env.GODADDY_USER || process.env.ZOHO_USER || process.env.GMAIL_USER;

  if (!sender) {
    throw new Error(`No sender email configured for MAIL_PROVIDER="${provider || "unset"}".`);
  }

  return sender.trim();
}

const transporter = createTransporter();
export default transporter;