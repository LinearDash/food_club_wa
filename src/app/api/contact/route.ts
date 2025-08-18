import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Boolean(process.env.SMTP_SECURE === "true"),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO || "foodclubwa2023@gmail.com";
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER || "no-reply@foodclubwa.com";

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message?.toString()?.replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      to,
      from,
      subject: `Contact Form: ${subject || "General"}`,
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("Contact API error", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
