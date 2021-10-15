import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const dependenciaSchema= new Schema({
    nombre:{type: String, required:[true,'Nombre del producto']},
    usuarioId:String,
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});
//Convertir modelo
const dependencia= mongoose.model('Dependencia',dependenciaSchema);
export default dependencia;