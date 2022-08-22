import express from 'express'
const app = express()
const port = 5000

function greetings(req, res){
    res.send("Hello World!")
}

const greetingData = {
    greeting: "Hello Kenn"
}

app.get('/', greetings)

app.get("/salute/:name", (req, res) =>{
    res.send(`Special greeting, ` + req.params.name)
})

app.get('/api/salute', (req, res)=>{
    res.send(greetingData)
})

app.listen(port, () => console.log("Server listening at" + port))