// // // const myObject = {
// // //     name: 'Bob',
// // //     sayHello: function() {
// // //       console.log(this);
// // //     },
// // //   };
  
// //   function sayHello() {
// //     var x =10;
// //     console.log(this.x);
// //   }

// // sayHello(); // Output: "undefined" (not the object)
  
// // "use strict";
// // x = 3.14; 



// // console.log(__dirname);

// // console.log("waiting.....")
// // // clearTimeout(2000)
// // const si = setInterval(()=>{
// //     console.log("hai")
// // },100)
// // const sx = setTimeout(()=>{
// //     clearInterval(si)
// // },500);
// // clearTimeout(sx)

// // const os = require('os');
// // console.log(os.type())
// // console.log(os.arch())
// // console.log(os.version())

// // const file = require('fs');
// // file.appendFile('swathi','good',(err)=>{
// //     if(err)
// //         console.log(err)
// //     else
// //         console.log("sucess")
// // })
// // file.readFile('swathi','utf-8',(data,err)=>{
// //     if(err)
// //         console.log(err)
// //     else
// //         console.log(data)
// // })
// // file.unlink('style.css',(err)=>{
// //     if(err)
// //         console.log(err)
// //     else
// //         console.log("sucess")
// // })

// // file.rename('./123.jpg','./sample.jpg',(err)=>{
// //     if(err)
// //         console.log(err)
// //     else
// //         console.log("sucess")
// // })


// // const path  = require('path')
// // console.log(path.extname(__filename))
// const http = require('http')
// const url = require('url')

// http.createServer((req,res)=>{
//     // const route = url.parse(req.url,true).pathname
//     if('/'==req.url)
//     {
//         // res.writeHead(200,{'content-type' : 'text/json' })
//         res.write("<h1>hello</h1>");
//         res.write("good morning")
//         res.end()
//     }else if('/login' == req.url)
//     {
//         res.write("hello login");
//         res.end()
//     }

// }).listen(3000,()=>{
//     console.log("server is running")
// })


// // const eventEmiter = require('events')
// // const event = new eventEmiter();
// // event.on("Message",(data)=>{
// //     console.log(data)
// // })
// // event.emit("Message",{text:"swathi"})

// // const express = require('express');
// // const app = express()

// // function auth(req,res,next){
// //     console.log("hai");
// //     next();
// // }

// // app.get('/',auth,(req,res)=>{
// //     res.send("login")
// // })
// // app.listen(6000);

