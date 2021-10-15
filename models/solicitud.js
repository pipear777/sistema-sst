import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const solicitudSchema= new Schema({
    consecutivo:{type: String, required:[true,'Consecutivo de la solicitud']},
    observacion: String,
    fecha: Date,
    productoId: String,
    cantidad: Number,   
    empleadoId:String,
    usuarioId:String,
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});
//Convertir modelo
const solicitud= mongoose.model('Solicitud',solicitudSchema);
export default solicitud;