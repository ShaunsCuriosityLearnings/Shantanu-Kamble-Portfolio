"use server";

import nodemailer from "nodemailer";
import { validateString, getErrorMessage } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const user = process.env.EMAIL_USER || process.env.SMTP_USER;
  const pass = process.env.EMAIL_PASS || process.env.SMTP_PASS;

  if (!user || !pass || pass === "your_gmail_app_password_here") {
    return {
      error: "Email credentials not configured yet. Please add EMAIL_USER and EMAIL_PASS to your .env.local file.",
    };
  }

  const cleanPass = pass.replace(/\s+/g, "");

  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const isSecure = port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: isSecure,
    auth: {
      user: user.trim(),
      pass: cleanPass,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${user}>`,
      to: "shantanukamble.org@gmail.com",
      replyTo: senderEmail as string,
      subject: `New Lead: Portfolio Contact from ${senderEmail}`,
      text: `New Lead Submission\n\nSender Email: ${senderEmail}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #b91c1c; margin-top: 0; margin-bottom: 16px; font-size: 20px;">✦ New Portfolio Contact Lead</h2>

          <div style="margin-bottom: 16px; padding: 14px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px;">
            <p style="margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: bold;">Sender Email:</p>
            <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 600;">
              <a href="mailto:${senderEmail}" style="color: #b91c1c; text-decoration: none;">${senderEmail}</a>
            </p>
          </div>

          <div style="margin-bottom: 20px; padding: 14px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px;">
            <p style="margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: bold;">Project Scope / Message:</p>
            <p style="margin: 0; font-size: 15px; color: #1f2937; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="font-size: 12px; color: #9ca3af; margin: 0;">This lead was submitted directly from your portfolio contact form.</p>
        </div>
      `,
    });

    return { data: { messageId: info.messageId } };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
