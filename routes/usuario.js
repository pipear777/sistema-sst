import express from 'express';
const router = express.Router();

//importar el modelo nota
import Usuario from '../models/usuario';

//Agregar una registro

router.post('/nuevo-usuario', async(req,res)=>{
    const body= req.body;

    try {
        const usuarioDB = await Usuario.create(body);
        res.status(200).json(usuarioDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio algo inesperado',
            error
        })
        
    }
});

// Get busca todos los registros de usuario

router.get('/buscarUsuarios',async(req,res)=>{

    try {
        const usuarioDB= await Usuario.find();
        res.json(usuarioDB);
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Error en la busqueda',
            error
        })
        
    }


});

//Get con parametro
router.get('/buscarUsuario/:id',async(req,res)=>{
const _id = req.params.id;
    try {
        const usuarioDB = await Usuario.findOne({_id});
        res.json(usuarioDB);


        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'erro en la busqueda de parametro',
            error
        })
        
    }


})

// Delete eliminar una mascota

router.delete('/eliminarUsuario/:id',async(req,res)=>{
    const _id = req.params.id;

    try {

        const usuarioDB = await Categoria.findByIdAndDelete({_id});
        if(!usuarioDB){
            return res.status(400).json({
                mensaje: 'No se econtro el usuario',
                error
            })

        }
        res.json(categoriaDB);
        
    } catch (error) {

        return res.status(400).json({
            mensaje: 'Ocurrio en error en el delete'
        })
        
    }

});

//Put actualizar mascota

router.put('/actualizarUsuario/:id' , async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const usuarioDB = await Usuario.findByIdAndUpdate(
        _id,
        body,{new: true} );
        res.json(usuarioDB);

        
    } catch (error) {

        return res.status(400).json({
            mensaje:'No se logró actualizar',
            error
        })
        
    }


});
//Exportar la configuracion de express
module.exports=router;