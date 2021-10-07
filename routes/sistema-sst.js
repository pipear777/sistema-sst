import express from 'express';
// import req from 'express/lib/request';
const router = express.Router();

//importar el modelo nota
import User from '../models/sistema-sst';

//Agregar un registro de usuario

router.post('/nuevo-usuario', async(req,res)=>{
    const body= req.body;

    try {
        const Sistema-sst = await Sistema-sst.create(body);
        res.status(200).json(Sistema-sst);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio algo inesperado',
            error
        })
        
    }
});

// Get busca todos los registros

router.get('/buscarUsuarios',async(req,res)=>{

    try {
        const Users= await Users.find();
        res.json(Users);
        
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
        const Users = await PrimerBd.findOne({_id});
        res.json(Users);


        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'erro en la busqueda de parametro',
            error
        })
        
    }


})

// Delete eliminar un usuario

router.delete('/eliminarUsuario/:id',async(req,res)=>{
    const _id = req.params.id;

    try {

        const Users = await PrimerBd.findByIdAndDelete({_id});
        if(!Users){
            return res.status(400).json({
                mensaje: 'No se econtro la mascota',
                error
            })

        }
        res.json(Users);
        
    } catch (error) {

        return res.status(400).json({
            mensaje: 'Ocurrio en error en el delete'
        })
        
    }

});

//Put actualizar usuario

router.put('/actualizar-usuario/:id' , async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const Users = await PrimerBd.findByIdAndUpdate(
        _id,
        body,{new: true} );
        res.json(Users);

        
    } catch (error) {

        return res.status(400).json({
            mensaje:'No se logró actualizar',
            error
        })
        
    }


});
//Exportar la configuracion de express
module.exports=router;