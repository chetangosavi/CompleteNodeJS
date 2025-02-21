import http from 'http'

const host = 'localhost'
const port = 8000

const server = http.createServer((req,res)=>{
    if(req.method === 'POST'){
        let body = ''
        req.on('data', chunk=>{
            body+=chunk
        })
        req.on('close',()=>{
            console.log(body)
        })

        //now it is important to close connection by respond to request else
        //server will go in handing state

        res.writeHeader(201)
        res.end('OK')
    }
    else{
        res.writeHead(200)
        res.end('HI')
    }
})

server.listen(port,host,()=>{
    console.log(`Server is Runing On PORT : ${port}`)
});