const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    admin:{
        type: Boolean,
        required: true
    }
})

const User=mongoose.model('User', userSchema);

module.exports={User};