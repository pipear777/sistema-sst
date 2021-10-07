<template>
<v-container>
  <v-form @submit.prevent="agregarCategoria()">
   
 
    <v-text-field
      v-model="atributos.nombre"
      :counter="30"
      label="Nombre de la categoría"
    ></v-text-field>

 
    <v-text-field
      v-model="atributos.descripcion"
      label="Descripción"
      required
    ></v-text-field>

     <v-text-field
      v-model="atributos.usuarioId"
      label="Id del usuario"
      required
    ></v-text-field>


    <v-btn
      color="success"
      class="mr-4"
      type="submit"
    >
      Enviar registro
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="limpiar()"
    >
      Limpiar
    </v-btn>


  </v-form>
  </v-container>
</template>

<script>
export default {

data(){

  return {
    Atributos:[],

    atributos: {

      nombre:"",
      descripcion:"",
      usuarioId:"",

    },

  }


},

methods:{


  agregarCategoria(){
   console.log(this.atributos);
    if(!this.atributos.nombre){

       this.$swal('Error!',
                    'Falta Nombre de categoría!',
                    'error');


    }

     else if(!this.atributos.descripcion){

       this.$swal('Error!',
                    'Falta descripción de categoría!',
                    'error');




    }

     else if(!this.atributos.usuarioId){

       this.$swal('Error!',
                    'Falta el id del usuario!',
                    'error');


    }

   

    else{

      this.axios
    .post("/nueva-categoria",this.atributos)
    .then((res)=>{
      this.Atributos.push(res.data);


       this.$swal('success!',
                    'Categoría Agregada exitosamente!',
                    'success');
     
     

      
      
      this.atributos.nombre="";
      this.atributos.descripcion="";
      this.atributos.usuarioId="";
 
   
    })

    .catch((e)=>{

      console.log(e.response);

      alert("Error en guardar registro");


    })
 

    }

   
    
    

  },



  






}

  
}
</script>