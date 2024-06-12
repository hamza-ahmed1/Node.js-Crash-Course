// // const addfunc=require('./add')
// var http = require('http');
// // console.log("first")
// // addfunc(3,4)
// // http.createServer(function (req, res) {
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     res.end('Hello World!');
// //   }).listen(8080);

// //path module

// const path=require('node:path')
// console.log(__filename)
// console.log(__dirname)

// //getting base name of file path.basename(filename)
// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// //getting extension name:
// console.log(path.extname(__filename))

// //joing paths:
// console.log(path.join("folder1","folder2","index.html"))
// console.log(path.join("//folder1","folder2","index.html"))
// console.log(path.join("folder1","folder2","../index.html"))

// //resolve paths:
// console.log(path.resolve("folder1","folder2","index.html"))
// console.log(path.resolve("//folder1","folder2","index.html"))
// console.log(path.resolve
  
//   ("folder1","folder2","../index.html"))


const fs=require('node:fs');
//-------------------------synchronous way
const filecontent=fs.readFileSync('message.txt')
console.log(filecontent.toString())

//-------------------//Async

fs.readFile('message.txt',(error,data)=>{
    if (error) {
      console.log(error)
    }
    else{
      console.log(data.toString())
    }
})
//we can also do it  with promise versions

