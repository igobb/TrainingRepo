export const getClientByPhoneNumber = async (phoneNumber: string) => {
  const response = await fetch(
    'http://localhost:3000/clients?'+ new URLSearchParams({
    phoneNumber,
}
  ));
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
};
