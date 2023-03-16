import {FormValues} from "./validation"
export const editClient =async (newData:FormValues, id:string)=>{
    const response = await fetch(`http://localhost:3000/clients/${id}`, {
      method: "PUT",
       headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify(newData),
    });
    if (!response.ok) {
      return {};
    }
    const data = await response.json();
    return data;
}