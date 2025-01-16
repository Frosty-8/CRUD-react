import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users/";
var id=2;

export function Delete (){
    const[del,setDel] = useState(null);

    useEffect(()=>{
        axios.delete(baseURL + id).then((response)=>{
            setDel(response.data);
        });
    },[]);
    if(!del) return "No post!";

    function deletePost(){
        axios.delete(baseURL + id).then((response)=>{
            setDel(response.data);
        });
    }

  return (
    <div>
        <h2>First name : {del?.firstName}</h2>
        <h2>last name : {del?.lastName}</h2>
        <button onClick={deletePost}>Delete Post</button>
    </div>
  )
}
