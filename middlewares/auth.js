//Middleware que sólo permite continuar si el usuario tiene permisos de admin

const auth=async(req,res,next)=>{

    if (!req.session.admin){
        res.status(401).json({msg:"Esta acción sólo puede ejecutarla un usuario con permisos admin"});
    }else{
        next();
}
}

module.exports={auth}