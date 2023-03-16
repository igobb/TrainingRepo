import "./ClientsPage.scss";

import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getClients } from "../../apiServices/clientService/getClients";
import { Client } from "../../apiServices/clientService/types";

const ClientsPage = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    getClients().then((data) => setClients(data));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <Link
        to="/clients/add"
        style={{
          padding: ".5rem 1rem",
          backgroundColor: "rgb(50,50,50)",
        }}
      >
        Add a client
      </Link>
      <div className="cards__container">
        {clients.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
};

export default ClientsPage;
