import { Link } from "react-router-dom";
import "./OrderCard.scss";
import { Order } from "../../apiServices/orderService/types";

const OrderCard = ({
  phoneNumber,
  quantity,
  orderTitle,
  orderContent,
  id,
}: Order) => {
  return (
    <div className="order-card__container">
      <Link to={`/orders/${id}`}>Details</Link>
      <h1>{orderTitle}</h1>
      <p>{phoneNumber}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default OrderCard;
