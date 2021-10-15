import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const productoSchema= new Schema({
    codigo:{type: String, required:[true,'Código del producto']},
    nombre:{type: String, required:[true,'Nombre del producto']},
    unidad_medida: String,
    vida_util: Number,
    cantidad: Number,
    categoriaId: String,
    usuarioId:String,
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});
//Convertir modelo
const producto= mongoose.model('Producto',productoSchema);
export default producto;