import express from 'express';
const router = express.Router();

//importar el modelo dependencia
import Dependencia from '../models/dependencia';

//Agregar un registro

router.post('/nueva-dependencia', async(req,res)=>{
    const body= req.body;

    try {
        const dependenciaDB = await Dependencia.create(body);
        res.status(200).json(dependenciaDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio algo inesperado',
            error
        })
        
    }
});

// Get busca todos los registros de dependencias

router.get('/buscarDependencias',async(req,res)=>{

    try {
        const dependenciaDB= await Dependencia.find();
        res.json(dependenciaDB);
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Error en la busqueda',
            error
        })
        
    }


});

//Get con parametro
router.get('/buscarDependencia/:id',async(req,res)=>{
const _id = req.params.id;
    try {
        const dependenciaDB = await Dependencia.findOne({_id});
        res.json(dependenciaDB);


        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'erro en la busqueda de parametro',
            error
        })
        
    }


})

// Delete eliminar una dependencia

router.delete('/eliminarDependencia/:id',async(req,res)=>{
    const _id = req.params.id;

    try {

        const dependenciaDB = await Dependencia.findByIdAndDelete({_id});
        if(!dependenciaDB){
            return res.status(400).json({
                mensaje: 'No se econtro la mascota',
                error
            })

        }
        res.json(dependenciaDB);
        
    } catch (error) {

        return res.status(400).json({
            mensaje: 'Ocurrio en error en el delete'
        })
        
    }

});

//Put actualizar dependencia

router.put('/actualizarDependencia/:id' , async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const dependenciaDB = await Dependencia.findByIdAndUpdate(
        _id,
        body,{new: true} );
        res.json(dependenciaDB);

        
    } catch (error) {

        return res.status(400).json({
            mensaje:'No se logró actualizar',
            error
        })
        
    }


});
//Exportar la configuracion de express
module.exports=router;