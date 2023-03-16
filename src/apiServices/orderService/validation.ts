import * as yup from "yup";

export const orderSchema = yup.object({
  phoneNumber: yup.string().required("You must select a client"),
  quantity: yup
    .number()
    .min(2, "The value must be greater than 1")
    .max(14, "The value must be less than 15")
    .required("You must specify quantity"),
  orderTitle: yup
    .string()
    .min(5, "Title must have at least 5 characters")
    .required("You must provide a title"),
  orderContent: yup
    .string()
    .min(10, "Content of order must have at least 10 characters")
    .required(),
});

export type FormValues = yup.InferType<typeof orderSchema> & {id?:string};
