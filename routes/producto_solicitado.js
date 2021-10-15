import express from 'express';
const router = express.Router();

//importar el modelo 
import Producto_solicitado from '../models/producto_solicitado';

//Agregar un registro

router.post('/nueva-producto-solicitado', async(req,res)=>{
    const body= req.body;

    try {
        const productoSolicitadoDB = await Producto_solicitado.create(body);
        res.status(200).json(productoSolicitadoDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio algo inesperado',
            error
        })
        
    }
});

// Get busca todos los registros de productos solicitados

router.get('/buscarProductosSolicitados',async(req,res)=>{

    try {
        const productoSolicitadoDB= await Producto_solicitado.find();
        res.json(productoSolicitadoDB);
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Error en la busqueda',
            error
        })
        
    }


});

//Get con parametro
router.get('/buscarProductoSolicitado/:id',async(req,res)=>{
const _id = req.params.id;
    try {
        const productoSolicitadoDB = await Producto_solicitado.findOne({_id});
        res.json(productoSolicitadoDB);


        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'erro en la busqueda de parametro',
            error
        })
        
    }


})

// Delete eliminar un producto solicitado

router.delete('/eliminarProductoSolicitado/:id',async(req,res)=>{
    const _id = req.params.id;

    try {

        const productoSolicitadoDB = await Producto_solicitado.findByIdAndDelete({_id});
        if(!productoSolicitadoDB){
            return res.status(400).json({
                mensaje: 'No se econtro la mascota',
                error
            })

        }
        res.json(productoSolicitadoDB);
        
    } catch (error) {

        return res.status(400).json({
            mensaje: 'Ocurrio en error en el delete'
        })
        
    }

});

//Put actualizar solicitud

router.put('/actualizarProductoSolicitado/:id' , async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const productoSolicitadoDB = await Producto_solicitado.findByIdAndUpdate(
        _id,
        body,{new: true} );
        res.json(productoSolicitadoDB);

        
    } catch (error) {

        return res.status(400).json({
            mensaje:'No se logró actualizar',
            error
        })     
    }
});
//Exportar la configuracion de express
module.exports=router;