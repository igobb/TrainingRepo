export const getClient = async (id:string) => {
    const response = await fetch(`http://localhost:3000/clients/${id}`);
    if(!response.ok){
      return []
    }
    const data=await response.json();
    return data;
  };