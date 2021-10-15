import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const usuarioSchema= new Schema({
    nombre:{type: String, required:[true,'Nombre de usuario obligatorio']},
    email: {
        type: String,
        required: true,
        match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      },
    password: {
        type: String,
        required: true,
        match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
        minlength: 8
    },
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});
//Convertir modelo
const usuarios= mongoose.model('usuarios',usuarioSchema);
export default usuarios;