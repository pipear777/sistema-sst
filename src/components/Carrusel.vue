<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/carrusel/botas de seguridad.png',
          },
          {
            src: '/carrusel/careta.png',
          },
          {
            src: '/carrusel/casco de seguridad.png',
          },
           {
            src: '/carrusel/Gafas.png',
          },
           {
            src: '/carrusel/guantes de proteccion quimicas.png',
          },
           {
            src: '/carrusel/guantes de residuos biologicos.png',
          },
           {
            src: '/carrusel/guantes.png',
          },
           {
            src: '/carrusel/orejera de seguridad.png',
          },
          {
            src: '/carrusel/overol de proteccion.png',
          },
          {
            src: '/carrusel/proteccion trabajo de altura.png',
          },
        ],
      }
    },
  }
</script>