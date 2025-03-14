/*hacer coneccion usando libreria*/
let mysql = require('mysql');


let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'restaurante',
    user: 'root',
    password: ''
});


/*Comprobar si esta haciendo conexion con la base de datos*/

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log('conexion exitosa')
    }
})

conexion.end();
