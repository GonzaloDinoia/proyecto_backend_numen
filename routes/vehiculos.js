const express = require('express');
const { ObtenerVehiculos, ObtenerVehiculoPorId, cargarVehiculo, editarVehiculo, eliminarVehiculo} = require('../controllers/vehiculoController');
const {check}=require("express-validator");
const {validarID}=require("../middlewares/validarID");
const {auth}=require("../middlewares/auth")


const router = express.Router();

// MUESTRA TODOS LOS VEHICULOS en vehiculos/ver 
router.get('/ver', ObtenerVehiculos); 
// MUESTRA VEHICULO POR ID en vehiculos/id/aca_va_el_id_del_vehiculo_a_buscar
router.get('/id/:id([0-9a-fA-F]{24})',validarID, ObtenerVehiculoPorId);

// CREA VEHICULO en vehiculos/crear SOLO PUEDE USUARIO ADMIN
router.post('/crear',auth,[
    check("codigo").not().isEmpty().withMessage("El campo código no puede estar vacío").isNumeric().withMessage("El código debe ser un número"),
    check("tipo").not().isEmpty().withMessage("El campo tipo no puede estar vacío").isLength({min:3,max:20}).withMessage("El tipo debe tener entre 3 y 20 caracteres"),
    check("marca").not().isEmpty().withMessage("El campo marca no puede estar vacío").isLength({min:3,max:20}).withMessage("La marca debe tener entre 3 y 20 caracteres"),
    check("modelo").not().isEmpty().withMessage("El campo modelo no puede estar vacío").isLength({min:3,max:20}).withMessage("El modelo debe tener entre 3 y 20 caracteres"),
    check("anio").not().isEmpty().withMessage("El campo año no puede estar vacío").isNumeric().withMessage("El año debe ser un número"),
    check("km").not().isEmpty().withMessage("El campo km no puede estar vacío").isNumeric().withMessage("Los km deben ser un número"),
    check("descripcion").not().isEmpty().withMessage("El campo descripción no puede estar vacío").isLength({min:10,max:50}).withMessage("La descripcion debe tener entre 10 y 50 caracteres"),
    check("precio").not().isEmpty().withMessage("El campo precio no puede estar vacío").isNumeric().withMessage("El precio debe ser un número"),
    check("permuta").not().isEmpty().withMessage("El campo permuta no puede estar vacío")
], cargarVehiculo);

//ACTUALIZA VEHICULO POR ID en vehiculos/actualizar/aca_va_el_id_del_vehiculo_a_actualizar
router.put('/actualizar/:id([0-9a-fA-F]{24})',auth,validarID,[
    check("codigo").not().isEmpty().withMessage("El campo código no puede estar vacío").isNumeric().withMessage("El código debe ser un número"),
    check("tipo").not().isEmpty().withMessage("El campo tipo no puede estar vacío").isLength({min:3,max:20}).withMessage("El tipo debe tener entre 3 y 20 caracteres"),
    check("marca").not().isEmpty().withMessage("El campo marca no puede estar vacío").isLength({min:3,max:20}).withMessage("La marca debe tener entre 3 y 20 caracteres"),
    check("modelo").not().isEmpty().withMessage("El campo modelo no puede estar vacío").isLength({min:3,max:20}).withMessage("El modelo debe tener entre 3 y 20 caracteres"),
    check("anio").not().isEmpty().withMessage("El campo año no puede estar vacío").isNumeric().withMessage("El año debe ser un número"),
    check("km").not().isEmpty().withMessage("El campo km no puede estar vacío").isNumeric().withMessage("Los km deben ser un número"),
    check("descripcion").not().isEmpty().withMessage("El campo descripción no puede estar vacío").isLength({min:10,max:50}).withMessage("La descripcion debe tener entre 10 y 50 caracteres"),
    check("precio").not().isEmpty().withMessage("El campo precio no puede estar vacío").isNumeric().withMessage("El precio debe ser un número"),
    check("permuta").not().isEmpty().withMessage("El campo permuta no puede estar vacío")
], editarVehiculo);

//ELIMINA VEHICULO en vehiculos/eliminar/aca_va_el_id_del_vehiculo_a_eliminar SOLO PUEDE USUARIO ADMIN
router.delete('/eliminar/:id([0-9a-fA-F]{24})', auth, validarID, eliminarVehiculo)

module.exports = router;
