"use server";

import z from "zod";
import { formSchema } from "./schema";
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {

  try {
    let emailSubject = "";
    if (emailFormData.subject === "general") {
      emailSubject = "General Inquiry from Website";
    } else if (emailFormData.subject === "catering") {
      emailSubject = "Catering Request from Website";
    } else if (emailFormData.subject === "feedback") {
      emailSubject = "Customer Feedback from Website";
    } else if (emailFormData.subject === "other") {
      emailSubject = "Other Inquiry from Website";
    }
    const {  error } = await resend.emails.send({
      from: `Website Contact Message <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_FROM_TO || ""],
      subject: `${emailSubject}`,
      react: EmailTemplate(emailFormData),
    });
    if(error){
      throw(error)
    }
    
  } catch (error) {
    throw(error);
  }
 
};
