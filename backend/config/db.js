const mongoose=require("mongoose");
const DB_URL= mongodb://localhost:27017



const connect=()=>{

    mongoose.connect(DB_URL ).then((res)=>{
        console.log(`MongoDB connected Successfully ${res.connection.host}`);
    }).catch((err)=>{
        console.log(err.message);
    })
}

module.exports=connect