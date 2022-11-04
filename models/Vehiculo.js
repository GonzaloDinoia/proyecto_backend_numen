const mongoose=require('mongoose')
const Schema=mongoose.Schema

const vehiculoSchema = new Schema({
    codigo:{
        type: Number,
        required: true,
        unique:true
    },
    tipo:{
        type: String,
        required: true,
    }, 
    marca:{
        type: String,
        required: true,
    },
    modelo:{
        type: String,
        required: true,
    },
    anio:{
        type: Number,
        required: true,
    }, 
    km:{
        type: Number,
        required: true,
    }, 
    descripcion:{
        type: String,
        required: true,
    },   
    precio:{
        type: Number,
        required: true,
    },
    permuta:{
        type: Boolean,
        required: true,
    }

})

const Vehiculo=mongoose.model('Vehiculo', vehiculoSchema);

module.exports={Vehiculo};