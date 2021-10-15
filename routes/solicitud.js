import express from 'express';
const router = express.Router();

//importar el modelo 
import Solicitud from '../models/solicitud';

//Agregar un registro

router.post('/nueva-solicitud', async(req,res)=>{
    const body= req.body;

    try {
        const solicitudDB = await Solicitud.create(body);
        res.status(200).json(solicitudDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio algo inesperado',
            error
        })
        
    }
});

// Get busca todos los registros de solicitudes

router.get('/buscarSolicitudes',async(req,res)=>{

    try {
        const solicitudDB= await Solicitud.find();
        res.json(solicitudDB);
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Error en la busqueda',
            error
        })
        
    }


});

//Get con parametro
router.get('/buscarSolicitud/:id',async(req,res)=>{
const _id = req.params.id;
    try {
        const solicitudDB = await Solicitud.findOne({_id});
        res.json(solicitudDB);


        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'erro en la busqueda de parametro',
            error
        })
        
    }


})

// Delete eliminar una solicitud

router.delete('/eliminarSolicitud/:id',async(req,res)=>{
    const _id = req.params.id;

    try {

        const solicitudDB = await Solicitud.findByIdAndDelete({_id});
        if(!solicitudDB){
            return res.status(400).json({
                mensaje: 'No se econtro la mascota',
                error
            })

        }
        res.json(solicitudDB);
        
    } catch (error) {

        return res.status(400).json({
            mensaje: 'Ocurrio en error en el delete'
        })
        
    }

});

//Put actualizar solicitud

router.put('/actualizarSolicitud/:id' , async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const solicitudDB = await Solicitud.findByIdAndUpdate(
        _id,
        body,{new: true} );
        res.json(solicitudDB);

        
    } catch (error) {

        return res.status(400).json({
            mensaje:'No se logró actualizar',
            error
        })     
    }
});
//Exportar la configuracion de express
module.exports=router;