//import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

import NavBar from "../Components/navBar"



function Home(match) {

    const { id } = useParams()

    const [posts, setPost] = useState([])

    useEffect(()=>{

        axios.get(`http://localhost:5000/api/Posts/${id}`)
            .then(response => {
              //console.log(response.data)
              setPost(response.data[0])
        })
            .catch(error => {
              console.error(error);
        });
        
    },[])

    //console.log(posts)

     

    return (
     <>
      <NavBar Logo={'Voltar'} NewPost={false}/>

      <div /* key={key} */  className='d-flex  justify-content-center mb-3'> 

        <div className="card  mt-5" style={{ width: '28rem' }} >
            
            <div className="card-body bg-dark">
                <h5 className="card-title">{posts.title}</h5><hr/>
                <p className="card-text">{posts.text}.</p>

            </div>
            
        </div>


     </div>

     </>
    )
  }
  
  export default Home;
  