import { TextField } from "@mui/material";

const Input = ({ formik, name, value }) => {

  return (
    <TextField
      error={Boolean(formik.touched[name] && formik.errors[name])}
      helperText={
        formik.touched[name] && formik.errors[name] ? formik.errors[name] : null
      }
      id="filled"
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={value}
      margin="dense"
    />
  );
};

export default Input;
