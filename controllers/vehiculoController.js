const {Vehiculo}=require("../models/Vehiculo")
const {validationResult}=require("express-validator")

//OBTIENE TODOS LOS VEHICULOS
const ObtenerVehiculos= async (req,res)=>{
    const vehiculos=await Vehiculo.find()
    res.json({vehiculos})
}

//OBTIENE VEHICULO POR ID
const ObtenerVehiculoPorId=async(req,res)=>{
    try {
        const vehiculo=await Vehiculo.findById(req.params.id)
        res.status(200).json({vehiculo})
    } catch (error) {
        console.log(error)
        
    }
}


//CREA VEHICULO
const cargarVehiculo=async(req,res)=>{
    try {
        const err=validationResult(req)
        if (err.isEmpty()) {
            const vehiculo= new Vehiculo(req.body);
            await vehiculo.save();
            res.status(201).json({
                msg:'El vehiculo se cargó correctamente!',
                vehiculo:vehiculo
        })                        
        } else {
            res.status(501).json(err)
        }     
    } catch (error) {
        console.log(error)
    }
    
}

//EDITA VEHICULO
const editarVehiculo=async(req,res)=>{
    try {
        const err=validationResult(req)
        if (err.isEmpty()) {
            await Vehiculo.findByIdAndUpdate(req.params.id,req.body);
            res.status(201).json({
                msg:'El vehiculo se modificó correctamente!'
            })                        
        } else {
            res.status(501).json(err)
        }     
    } catch (error) {
        console.log(error)
    }
}

//ELIMINA VEHICULO
const eliminarVehiculo=async(req,res)=>{
    try {
        const vehiculo=await Vehiculo.findByIdAndDelete(req.params.id)
        res.json({msg:"Vehiculo eliminado correctamente!", vehiculo})
    } catch (error) {
        console.log(error)       
    }
}



module.exports={ObtenerVehiculos, ObtenerVehiculoPorId, cargarVehiculo, editarVehiculo, eliminarVehiculo}