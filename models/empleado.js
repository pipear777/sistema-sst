import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const empleadoSchema= new Schema({
    cedula:{type: String, required:[true,'Código del producto']},
    nombre:{type: String, required:[true,'Nombre del producto']},
    cargo: String,
    dependenciaId: String,
    usuarioId:String,
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});
//Convertir modelo
const empleado= mongoose.model('Empleado',empleadoSchema);
export default empleado;