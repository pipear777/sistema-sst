import express from 'express';
const router = express.Router();

//importar el modelo 
import Empleado from '../models/empleado';

//Agregar un registro

router.post('/nuevo-empleado', async(req,res)=>{
    const body= req.body;

    try {
        const empleadoDB = await Empleado.create(body);
        res.status(200).json(empleadoDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio algo inesperado',
            error
        })
        
    }
});

// Get busca todos los registros de empleados

router.get('/buscarEmpleados',async(req,res)=>{

    try {
        const empleadoDB= await Empleado.find();
        res.json(empleadoDB);
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Error en la busqueda',
            error
        })
        
    }


});

//Get con parametro
router.get('/buscarEmpleado/:id',async(req,res)=>{
const _id = req.params.id;
    try {
        const empleadoDB = await Empleado.findOne({_id});
        res.json(empleadoDB);


        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'erro en la busqueda de parametro',
            error
        })
        
    }


})

// Delete eliminar un empleado

router.delete('/eliminarEmpleado/:id',async(req,res)=>{
    const _id = req.params.id;

    try {

        const empleadoDB = await Empleado.findByIdAndDelete({_id});
        if(!empleadoDB){
            return res.status(400).json({
                mensaje: 'No se econtro la mascota',
                error
            })

        }
        res.json(empleadoDB);
        
    } catch (error) {

        return res.status(400).json({
            mensaje: 'Ocurrio en error en el delete'
        })
        
    }

});

//Put actualizar empleado

router.put('/actualizarEmpleado/:id' , async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const empleadoDB = await Empleado.findByIdAndUpdate(
        _id,
        body,{new: true} );
        res.json(empleadoDB);

        
    } catch (error) {

        return res.status(400).json({
            mensaje:'No se logró actualizar',
            error
        })     
    }
});
//Exportar la configuracion de express
module.exports=router;