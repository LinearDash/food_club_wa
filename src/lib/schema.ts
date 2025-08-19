import z from "zod";

export const formSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.enum(["general", "catering", "feedback", "other"], "Subject is required"),
  message: z.string().min(1, "Message is required"),
})