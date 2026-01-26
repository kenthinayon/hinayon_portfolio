import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email.")
    .max(254, "Email is too long."),
  subject: z
    .string()
    .trim()
    .min(2, "Please enter a subject.")
    .max(120, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(2000, "Message is too long."),

  // Honeypot spam field: should stay empty.
  company: z.string().optional().default(""),
});

export type ContactPayload = z.infer<typeof contactSchema>;
