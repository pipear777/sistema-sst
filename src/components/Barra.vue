<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Sistema SST</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="llamarEquipo()">Equipo de Trabajo</v-tab>
          <v-tab @click="llamarCarrusel()">Productos</v-tab>
          <v-tab>
            
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data() {
    
  },
  methods: {
    llamarEquipo(){
      this.$router.push('/equipo')
    },
    llamarCarrusel(){
      this.$router.push('/articulos')
    },
    tablaCategorias(){
      this.$router.push('/tabla')
    }
  }
}
</script>