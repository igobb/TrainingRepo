import "./EditClientPage.scss";

import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClient } from "../../apiServices/clientService/getOneClient";
import { useFormik } from "formik";
import EditInput from "../../components/EditInput/EditInput";
import { editClient } from "../../apiServices/clientService/editClient";
import {
  clientSchema,
  FormValues,
} from "../../apiServices/clientService/validation";
import { Client } from "../../apiServices/clientService/types";

const EditClientPage = () => {
  const { id } = useParams();

  const [client, setClient] = useState<Client>({
    name: "",
    surname: "",
    city: "",
    region: "",
    phoneNumber: "",
    postCode: "",
    street: "",
    imgSrc: "",
    id: "",
  });

  useEffect(() => {
    if (id) {
      getClient(id).then((data) => setClient(data));
    }
  }, []);

  const formik = useFormik<FormValues>({
    initialValues: client,
    enableReinitialize: true,
    onSubmit: (values: FormValues) => {
      if (id) {
        editClient(values, id).then((data) => {
          console.log("success", data);
        });
        alert("User edited");
      }
    },
    validationSchema: clientSchema,
  });

  const navigate = useNavigate();
  const handlePreviousPage = () => {
    navigate(-1);
  };

  if (!client) {
    return <h1>Error</h1>;
  }

  return (
    <>
      {client && (
        <div className="edit-client-page__container">
          <div className="buttons__container">
            <Button onClick={handlePreviousPage} variant="outlined">
              Previous page
            </Button>
          </div>
          <form onSubmit={formik.handleSubmit} className="form">
            <EditInput formik={formik} name={"id"} value={formik.values.id} />
            <EditInput
              formik={formik}
              name={"name"}
              value={formik.values.name}
            />
            <EditInput
              formik={formik}
              name={"surname"}
              value={formik.values.surname}
            />
            <EditInput
              formik={formik}
              name={"city"}
              value={formik.values.city}
            />
            <EditInput
              formik={formik}
              name={"region"}
              value={formik.values.region ? formik.values.region : "empty"}
            />
            <EditInput
              formik={formik}
              name={"phoneNumber"}
              value={formik.values.phoneNumber}
            />
            <EditInput
              formik={formik}
              name={"postCode"}
              value={formik.values.postCode}
            />
            <EditInput
              formik={formik}
              name={"street"}
              value={formik.values.street}
            />
            <EditInput
              formik={formik}
              name={"imgSrc"}
              value={formik.values.imgSrc ? formik.values.imgSrc : "empty"}
            />
            <Button type="submit" onClick={handlePreviousPage}>
              Update User data
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditClientPage;
