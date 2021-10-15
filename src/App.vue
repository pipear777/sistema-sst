<template>
  <v-app>
    <v-app-bar app color="blue-grey" dark>
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

      <v-btn href="" target="_blank" text @click="register()">
        <span class="mr-2">Registro</span>
        <v-icon> mdi-account-multiple-plus </v-icon>
      </v-btn>
      <v-btn href="" target="_blank" text @click="login()">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span class="mr-2">Iniciar sesión</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- <v-col
      cols="2"
      class="flex-grow-0 flex-shrink-0"
    >
      <Sidebar />
    </v-col>
    <v-col
        cols="1"
        style="min-width: 100px; max-width: 100%;"
        class="flex-grow-1 flex-shrink-0"
      >
      <Barra />
    </v-col> -->
    <v-container >
      <v-row
        no-gutters
        style="flex-wrap: nowrap;"
      >
        <v-col
          cols="3"
          class="flex-grow-0 flex-shrink-0"
        >
         <Sidebar />
        </v-col>
        <v-col
          cols="9"
          style="min-width: 100px; max-width: 100%;"
          class="flex-grow-1 flex-shrink-0"
        >
         <Barra />
        </v-col>
      </v-row>
    </v-container>
  


    
   
    
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Barra from "./components/Barra.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Barra,
    Sidebar,
  },

  data: () => ({
    //
  }),
  methods: {
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>
