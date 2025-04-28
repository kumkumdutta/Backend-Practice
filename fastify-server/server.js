import fastify from "fastify";

const app = fastify({
    logger: true
})

app.get('/',async(req,res)=>{
    return res.status(200).send("hello world")
})

app.post('/add', async (req,res)=>{
    let {name} = req.body
    return res.status(200).send(`hello ${name}`)
})

app.listen({port:8080}, ()=>{
    console.log("server running on port 8080")
})