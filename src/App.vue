<template>
  <v-app>
    <v-app-bar
      app
      color="blue-grey"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Sistema SST"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="/logo.jpg"
          width="100"
        />&nbsp;&nbsp;
        <h2>Sistema SST</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href=""
        target="_blank"
        text
      @click="register()">
       <span class="mr-2">Registro</span>
        <v-icon>
          mdi-account-multiple-plus
          </v-icon>
      </v-btn>
      <v-btn 
        href="/login"
        target="_blank"
        text
      >
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span class="mr-2">Iniciar sesión</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
     
    </v-app-bar>
      <Barra />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Barra from './components/Barra.vue'
export default {
  name: 'App',
  components: {
    Barra,
  },

  data: () => ({
    //
  }),
  methods: {
    llamarEquipo(){
      this.$router.push('/login')
    },
    llamarCarrusel(){
      this.$router.push('/register')
    },
  }
};
</script>
