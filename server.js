const express = require ('express') ;
const app = express () ;
const port = 5500 ;
const morgan = require ('morgan') ;
const path = require ('path') ;
const bodyParser = require ('body-parser') ;
const mongoose = require ('mongoose') ;

app.get('/' , (req,res)=>{
    res.send('hola bb')
})

app.listen(port,()=>{
    console.log('servidor escuchando en http://:localhost:' , port)
})