import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone?: string;
  subject: "general" | "catering" | "feedback" | "other";
  message: string;
}

export function EmailTemplate({
  fullName,
  email,
  phone,
  subject,
  message,
}: EmailTemplateProps) {
  
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5, color: "#111827" }}>
      <h2 style={{ color: "#dc2626" }}>New Contact Form Submission</h2>
      <p><strong>Name:</strong> {fullName}</p>
      <p><strong>Email:</strong> {email}</p>
      {phone && <p><strong>Phone:</strong> {phone}</p>}
      <p><strong>Subject:</strong> {subject.charAt(0).toUpperCase() + subject.slice(1)}</p>
      <p><strong>Message:</strong></p>
      <p style={{ padding: "10px", backgroundColor: "#f3f4f6", borderRadius: "6px" }}>
        {message}
      </p>
      <hr style={{ margin: "20px 0", borderColor: "#e5e7eb" }} />
      <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
        This message was sent from your website contact form.
      </p>
    </div>
  );
}
