import "./ClientPage.scss";

import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { getClient } from "../../apiServices/clientService/getOneClient";
import { deleteClient } from "../../apiServices/clientService/deleteClient";
import { Client } from "../../apiServices/clientService/types";

const ClientPage = () => {
  const { id } = useParams();

  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    if (id) {
      getClient(id).then((data) => setClient(data));
    }
  }, []);

  const handleDeleteUser = () => {
    id && deleteClient(id);
    alert("User deleted!");
  };

  return (
    <>
      {client && (
        <div className="client-page__container">
          <div className="buttons__container">
            <Link to="/clients">
              <Button variant="outlined">Back to client selection</Button>
            </Link>
            <Link to={`/clients/${id}/edit`}>
              <Button variant="outlined">Edit User</Button>
            </Link>
            <Link to="/clients">
              <Button variant="outlined" onClick={handleDeleteUser}>
                Delete User
              </Button>
            </Link>
          </div>
          <div className="client__container">
            <div className="img__container">
              {client.imgSrc ? (
                <img src={client.imgSrc} alt={`Photo of ${client.name}`} />
              ) : (
                `Client don't have  avatar`
              )}
            </div>
            <div className="data__container">
              <h1>
                {client.name} {client.surname}
              </h1>
              <div className="address">
                {client.street} - {client.postCode}
              </div>
              <div className="address">
                {client.region ? client.region : "Dont have data"} -{" "}
                {client.city}
              </div>
              <h2>{client.phoneNumber}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientPage;
