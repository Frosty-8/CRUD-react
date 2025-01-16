/*
    Axion library is used to make HTTP requests from the browser.
    Axios is a promise-based HTTP client for the browser and Node.js.
    Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
    Axios is a library that helps us to make http requests to external resources.
*/

import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users";

export function Post(){
    const [post,setPost] = useState(null);

    const fname = "Sarthak";
    const lname = "Dongare";

    useEffect(() => {
        axios.get(baseURL).then((response)=>{
            setPost(response.data);
        });
    },[]);  

    function createPost(){
        axios.post(baseURL,{
            firstName:fname,
            lastName:lname
        }).then((response)=>{
            setPost(response.data);
        });
    }

    if(!post) return "No post!";
    
    return (
    <div>
        <h1>First Name : {post.firstName}</h1>
        <h1>Last Name : {post.lastName}</h1>
        <button onClick={createPost}>Create Post</button>
    </div>
  )
}
