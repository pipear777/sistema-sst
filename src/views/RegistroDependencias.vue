<template>
  <v-container>
    <v-form @submit.prevent="agregarDependencia()">
      <v-text-field
        v-model="atributos.nombre"
        :counter="30"
        label="Nombre de la dependencia"
      ></v-text-field>

        <v-text-field
        v-model="atributos.usuarioId"
        label="Usuario ID"
        required
      ></v-text-field>

      <v-btn color="success" class="mr-4" type="submit">
        Enviar registro
      </v-btn>

      <v-btn color="error" class="mr-4" @click="limpiar()"> Limpiar </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      Atributos: [],

      atributos: {
        nombre: "",
        usuarioId: "",
      },
    };
  },

  methods: {
    agregarDependencia() {
      console.log(this.atributos);
      if (!this.atributos.nombre) {
        this.$swal("Error!", "Falta Nombre de la dependencia!", "error");
      } else if (!this.atributos.usuarioId) {
        this.$swal("Error!", "Falta el id del usuario!", "error");
      } else {
        this.axios
          .post("/nueva-dependencia", this.atributos)
          .then((res) => {
            this.Atributos.push(res.data);

            alert("Registro agregado exitosamente");
            // this.$swal("success!", "Dependencia Agregada exitosamente!", "success");

            this.atributos.nombre = "";
            this.atributos.usuarioId = "";
          })

          .catch((e) => {
            console.log(e.response);

            alert("Error en guardar registro");
          });
      }
    },
  },
};
</script>