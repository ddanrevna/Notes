import { z } from "zod";

const User = z.object({
  email: z.string().email({ message: "Incorrect email format" }),
  password: z
    .string()
    .refine((value) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(value), {
      message:
        "The password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters in length.",
    }),
});

export default User;
