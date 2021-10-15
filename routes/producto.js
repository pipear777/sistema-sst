import express from 'express';
const router = express.Router();

//importar el modelo nota
import Producto from '../models/producto';

//Agregar un registro

router.post('/nuevo-producto', async(req,res)=>{
    const body= req.body;

    try {
        const productoDB = await Producto.create(body);
        res.status(200).json(productoDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio algo inesperado',
            error
        })
        
    }
});

// Get busca todos los registros de productos

router.get('/buscarProductos',async(req,res)=>{

    try {
        const productoDB= await Producto.find();
        res.json(productoDB);
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Error en la busqueda',
            error
        })
        
    }


});

//Get con parametro
router.get('/buscarProducto/:id',async(req,res)=>{
const _id = req.params.id;
    try {
        const productoDB = await Producto.findOne({_id});
        res.json(productoDB);


        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'erro en la busqueda de parametro',
            error
        })
        
    }


})

// Delete eliminar un producto

router.delete('/eliminarProducto/:id',async(req,res)=>{
    const _id = req.params.id;

    try {

        const productoDB = await Producto.findByIdAndDelete({_id});
        if(!productoDB){
            return res.status(400).json({
                mensaje: 'No se econtro la mascota',
                error
            })

        }
        res.json(productoDB);
        
    } catch (error) {

        return res.status(400).json({
            mensaje: 'Ocurrio en error en el delete'
        })
        
    }

});

//Put actualizar producto

router.put('/actualizarProducto/:id' , async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const productoDB = await Producto.findByIdAndUpdate(
        _id,
        body,{new: true} );
        res.json(productoDB);

        
    } catch (error) {

        return res.status(400).json({
            mensaje:'No se logró actualizar',
            error
        })
        
    }


});
//Exportar la configuracion de express
module.exports=router;