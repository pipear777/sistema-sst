import express from 'express';
const router = express.Router();

//importar el modelo nota
import Categoria from '../models/categoria';

//Agregar una registro

router.post('/nueva-categoria', async(req,res)=>{
    const body= req.body;

    try {
        const categoriaDB = await Categoria.create(body);
        res.status(200).json(categoriaDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio algo inesperado',
            error
        })
        
    }
});

// Get busca todos los registros de categoría

router.get('/buscarCategorias',async(req,res)=>{

    try {
        const categoriaDB= await Categoria.find();
        res.json(categoriaDB);
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Error en la busqueda',
            error
        })
        
    }


});

//Get con parametro
router.get('/buscarCategoria/:id',async(req,res)=>{
const _id = req.params.id;
    try {
        const categoriaDB = await Categoria.findOne({_id});
        res.json(categoriaDB);


        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'erro en la busqueda de parametro',
            error
        })
        
    }


})

// Delete eliminar una categoría

router.delete('/eliminarCategoria/:id',async(req,res)=>{
    const _id = req.params.id;

    try {

        const categoriaDB = await Categoria.findByIdAndDelete({_id});
        if(!categoriaDB){
            return res.status(400).json({
                mensaje: 'No se econtro la mascota',
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

//Put actualizar categoría

router.put('/actualizarCategoria/:id' , async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const categoriaDB = await Categoria.findByIdAndUpdate(
        _id,
        body,{new: true} );
        res.json(categoriaDB);

        
    } catch (error) {

        return res.status(400).json({
            mensaje:'No se logró actualizar',
            error
        })
        
    }


});
//Exportar la configuracion de express
module.exports=router;