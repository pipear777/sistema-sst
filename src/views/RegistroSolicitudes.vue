<template>
  <v-container>
    <v-form @submit.prevent="agregarSolicitud()">
      <v-text-field
        v-model="atributos.consecutivo"
        :counter="30"
        label="Consecutivo de la solicitud"
      ></v-text-field>

      <v-text-field
        v-model="atributos.observacion"
        label="Observación de la solicitud"
        required
      ></v-text-field>

      <v-text-field
        v-model="atributos.fecha"
        label="Fecha de la solicitud"
        required
      ></v-text-field>

      <v-text-field
        v-model="atributos.productoId"
        label="ID del producto"
        required
      ></v-text-field>

      <v-text-field
        v-model="atributos.cantidad"
        label="Cantidad del producto"
        required
      ></v-text-field>

      <v-text-field
        v-model="atributos.empleadoId"
        label="Enmpleado ID"
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
        consecutivo: "",
        observacion: "",
        fecha: "",
        cantidad: "",
        empleadoId: "",
        usuarioId: "",
      },
    };
  },

  methods: {
    agregarSolicitud() {
      console.log(this.atributos);
      if (!this.atributos.consecutivo) {
        this.$swal("Error!", "Falta consecutivo de la solicitud!", "error");
      } else if (!this.atributos.observacion) {
        this.$swal("Error!", "Observación  de la solicitud!", "error");
      } else if (!this.atributos.fecha) {
        this.$swal("Error!", "Fecha de la solicitud!", "error");
      } else if (!this.atributos.productoId) {
        this.$swal("Error!", "falta el id del producto!", "error");
      } else if (!this.atributos.cantidad) {
        this.$swal("Error!", "falta la cantidad del producto!", "error");
      } else if (!this.atributos.empleadoId) {
        this.$swal("Error!", "falta el id del empleado!", "error");
      } else if (!this.atributos.usuarioId) {
        this.$swal("Error!", "Falta el id del usuario!", "error");
      } else {
        this.axios
          .post("/nueva-solicitud", this.atributos)
          .then((res) => {
            this.Atributos.push(res.data);

            this.$swal(
              "success!",
              "Solicitud Agregada exitosamente!",
              "success"
            );

            this.atributos.consecutivo = "";
            this.atributos.observacion = "";
            this.atributos.fecha = "";
            this.atributos.productoId = "";
            this.atributos.cantidad = "";
            this.atributos.empleadoId = "";
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