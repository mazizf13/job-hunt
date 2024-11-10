import { z } from "zod";

export const formFilterSchema = z.object({
  categories: z.array(z.string()),
});

export const formFilterCompanySchema = z.object({
  industry: z.array(z.string()),
});

export const formApplySchema = z.object({
  resume: z
    .any()
    .refine((file: any) => file?.name > 0, "Please upload your resume!"),
  fullname: z
    .string({ required_error: "Please enter your name!" })
    .min(5, "Fullname must be at least 5 characters!"),
  email: z
    .string({ required_error: "Please enter your email!" })
    .email("Please enter a valid email!"),
  phone: z
    .string({ required_error: "Please enter your phone number!" })
    .min(8, "Phone number must be at least 8 characters!"),
  previousJobTitle: z.string(),
  linkedIn: z.string(),
  portfolio: z.string(),
  coverLetter: z.string(),
});
