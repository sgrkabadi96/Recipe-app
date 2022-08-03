const dbConnect = require('./mongodb')

const insert =async () => {
    // console.log('insert Function')
    const db = await dbConnect();
    const result = db.insertOne({
        name:"POCOX2" ,
        brand:"POCO",
        cat: "Electonics " , 
        price: 19000
    })
}

insert() ;