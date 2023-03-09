import React,{useState} from "react"

import { useNavigate } from "react-router-dom"


import NavBar from "../Components/navBar"
import Loading from "../Components/Loading"

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import axios from "axios"

const schema = yup.object({
    text: yup.string().required('Campo  Conteúdo é  Obrigatorio').min(10, "Precisa ter 40 caracterers"),
    title: yup.string().required('Campo Título é Obrigatorio').max(16, "Maximo 10 caracterers"),
    description: yup.string().required('Campo Descrição é Obrigatorio').min(10, "Minímo 10 caracterers"),
}).required();

const Create = () =>{

    const navigate = useNavigate()
   

    const { register, handleSubmit, reset,  formState: { errors } } = useForm({
        resolver: yupResolver(schema)
        
    })

    
    const addPost = data => axios.post('http://localhost:5000/api/Posts/', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response)=>{
        //console.log(data)
       // console.log(response);

       handleLoading()


      })

      const handleLoading=()=>{
        
        setTimeout(() => {
            setIsVisible(!isVisible)
            reset()
            navigate("/");
          }, 3000); // 5 segundos
        setIsVisible(!isVisible)
      }

      const [isVisible, setIsVisible] = useState(true);

    return(
    <>
    
            <NavBar Logo={'Voltar'} NewPost={false}/>

            {isVisible === true && 
        <div /* key={key} */  npm st='d-flex  justify-content-center mb-3'> 

            <div className="   card  mt-5" style={{ width: '28rem', color:  'rgb(61, 230, 9)' }} >
                    
                <div className="card-body bg-dark">
                    <form onSubmit={handleSubmit(addPost)} >
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Titulo</label>
                                <input type="text" name='title' {...register("title")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <p className="text-danger col-12 mt-3">{errors.title?.message}</p>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Descrição</label>
                                <input type="text" name='description' {...register("description")} class="form-control" id="exampleInputPassword1"/>
                                <p className="text-danger col-12 mt-3">{errors.description?.message}</p>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Texto</label>
                                <textarea type="text" name='text' {...register("text")} class="form-control" id="exampleInputPassword1">

                                </textarea>
                                <p className="text-danger col-12 mt-3">{errors.text?.message}</p>
                            </div>

                            <button  type="submit" class="btn btn-success">Enviar</button>
                            
                    </form>
                </div>
                    
            </div>


        </div>}

        {isVisible === false && <Loading/> }

    </>
    )
}

export default Create