<template>
  <v-container>
    <v-form @submit.prevent="agregarEmpleado()">
      <v-text-field
        v-model="atributos.cedula"
        :counter="30"
        label="Cédula del empleado"
      ></v-text-field>

      <v-text-field
        v-model="atributos.nombre"
        label="Nombre del empleado"
        required
      ></v-text-field>

      <v-text-field
        v-model="atributos.cargo"
        label="Cargo del empleado"
        required
      ></v-text-field>

      <v-text-field
        v-model="atributos.dependenciaId"
        label="ID de la dependencia"
        required
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
        cedula: "",
        nombre: "",
        cargo: "",
        dependenciaId: "",
        usuarioId: "",
      },
    };
  },

  methods: {
    agregarEmpleado() {
      console.log(this.atributos);
      if (!this.atributos.cedula) {
        this.$swal("Error!", "Falta Cédila del empleado!", "error");
      } else if (!this.atributos.nombre) {
        this.$swal("Error!", "Nombre del empleado!", "error");
      }
       else if (!this.atributos.cargo) {
        this.$swal("Error!", "Cargo del empleado!", "error");
      }
       else if (!this.atributos.dependenciaId) {
        this.$swal("Error!", "falta el id de la dependencia!", "error");
      } else if (!this.atributos.usuarioId) {
        this.$swal("Error!", "Falta el id del usuario!", "error");
      } else {
        this.axios
          .post("/nuevo-empleado", this.atributos)
          .then((res) => {
            this.Atributos.push(res.data);

            this.$swal("success!", "Empleado Agregado exitosamente!", "success");

            this.atributos.cedula = "";
            this.atributos.nombre = "";
            this.atributos.cargo = "";
            this.atributos.dependenciaId = "";
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