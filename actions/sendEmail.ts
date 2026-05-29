"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error(
    "RESEND_API_KEY is not defined. Please add it to your .env.local file.",
  );
}

const resend = new Resend(apiKey);

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

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "shantanusudhirkamble.india@gmail.com",
      subject: "New Portfolio Contact Form Submission",
      replyTo: senderEmail as string,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>New Portfolio Contact Form Submission</h2>

          <p>
            <strong>Sender Email:</strong><br />
            ${senderEmail}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${message}
          </p>
        </div>
      `,
    });

    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
