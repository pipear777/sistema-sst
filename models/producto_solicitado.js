import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const producto_solcitadoSchema= new Schema({
    solicitudId:{type: String, required:[true,'Id de la solicitud']},
    productoId: String,
    cantidad: Number,
    observacion: String,
    usuarioId:String,
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});
//Convertir modelo
const producto_solcitado= mongoose.model('Producto_solicitado',producto_solcitadoSchema);
export default producto_solcitado;