import express from 'express';
// import req from 'express/lib/request';
const router = express.Router();

//importar el modelo nota
import PrimerBd from '../models/primerBd';

//Agregar una registro

router.post('/nuevo-registro', async(req,res)=>{
    const body= req.body;

    try {
        const PrimerDB = await PrimerBd.create(body);
        res.status(200).json(PrimerDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio algo inesperado',
            error
        })
        
    }
});

// Get busca todos los registros

router.get('/buscarTodo',async(req,res)=>{

    try {
        const PrimerDb= await PrimerBd.find();
        res.json(PrimerDb);
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Error en la busqueda',
            error
        })
        
    }


});

//Get con parametro
router.get('/buscarParametro/:id',async(req,res)=>{
const _id = req.params.id;
    try {
        const PrimerDb = await PrimerBd.findOne({_id});
        res.json(PrimerDb);


        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'erro en la busqueda de parametro',
            error
        })
        
    }


})

// Delete eliminar una mascota

router.delete('/eliminarParametro/:id',async(req,res)=>{
    const _id = req.params.id;

    try {

        const PrimerDb = await PrimerBd.findByIdAndDelete({_id});
        if(!PrimerDb){
            return res.status(400).json({
                mensaje: 'No se econtro la mascota',
                error
            })

        }
        res.json(PrimerDb);
        
    } catch (error) {

        return res.status(400).json({
            mensaje: 'Ocurrio en error en el delete'
        })
        
    }

});

//Put actualizar mascota

router.put('/actualizar/:id' , async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const PrimerDB = await PrimerBd.findByIdAndUpdate(
        _id,
        body,{new: true} );
        res.json(PrimerDB);

        
    } catch (error) {

        return res.status(400).json({
            mensaje:'No se logró actualizar',
            error
        })
        
    }


});
//Exportar la configuracion de express
module.exports=router;