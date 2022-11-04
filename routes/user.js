const express = require('express');
const { register,login,logout, sesionActual} = require('../controllers/userController');
const {check}=require("express-validator");

const router = express.Router();

//MUESTRA SESION ACTUAL en user/actual
router.get('/actual',sesionActual)

//CREA USUARIO NUEVO en user/crear
router.post('/crear',[
    check("nombre").not().isEmpty().withMessage("El nombre no puede estar vacío").isLength({min:5,max:20}).withMessage("El nombre debe tener entre 5 y 20 caracteres"),
    check("email").not().isEmpty().withMessage("El email no puede estar vacío").isEmail().withMessage("El email debe ser válido"),
    check("password").not().isEmpty().withMessage("La contraseña no puede estar vacía").isLength({min:5,max:20}).withMessage("La contraseña debe tener entre 5 y 20 caracteres"),
    check("admin").not().isEmpty().withMessage("Debe especificar si tiene o no permisos de admin"),

], register); 

//LOGIN USUARIO en user/login
router.post('/login',[
    check("email").not().isEmpty().withMessage("El email o la contraseña son inválidos").isEmail().withMessage("El email debe ser válido"),
    check("password").not().isEmpty().withMessage("El email o la contraseña son inválidos").isLength({min:5,max:20}).withMessage("La contraseña debe tener entre 5 y 20 caracteres"),

], login); 

//LOGOUT USUARIO en user/logout
router.delete('/logout',logout);//logout usuario

module.exports=router;