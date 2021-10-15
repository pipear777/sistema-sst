const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

//Conexión bd
const mongoose = require('mongoose');
const url= 'mongodb://localhost:27017/sistema-sst'
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(url,options).then(
    ()=>{console.log('Conectado a mongo');},
    err=>{err}
);

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//rutas
app.get('/', function(req,res){
    res.send('hola mundos')
});

//middleware para vue.js
app.use('/api',require('./routes/categoria'));
app.use('/api',require('./routes/usuario'));
app.use('/api',require('./routes/producto'));
app.use('/api',require('./routes/dependencia'));
app.use('/api',require('./routes/solicitud'));
app.use('/api',require('./routes/empleado'));
const history= require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function(){
    console.log('escuchando el puerto' + app.get('puerto'))
});