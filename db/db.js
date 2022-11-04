const mongoose=require("mongoose")
require('dotenv').config();

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Base de datos Conectada") 
    } catch (error) {
        console.log("No se pudo conectar")
        console.log(error.message)
    }
}
module.exports={connect}