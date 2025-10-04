import "server-only";
import nodemailer from "nodemailer";

export const user = process.env.MAILER_USER!;
export const pass = process.env.MAILER_PASS!;

export const devEmail = process.env.MAILER_RECEIVER!;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user,
    pass,
  },
  from: user,
  tls: {
    rejectUnauthorized: false,
  },
});

export async function contact_us(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  return await transporter.sendMail({
    from: user,
    to: devEmail,
    subject: "Portfolio Message",
    text: `
Nouveau message de ${name}

Nom : ${name}
Email : ${email}
Sujet : ${subject}
Message : 
${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #222;">
        <h2 style="color: #1976d2;">Nouveau message de ${name}</h2>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr style="margin: 20px 0;">
        <p><strong>Message :</strong></p>
        <p style="margin-left: 16px;">${message}</p>
      </div>
    `,
  });
}
