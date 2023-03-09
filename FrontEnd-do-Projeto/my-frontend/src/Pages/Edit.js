import React,{useEffect, useState} from "react"

import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"


import NavBar from "../Components/navBar"



const schema = yup.object({
    text: yup.string(),
    title: yup.string(),
    description: yup.string(),
})


const Edit = () => {


    const { id } = useParams()


    const [posts, setPost] = useState([])

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [text, setText] = useState('');


    useEffect(()=>{

        axios.get(`http://localhost:5000/api/Posts/${id}`)
            .then(response => {
              //console.log(response.data)

              reset(response.data[0])
        })
            .catch(error => {
              //console.error(error);
        });
        
    },[])

    const navigate = useNavigate()
   

    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
        
    })

    const addPost = data => axios.put(`http://localhost:5000/api/Posts/${id}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response)=>{
        //console.log(data)
       // console.log(response);
       reset()
       navigate("/");

      })


    return(
        <>
                <NavBar Logo={'Voltar'} NewPost={false}/>
    
            <div /* key={key} */  className='d-flex  justify-content-center mb-3'> 
    
                <div className="   card  mt-5" style={{ width: '28rem', color:  'rgb(61, 230, 9)' }} >
                        
                    <div className="card-body bg-dark ">
                        <form onSubmit={handleSubmit(addPost)}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Titulo</label>
                                    <input type="text" name='title' {...register("title")}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                   
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Descrição</label>
                                    <input type="text" name='description' {...register("description")}  className="form-control" id="exampleInputPassword1"/>
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Texto</label>
                                    <textarea type="text"  name='text' {...register("text")}  className="form-control" id="exampleInputPassword1">
    
                                    </textarea>
                                </div>
    
                                <button type="submit" className="btn btn-success">Salvar</button>
                        </form>
                    </div>
                        
                </div>
    
    
            </div>
    
        </>
        )
    }


export default Edit
