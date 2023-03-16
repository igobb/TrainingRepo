import "./RegisterPage.scss";

import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import { Button, TextField } from "@mui/material";
import { registerSchema, FormValues } from "../../apiServices/registerService/validation";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const RegisterPage = () => {

  const userContext = useContext(UserContext)
  console.log(userContext)

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      surname: "",
      login: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values: FormValues) => {
      //jak otypować?
      userContext.setUsers(prevValues => [...prevValues, values])
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: registerSchema,
  });

  return (
    <div className="register-page__container">
      <form onSubmit={formik.handleSubmit} className="form">
        <Input formik={formik} label={"Name"} name={"name"} />
        <Input formik={formik} label={"Surname"} name={"surname"} />
        <Input formik={formik} label={"Login"} name={"login"} />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          error={Boolean(formik.touched.password && formik.errors.password)}
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <TextField
          id="outlined-password-input"
          label="Repeat password"
          type="password"
          name="repeatPassword"
          autoComplete="current-password"
          error={Boolean(
            formik.touched.repeatPassword && formik.errors.repeatPassword
          )}
          helperText={
            formik.touched.repeatPassword && formik.errors.repeatPassword
              ? formik.errors.repeatPassword
              : null
          }
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
        />
        <Button type='submit'>Register</Button>
      </form>
    </div>
  );
};

export default RegisterPage;
