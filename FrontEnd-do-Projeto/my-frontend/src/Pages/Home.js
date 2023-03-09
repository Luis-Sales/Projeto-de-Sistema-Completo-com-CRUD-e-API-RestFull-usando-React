//import { Link } from "react-router-dom";

import React,{useState, useEffect} from "react";

import NavBar from "../Components/navBar"
import Card from "../Components/Card"

import axios from "axios";


function Home() {



  function handleData(data) {
    setPost(posts.filter(post => post._id !== data))
  }



    const [posts, setPost] = useState([])

    useEffect(()=>{

        axios.get('http://localhost:5000/api/Posts/')
            .then(response => {
              //console.log(response.data)
              setPost(response.data)
            })
            .catch(error => {
              console.error(error);
            });
        
    }, [])

    return (
     <>
      <NavBar Logo={'Crud Teste'} NewPost={true}/>

      <div className="container">
          <div className="row row-cols-2 ">   
              <Card posts={posts} onData={handleData} />
          </div>
        
      </div>

 
       
    

     </>
    )
  }
  
  export default Home;
  