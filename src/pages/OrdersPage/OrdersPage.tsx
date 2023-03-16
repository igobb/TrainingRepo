import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../../apiServices/orderService/getOrders";
import OrderCard from "../../components/OrderCard/OrderCard";
import "./OrdersPage.scss";
import { Order } from "../../apiServices/orderService/types";

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getOrders().then((data) => setOrders(data));
  }, []);

  console.log(orders);
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <div className="buttons__container">
        <Link to="/orders/add">Add order</Link>
      </div>
      <div className="orders__container">
        {orders.map((order) => {
          return <OrderCard key={order.id} {...order} />;
        })}
      </div>
    </div>
  );
};

export default OrdersPage;
