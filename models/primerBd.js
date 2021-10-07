import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const mascotaSchema= new Schema({
    nombre:{type: String, required:[true,'Nombre de mascota obligatorio']},
    especie: String,
    raza:String,
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});
//Convertir modelo
const primerBd= mongoose.model('primerBd',mascotaSchema);
export default primerBd;