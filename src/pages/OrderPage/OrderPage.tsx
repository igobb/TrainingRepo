import "./OrderPage.scss";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getClientByPhoneNumber } from "../../apiServices/clientService/getOneClientByPhoneNumber";
import { getOrder } from "../../apiServices/orderService/getOneOrder";
import { Order } from "../../apiServices/orderService/types";
import { Client } from "../../apiServices/clientService/types";

const OrderPage = () => {
  const { id } = useParams();

  const [order, setOrder] = useState<Order|null>(null);
  const [client, setClient] = useState<Client|null>(null);

  const getAllData=async (id:string)=>{
      const order= await getOrder(id)
      setOrder(order)
      const client=await getClientByPhoneNumber(order.phoneNumber)
      setClient(client[0]);
  }
    useEffect(() => {
    if(id){

      getAllData(id)
    }
    }, [id]);

  if(!client || !order){
    return <p>Loading...</p>
  }

  return (
    <>
        <div className="order-page__container">
          <div className="client__container">
            <h1>
              {client.name} {client.surname}
            </h1>
            <Link to={`/clients/${client.id}`}>Go to details of user</Link>
          </div>
          <div className="order__container">
            <h1>{order.orderTitle}</h1>
            <p>{order.orderContent}</p>
            <p>{order.quantity}</p>
          </div>
        </div>
    </>
  );
};

export default OrderPage;
