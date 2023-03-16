import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name should have at least 3 characters")
    .required("This field is required"),
  surname: yup
    .string()
    .min(3, "Surname should have at least 3 characters")
    .required("This field is required"),
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
  repeatPassword: yup
    .string()
    .required("Please repeat your password")
    .oneOf([yup.ref("password")], "Your passwords do not match"),
});

export type FormValues = yup.InferType<typeof registerSchema>;
