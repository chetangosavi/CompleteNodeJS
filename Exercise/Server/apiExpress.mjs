import express from 'express'
import morgan from 'morgan'
import bp from 'body-parser'

const app = express()

app.use(bp.urlencoded({extended: true})) 
app.use(bp.json())
app.use(morgan('dev'))

let db = [];

app.post('/todo',(req,res)=>{
    const newTodo = {
        id : Date.now(),
        text : req.body.text
    }
    db.push(newTodo)
    res.json(newTodo)
})

app.get('/todos',(req,res)=>{
    res.json(db);
})

app.listen(8000,()=>{
    console.log("Server is running on port : 8000")
})