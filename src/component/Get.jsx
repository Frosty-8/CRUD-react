import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
    
const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users/";
var id=5;

export function Get(){
    const[get,setGet] = useState(null);

    useEffect(()=>{
        axios.get(baseURL + id).then((response)=>{
            setGet(response.data);
        });
    },[]);
    if(!get) return "No post!";
    return (
        <div>
            <h2>First name : {get?.firstName}</h2>
            <h2>last name : {get?.lastName}</h2>
            
        </div>
  )
}
