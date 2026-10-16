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
        service: "gmail",
        auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }, // Gmail App Password
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

const transporter = createTransporter();
export default transporter;