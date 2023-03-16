export const getOrder = async (id: string) => {
  const response = await fetch(`http://localhost:3000/orders/${id}`);
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
};
