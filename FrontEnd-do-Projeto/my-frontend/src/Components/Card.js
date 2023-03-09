import React,{useState} from "react"

import { Link } from "react-router-dom"

import axios from "axios"

import './Card.css'

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


//import axios from "axios"

 

const Card = (props ) =>{

    function handleClick(id) {
        const data = id
        props.onData(data);
    }

    
    const data = props.posts

    const deletePost = (id) => { 
        //console.log(id)  
        axios.delete(`http://localhost:5000/api/Posts/${id}`)
        handleClick(id)
        //setPosts(posts.filter(post => post._id !==id))
    }

    const[openModal, setOpenModal] = useState(false)

    const modalDeletePost = (id) =>{

        deletePost(id)

        setOpenModal(!openModal)

        fecharModal()

    }

    const fecharModal =() =>{

        setTimeout(() => {
            setOpenModal(false);
          }, 3000); // 5 segundos
    }



    console.log(openModal)


    return(
    <>
            {openModal &&     
                <Stack className="top-5" sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">Item excluido com sucesso</Alert>
                </Stack>
            }

        {data.map((post, key) =>{
         return(

                    <div  key={key}   className='d-flex   justify-content-center mb-3'> 

                        <div className="card  mt-5" style={{ width: '28rem' }} >
                            
                            <div className="card-body bg-dark ">
                                <h5 className="card-title">{post.title}</h5><hr/>
                                <p className="card-text">{post.description}</p>
                                
                                <Link to={`/edit/${post._id}`}><button type="button" className="btn btn-info  mx-3 col-3">Edit</button></Link>
                                <Link to={`/lerMais/${post._id}`}><button type="button" className="btn btn-success mx-3  col-3">Ler Mais</button></Link>
                               
                                <button type="button"  class="btn btn-danger mx-3  col-3 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Excluir
                                </button>
                                
                                
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" onClick={()=> modalDeletePost(post._id)} href="#">Tem certeza ?</a></li>

                                </ul>
                            </div>
                            
                        </div>

                        
                    </div>
 
                )
        })}         


    </>

    ) 
}

export default Card