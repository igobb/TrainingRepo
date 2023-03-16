import "./AddOrderPage.scss";

import { useFormik } from "formik";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { getClients } from "../../apiServices/clientService/getClients";
import { addOrder } from "../../apiServices/orderService/addOrder";
import { useNavigate } from "react-router-dom";
import {
  orderSchema,
  FormValues,
} from "../../apiServices/orderService/validation";
import { Client } from "../../apiServices/clientService/types";

const AddOrderPage = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    getClients().then((data) => setClients(data));
  }, []);

  const navigate = useNavigate();
  const handlePreviousPage = () => {
    navigate(-1);
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      phoneNumber: "",
      quantity: 0,
      orderTitle: "",
      orderContent: "",
    },
    onSubmit: (values: FormValues) => {
      addOrder(values);
      alert("Succes, order added");
    },
    validationSchema: orderSchema,
  });
  return (
    <div className="add-order-page__container">
      <form onSubmit={formik.handleSubmit} className="form">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-disabled-label">
            Select a client
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            label="Name and Surname"
            onChange={formik.handleChange}
            error={Boolean(
              formik.touched.phoneNumber && formik.errors.phoneNumber
            )}
            onBlur={formik.handleBlur}
          >
            {clients.map((client) => {
              return (
                <MenuItem key={client.id} value={client.phoneNumber}>
                  {client.name} {client.surname}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>
            {formik.touched.phoneNumber && formik.errors.phoneNumber
              ? formik.errors.phoneNumber
              : null}
          </FormHelperText>
        </FormControl>

        <Input formik={formik} label={"Quantity"} name={"quantity"} />
        <Input formik={formik} label={"Title of order"} name={"orderTitle"} />
        <Input
          formik={formik}
          label={"Content of order"}
          name={"orderContent"}
        />
        <Button type="submit" onClick={handlePreviousPage}>
          Add order
        </Button>
      </form>
    </div>
  );
};

export default AddOrderPage;
