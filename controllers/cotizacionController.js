const axios=require("axios")

const consultaCotizacionOficial=async(req,res)=>{
    try {
        const {data}=await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
        res.json({estado:data.status, tipo:data[0].casa.nombre, compra:data[0].casa.compra, venta:data[0].casa.venta})
    } catch (error) {
        
        res.json({data:error.response.data, estado: error.response.status})
    }
}

const consultaCotizacionBlue=async(req,res)=>{
    try {
        const {data}=await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
        res.json({estado:data.status,tipo:data[1].casa.nombre, compra:data[1].casa.compra, venta:data[1].casa.venta})
    } catch (error) {
        res.json({data:error.response.data, estado: error.response.status})

    }
}

module.exports={consultaCotizacionOficial, consultaCotizacionBlue}