import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users/";
var id=6;


export function Put(){
    const[put,setPut] = useState(null);

    const fname="New aissms";
    const lname="New engg college";

    useEffect(()=>{
        axios.put(baseURL + id,{
        }).then((response)=>{
            setPut(response.data);
        });
    },[]);
    if(!put) return "No post!";

    function updatePost(){
        axios.put(baseURL + id,{
            firstName:fname,
            lastName:lname
        }).then((response)=>{
            setPut(response.data);
        });
    }

  return (
    <div>
        <h2>First name : {put?.firstName}</h2>
        <h2>last name : {put?.lastName}</h2>
        <button onClick={updatePost}>Name Post</button>
    </div>
  )
}
