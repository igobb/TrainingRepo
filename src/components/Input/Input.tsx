import { TextField } from "@mui/material";

const Input = ({ formik, label, name }) => {

  return (
    <TextField
      error={Boolean(formik.touched[name] && formik.errors[name])}
      helperText={
        formik.touched[name] && formik.errors[name] ? formik.errors[name] : null
      }
      id="filled"
      label={label}
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      margin="dense"
    />
  );
};

export default Input;
