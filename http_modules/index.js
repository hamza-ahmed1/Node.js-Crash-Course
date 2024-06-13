const http=require('node:http');

const fullname={
    fname:"Hamza",
    lname:"khan"
}
//JSON 
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'application/json'});//all is well 
//     res.end(JSON.stringify(fullname));

// });

// server.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// })

//HTML tags 
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'});//all is well 
//     res.end("<h1>Hello world</h1>");

// });

// server.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// })

//*****HTML FILES
const fs=require('node:fs');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});//all is well 
    //reading from stream
    fs.createReadStream('./index.html').pipe(res);



});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})