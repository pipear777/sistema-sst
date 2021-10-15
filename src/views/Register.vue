<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
              <v-card-text>
                <v-form @submit.prevent="agregarUsuario()">
                  <v-text-field
                    v-model="atributos.nombre"
                    :counter="30"
                    label="Nombre del usuario"
                  ></v-text-field>

                  <v-text-field
                    v-model="atributos.email"
                    label="Email"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="atributos.password"
                    label="Contraseña"
                    type="password"
                    required
                  ></v-text-field>

                  <v-btn color="success" class="mr-4" type="submit">
                    Enviar registro
                  </v-btn>

                  <v-btn color="error" class="mr-4" @click="limpiar()">
                    Limpiar
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="css" scoped>
</style>

<script>
export default {
  data() {
    return {
      Atributos: [],

      atributos: {
        nombre: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    agregarUsuario() {
      console.log(this.atributos);

      this.axios
        .post("/nuevo-usuario", this.atributos)
        .then((res) => {
          this.Atributos.push(res.data);

          // this.$swal("success!", "Categoría Agregada exitosamente!", "success");

          // this.atributos.nombre = "";
          // this.atributos.descripcion = "";
          // this.atributos.usuarioId = "";
        })

        .catch((e) => {
          console.log(e.response);

          alert("Error en guardar registro");
        });
    },
    // login() {
    //   this.$router.push("/login");
    // },
  },
};
</script>