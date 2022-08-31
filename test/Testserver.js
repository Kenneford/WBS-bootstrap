// const http = require('http')

// const requestListener = function(req, res){
//     res.writeHead(200)
//     res.end("Hello Kenn")
// }

// const server = http.createServer(requestListener)
// server.listen(4000)

import express from 'express'

const app = express()
const port = 4000

function greeting(req, res){
    res.send("Hi Kenn")
}

const obj = {
    name: "Kenneford"
}

const user = {
    firstName: "Patrick",
    surname: "Annan"
}

app.get('/', greeting)
app.get('/name', (req, res)=>{
    res.send(obj)
})
app.get('/name/surname', (req, res)=>{
    res.send(user.surname)
})
app.get(`/name/surname/:user`, (req, res)=>{
    res.send(`I am a ` + req.params.user)
})

app.listen(port, () => console.log(`Server listening at ` + port))