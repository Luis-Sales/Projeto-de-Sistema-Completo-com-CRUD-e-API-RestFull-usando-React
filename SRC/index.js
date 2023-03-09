const express = require('express')
const path = require('path')

//Cors
const cors = require('cors')

const app = express()



app.use(cors({
    origin:'http://localhost:3000'
   
}))



//Rotas
const routes = require('./Routes/routes')

//EXportação no Banco de Dados
const db = require('./DataBase/db')


// Receber Dados Via Json
app.use(express.json())

// conexão com o BD
db.connect() 

//Dados via formulario post
app.use(express.urlencoded({extended: true}))

//definino as rotas
app.use('/api', routes)

const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`Serve escultando na porta ${port}`)  ) 