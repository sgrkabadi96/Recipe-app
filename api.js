let express = require('express')
const dbConnect = require('./mongodb')


const app =  express();

app.use(express.json());

// ! GET API 
// app.get('/' ,async (req , resp)=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     resp.send(data)
// }).listen(4500)


// ! POST API 

// app.post('/' , (req , resp) => {
//     console.log(req.body)
//     resp.send({name:'Sagar'})
// }).listen(5000)


// ! PUT API 

// app.put( '/' , (req , resp) => {
//     console.log(req.body);
//     resp.send(req.body)
// }).listen(4500)