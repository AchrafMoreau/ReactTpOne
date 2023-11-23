import express from 'express'
import cors  from 'cors'




const app = express()

app.use(cors())
app.use(express.json())

const db = [
    {id:1, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:2, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:3, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:4, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:5, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:6, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:7, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:8, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:9, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:10, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:11, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:12, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
    {id:13, body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga officia voluptate nesciunt alias quidem!"},
]

// app.get('/', (req, res)=>{
//     console.log('all good')
//     res.send("all good")
// })
app.get('/api/user/todo', (req, res)=>{
    res.status(200).json(db)
})

app.post('/api/user/newTodo', (req,res)=>{
    console.log(req.body)
    const {body} = req.body
    db.push({id: Math.floor((Math.random() + db.length) * 5000), body})

    res.status(201).json({
        // req
        message: "New Todo Was Created",
    })
} )

app.put('/update:id', (req, res)=>{
    const id = req.params
    
    db.forEach((elm)=>{
        elm.id == id ? elm.body = body : elm
    })

    res.status(200).json({
        message: "Todo Was Update :)"
    })
})

app.listen(3000, ()=> console.log("we are listing to the port 3000"))