# PROYECTO INTEGRADOR BACKEND

## Dependencias utilizadas:  
  
-Axios  
-Bcrypt  
-Dotenv  
-Express  
-Express-Session  
-Express-Validator  
-Mongoose  

## Funcionalidades:  

-Registro, Login/Logout de usuarios y consulta sesión activa (Bcrypt - Express - Express-Session - Express-Validator - Mongoose):  
http://localhost:3000/user/crear REGISTRO DE USUARIO  
http://localhost:3000/user/login LOGIN USUARIO  
http://localhost:3000/user/logout LOGOUT USUARIO  
http://localhost:3000/user/actual SESIÓN ACTIVA  

-CRUD Vehiculos(Express - Express-Validator - Mongoose):  
http://localhost:3000/vehiculos/crear CREA VEHICULO (Sólo usuarios logueados con permiso admin)  
http://localhost:3000/vehiculos/actualizar ACTUALIZA VEHICULO (Sólo usuarios logueados con permiso admin)  
http://localhost:3000/vehiculos/eliminar ELIMINA VEHICULO (Sólo usuarios logueados con permiso admin)  
http://localhost:3000/vehiculos/ver MUESTRA LISTADO  
http://localhost:3000/vehiculos/id MUESTRA VEHICULO POR ID  

-Consulta API externa para cotización dolar oficial y blue (Axios)  
http://localhost:3000/cotizacionOficial MUESTRA COTIZACION DOLAR OFICIAL  
http://localhost:3000/cotizacionBlue MUESTRA COTIZACION DOLAR BLUE  