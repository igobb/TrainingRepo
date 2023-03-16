import "./AddClientPage.scss";

import { Button } from "@mui/material";
import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { addClient } from "../../apiServices/clientService/addClient";
import {
  FormValues,
  clientSchema,
} from "../../apiServices/clientService/validation";

const AddClientPage = () => {
  const navigate = useNavigate();
  const handlePreviousPage = () => {
    navigate(-1);
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      surname: "",
      city: "",
      region: "",
      phoneNumber: "",
      postCode: "",
      street: "",
      imgSrc: "",
    },
    onSubmit: (values: FormValues) => {
      addClient(values);
      alert("New user added!");
    },
    validationSchema: clientSchema,
  });

  return (
    <div className="add-client-page__container">
      <div className="link__container">
        <Link to="/clients">Back to clients page</Link>
      </div>

      <form onSubmit={formik.handleSubmit} className="form">
        <Input formik={formik} label={"Name"} name={"name"} />
        <Input formik={formik} label={"Surname"} name={"surname"} />
        <Input formik={formik} label={"City"} name={"city"} />
        <Input formik={formik} label={"Post code"} name={"postCode"} />
        <Input formik={formik} label={"Region"} name={"region"} />
        <Input formik={formik} label={"Street"} name={"street"} />
        <Input formik={formik} label={"Phone number"} name={"phoneNumber"} />
        <Input formik={formik} label={"Photo of User"} name={"imgSrc"} />
        <Button type="submit" onClick={handlePreviousPage}>
          Add this User
        </Button>
      </form>
    </div>
  );
};

export default AddClientPage;
