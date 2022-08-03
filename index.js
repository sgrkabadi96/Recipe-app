//! Basics : importing module and etc
// const fs = require('fs'); // fs is local module
// fs.writeFileSync("hello.txt","Sagar Kabadi")
// fs.writeFileSync("file2.txt","Hello")
// console.log("Your curr dir -> " +  __dirname)
// console.log("Your curr file -> " +  __filename)


// ! Making basic server
// const http = require('http');
// function dataControl(req , resp){
//     resp.write("Hello,This is response")
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);

// ! Package.json file 
// Details of project : 
// Like project version , name ,commads , package etc
// npm init
// npm i (package name)
// var colors = require('colors')
// console.log("hello".red);

// ! Nodemon | time saving module 
// once we change the code we need to run again and again 
// nodemon runs nodejs project continously
// Node js is asycn and single threaded language.


//! Make a simple api 
// const http = require('http')
// const data = require('./data');
// http.createServer((req , resp)=> {
//     resp.writeHead(200 , {'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);


//! How to take input from command line 
// process is an object 
// const fs = require('fs');
// const input = process.argv;
// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4])
// } else if(input[2] == 'remove') {
//     fs.unlinkSync(input[3]);
// } else {
//     console.log("invalid output")
// }

// ! Show file list 
// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname , 'files');
// console.log(dirPath);
// for(var i = 0 ; i < 5 ; i++){
//     fs.writeFileSync(`${dirPath}/file${i}.txt` , `This is file ${1}`);
// }
// fs.readdir(dirPath , (err , files)=> {
//     files.forEach(element => {
//         console.log(element);
//     });
// });



//! Crud operation with file system 
const fs = require('fs')
const path = require('path')
const crudPath = path.join(__dirname , './CRUD')
const filePath = `${crudPath}/apple.txt`

// fs.writeFileSync(filePath , "data")
// fs.readFile(filePath , (error , item)=>{
//     console.log(item.toString())
// });

// fs.appendFile(filePath , '\nadd more data' , (err) => {
//     if(!err){
//         console.log("file is updated");
//     }
// })

// fs.rename(filePath , `${crudPath}/fruit.txt` , (err) => {
    
// })

// fs.unlinkSync(`${crudPath}/fruit.txt`)




//! Asycnchronous Basics of Node JS 
// console.log("Start")

// setTimeout(() => {
//     console.log("Completed");
// }, 1000);

// console.log("End")

// ? Disadvtage of asycn
// var a = 10 , b = 20 ;
// setTimeout(() => {
//     b = 0
// }, 1000);
// console.log(a + b);




// ! How to handle Async data 
// var a  = 10  , b = 20 ; 

// let WaitingData = new Promise((resolve  , reject ) => {
//     setTimeout(()=> {
//         resolve(30)
//     } , 2000)
// })

// WaitingData.then((data)=> {
//     console.log(a + data);
// })



// ! Express JS 
// What is Express ? 
// It is framework of node js 
// const Express = require('express');
// const app = Express();
// app.get('' , (req , resp) => {    
//     resp.send("Hello, this is home page")
// })
// app.get('/about' , (req , resp) => {    
//     resp.send("Hello, this is About page")
// })

// app.listen(5000)


//!Routing in Express Page 
// const express = require('Express')
// const Path = require('path')
// var dirPath = Path.join(__dirname , 'public');
// const app = express();
// app.use(express.static(dirPath))
// app.listen(4500)


//! hiding Extention 
// const express = require('Express')
// const Path = require('path')
// var dirPath = Path.join(__dirname , 'public');
// const app = express();

// app.get('',(req , resp)=> {
//     resp.sendFile(`${dirPath}/index.html`)
// })
// app.get('/about',(req , resp)=> {
//     resp.sendFile(`${dirPath}/about.html`)
// })

// app.get('*' , (req , resp)=>{
//     resp.sendFile(`${dirPath}/404.html`)
// })

// app.listen(4000)





//! Template Engine : 
// helps in dynamic pages 
// npm pakage
// dynamic pages 
// Module use : ejs 


// const express = require('Express')
// const Path = require('path')
// var dirPath = Path.join(__dirname , 'public');
// const app = express();
// app.set('view engine' , 'ejs') //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// app.get('',(req , resp)=> {
//     resp.sendFile(`${dirPath}/index.html`)
// })
// app.get('/profile',(req , resp)=> {
//     const  user = {
//         Name : "Sagar" , 
//         email : "sgrKabadi"
//     }
//     resp.render('profile' , {user})
// })  
// app.get('*' , (req , resp)=>{
//     resp.sendFile(`${dirPath}/404.html`)
// })
// app.listen(4000)



// ! Middle Ware 
// we can access request and resp using middle ware 
// const express = require('express')
// const app = express() 
// const reqFilter = (req , resp , next) => {
    // console.log('reqFilter')
//     if(!req.query.age){
//         resp.send("Please enter age")
//     } else next();
// }
// app.use(reqFilter)

// app.get('',(req, resp)=>{
//     resp.send('Welcom to home Page')
// })
// app.get('/user' , (req , resp)=>{
//     resp.send("Welcome to users page")
// })
// app.listen(4000)



 

// ! Connecting Mongo with Node 

// const {MongoClient} =require('mongodb')
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// async function dbConnection() {
//     let result =await client.connect();
//     let db = result.db('eCom')
//     if(db) console.log("Data Base connnected");
//     let collection = db.collection('products')
//     let data = await collection.find({}).toArray();
//     console.log(data);
// }
// getData();




//! Reading Data from Database using node 

const dbConnect = require('./mongodb')
// dbConnect().then((resp)=> {
//     resp.find({}).toArray().then((data)=>{
//         console.log(data);
//     })
// })




// ! MONOGOOES 

const mongooes =require('mongoose')
url = "mongodb://localhost:27017/eCom"
const  main = async() => {
    await mongooes.connect(url)
    const ProductSchema = new mongooes.Schema({
        name: String, 
        price: Number 
    });

    const ProductsModel = mongooes.model('products' , ProductSchema)
    let data = new ProductsModel({name:"X2" , price:20000})
    let result =await data.save()
    console.log(result);
}

main()