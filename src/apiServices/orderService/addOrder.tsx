import { Order } from "./types";

export const addOrder = async (orderData: Order) => {
  const response = await fetch(`http://localhost:3000/orders`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) {
    return {};
  }
  const data = await response.json();
  return data;
};
