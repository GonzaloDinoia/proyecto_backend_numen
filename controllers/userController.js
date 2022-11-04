const {User}=require("../models/User")
const bcrypt=require("bcryptjs")
const {validationResult}=require("express-validator")


//CREA USUARIO
const register =async(req,res)=>{
    
    try {
        const err=validationResult(req)
        
        if (err.isEmpty()) {
            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(req.body.password, salt) //recibe una entrada (pass) y una configuracion (salt)
            let usuario={
                nombre: req.body.nombre,
                email: req.body.email,
                password: hash,
                admin:req.body.admin
            }
            const nuevoUsuario= new User(usuario);
            await nuevoUsuario.save();
            res.status(201).json({
                msg:'El usuario se registró correctamente!',
                usuario:nuevoUsuario
        })                        
        } else {
            res.status(501).json(err)
        }     
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
    
}

//LOGIN USUARIO
const login=async(req,res)=>{
    try {
        const usuario = await User.findOne({email: req.body.email})
        if (usuario===null){
            res.status(404).json({msg: "El usuario o la contraseña son inválidos"})
        }else{
            bcrypt.compare(req.body.password, usuario.password).then((validPassword)=>{
                if (validPassword){
                    const user={
                        _id:usuario._id,
                        email:usuario.email,
                        //admin:usuario.admin
                    }
                    req.session.user = user;
                    req.session.admin = usuario.admin;
                    res.status(200).json({msg: "Usuario logueado exitosamente!", usuario:user})
                }else{
                    res.status(401).json({msg: "El usuario o la contraseña son inválidos"})
                }

            })
        }
        
    } catch (error) {
        res.status(500).json({msg: error.message});

    }

}

//LOGOUT USUARIO
const logout=async(req,res)=>{
    req.session.destroy();
    res.status(200).json({msg:"Usuario desconectado"})
}

//MUESTRA INFO DE LA SESION ACTUAL
const sesionActual=async(req,res)=>{
    res.json(req.session)
}

module.exports={register,login,logout,sesionActual}