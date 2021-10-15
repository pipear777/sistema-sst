<template>
  <v-container>
    <v-form @submit.prevent="agregarProducto()">
      <v-text-field
        v-model="atributos.codigo"
        :counter="30"
        label="Código de producto"
      ></v-text-field>

      <v-text-field
        v-model="atributos.nombre"
        label="Nombre del producto"
        required
      ></v-text-field>

      <v-text-field
        v-model="atributos.unidad_medida"
        label="Unidad de medida"
        required
      ></v-text-field>

      <v-text-field
        v-model="atributos.vida_util"
        label="Vida útil"
        required
      ></v-text-field>

      <v-text-field
        v-model="atributos.cantidad"
        label="Cantidad"
        required
      ></v-text-field>

      <v-text-field
        v-model="atributos.categoriaId"
        label="Categoría ID"
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
        codigo: "",
        nombre: "",
        unidad_medida: "",
        vida_util: "",
        cantidad: "",
        categoriaId: "",
        usuarioId: "",
      },
    };
  },

  methods: {
    agregarProducto() {
      console.log(this.atributos);
      if (!this.atributos.codigo) {
        this.$swal("Error!", "Falta Código de producto!", "error");
      } else if (!this.atributos.nombre) {
        this.$swal("Error!", "Falta nombre de producto!", "error");
      } else if (!this.atributos.unidad_medida) {
        this.$swal("Error!", "Falta la unidad de medida!", "error");
      } else if (!this.atributos.vida_util) {
        this.$swal("Error!", "Falta la vida util!", "error");
      } else if (!this.atributos.cantidad) {
        this.$swal("Error!", "Falta la cantidad!", "error");
      } else if (!this.atributos.categoriaId) {
        this.$swal("Error!", "Falta el ID de categoría!", "error");
      } else if (!this.atributos.usuarioId) {
        this.$swal("Error!", "Falta el ID de usuario!", "error");
      } else {
        this.axios
          .post("/nuevo-producto", this.atributos)
          .then((res) => {
            this.Atributos.push(res.data);

            alert("Registro agregado exitosamente");
            // this.$swal("success!", "Categoría Agregada exitosamente!", "success");

            this.atributos.codigo = "";
            this.atributos.nombre = "";
            this.atributos.unidad_medida = "";
            this.atributos.vida_util = "";
            this.atributos.cantidad = "";
            this.atributos.categoriaId = "";
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