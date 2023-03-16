import {FormValues} from './validation'

export const addClient=async (clientData:FormValues)=>{
    const response = await fetch(`http://localhost:3000/clients`, {
      method: "POST",
       headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify(clientData),
    });
    if (!response.ok) {
      return {};
    }
    const data = await response.json();
    return data;
}