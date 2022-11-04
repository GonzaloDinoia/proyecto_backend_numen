const {Vehiculo}=require("../models/Vehiculo")

const validarID=async(req,res,next)=>{
    const vehiculo = await Vehiculo.findById(req.params.id)
    if (vehiculo !== null){
        next()
    }else{
       res.status(500).json({msg: 'El ID no es válido!'})
    }
}

module.exports={validarID}