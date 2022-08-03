const dbConnect = require('./mongodb')


const update = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:"Nord"} , {$set :{price:20000}}
    )
}

update();