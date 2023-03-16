import * as yup from "yup";

export const loginSchema = yup.object({
  login: yup
    .string()
    .min(5, "Login should have at least 5 characters")
    .required("This field is required"),
  password: yup
    .string()
    .min(8, "Password must have at least 8 characters")
    .max(30, "Password must have less than 31 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must have minimum eight characters, at least one letter and one number"
    )
    .required("Password is required"),
});

export type FormValues = yup.InferType<typeof loginSchema>;
