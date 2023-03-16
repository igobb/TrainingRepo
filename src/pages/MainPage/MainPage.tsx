import "./MainPage.scss";

import Input from "../../components/Input/Input";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import {
  loginSchema,
  FormValues,
} from "../../apiServices/loginService/validation";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const MainPage = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);

  const formik = useFormik<FormValues>({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: (values: FormValues) => {
      userContext.logIn(values.login, values.password);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: loginSchema,
  });

  if (userContext.isLogged) {
    return (<div className="main-page__container">
    <Button onClick={userContext.logOut}>Logout</Button>
    <h1>Hello, {userContext.loggedUser.userLogin}</h1>
    <img src={userContext.loggedUser.avatar} alt={userContext.loggedUser.userLogin} />
  </div>);
  }

  return (
    <div className="main-page__container">
      <Link to="/register">Register here</Link>
      <form onSubmit={formik.handleSubmit} className="form">
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
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default MainPage;
