export const deleteClient =async (id:string)=>{
    const response = await fetch(`http://localhost:3000/clients/${id}`, {
      method: "DELETE",
       headers: {"Content-type": "application/json;charset=UTF-8"},
    });
    if (!response.ok) {
      return {};
    }
    const data = await response.json();
    return data;
}