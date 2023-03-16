import * as yup from "yup";

export const clientSchema = yup.object({
  name: yup.string().min(3).required("Name is required"),
  surname: yup.string().min(3).required("Surname is required"),
  street: yup.string().min(5).required("Street is required"),
  postCode: yup
    .string()
    .matches(
      /[0-9]{2}-[0-9]{3}/,
      "The postal code must be entered according to the pattern: 00-000"
    )
    .required("Post code is required"),
  city: yup.string().min(3).required("City is required"),
  region: yup.string().min(3),
  imgSrc: yup.string(),
  phoneNumber: yup
    .string()
    .matches(
      /[+][0-9]{11}/,
      "The phone number must be entered according to the pattern: +48123123123"
    )
    .required("Phone number is required"),
});

export type FormValues = yup.InferType<typeof clientSchema> & {id?:string};