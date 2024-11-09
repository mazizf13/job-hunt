import { z } from "zod";

export const formFilterSchema = z.object({
  categories: z.array(z.string()).refine((val) => val.some((item) => item), {
    message: "Categories array must contain at least one non-empty string.",
  }),
});
