const mongoose = require('mongoose');
//*** */ conexion a base de datos local osea tu pc
// mongoose.connect('mongodb://localhost/mydatabase')
// .then(db => console.log('conectado exitosamente', db))
// .catch(err=>console.error(err));
/*** conexion a base de mongo contenedor ***/

mongoose.connect('mongodb://mongo/mydatabase', 
{useNewUrlParser: true, useUnifiedTopology: true
}).then(db=>console.log('conexion exitosa a base de datos',db.connection.host))
.catch((error)=>console.log(error))