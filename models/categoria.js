import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const categoriaSchema= new Schema({
    nombre:{type: String, required:[true,'Nombre de mascota obligatorio']},
    descripcion: String,
    usuarioId:String,
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});
//Convertir modelo
const categoria= mongoose.model('Categoria',categoriaSchema);
export default categoria;