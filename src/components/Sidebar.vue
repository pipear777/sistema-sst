<template>
  <v-card class="mx-auto" width="300">
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group :value="true" prepend-icon="mdi-apps">
        <template v-slot:activator>
          <v-list-item-title>Menú SST</v-list-item-title>
        </template>

        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Categorías</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item @click="llamarRegistroCategorias()">
            <v-list-item-title>Registro</v-list-item-title>

            <v-list-item-icon>
              <v-icon>mdi-plus</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item @click="llamarTablaCategorias()">
            <v-list-item-title>Tabla</v-list-item-title>

            <v-list-item-icon>
              <v-icon>mdi-table</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Productos</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item @click="llamarRegistroProductos()">
            <v-list-item-title>Registro</v-list-item-title>

            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item @click="llamarTablaProductos()">
            <v-list-item-title>Tabla</v-list-item-title>

            <v-list-item-icon>
              <v-icon>mdi-table</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

          <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Dependencias</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item @click="llamarRegistroDependencias()">
            <v-list-item-title>Registro</v-list-item-title>

            <v-list-item-icon>
              <v-icon>mdi-castle</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item @click="llamarTablaDependencias()">
            <v-list-item-title>Tabla</v-list-item-title>

            <v-list-item-icon>
              <v-icon>mdi-table</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Empleados</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item @click="llamarRegistroEmpleados()">
            <v-list-item-title>Registro</v-list-item-title>

            <v-list-item-icon>
              <v-icon>mdi-account-multiple-plus</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item @click="llamarTablaEmpleados()">
            <v-list-item-title>Tabla</v-list-item-title>

            <v-list-item-icon>
              <v-icon>mdi-table</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

         <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>SOLICITUDES</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item @click="llamarRegistroSolicitudes()">
            <v-list-item-title>Registro</v-list-item-title>

            <v-list-item-icon>
              <v-icon>mdi-account-multiple-plus</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item @click="llamarTablaSolicitudes()">
            <v-list-item-title>Tabla</v-list-item-title>

            <v-list-item-icon>
              <v-icon>mdi-table</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    //   categorias: [
    //     ['Registrar', 'mdi-account-multiple-outline','/register'],
    //     ['Lista', 'mdi-cog-outline'],
    //   ],
    //   cruds: [
    //     ['Create', 'mdi-plus-outline'],
    //     ['Read', 'mdi-file-outline'],
    //     ['Update', 'mdi-update'],
    //     ['Delete', 'mdi-delete'],
    //   ],
  }),
  methods: {
     llamarRegistroCategorias(){
      this.$router.push('/registro-categorias')
    },
    llamarTablaCategorias(){
      this.$router.push('/tabla-categorias')
    },
    llamarRegistroProductos(){
      this.$router.push('/registro-productos')
    },
    llamarTablaProductos(){
      this.$router.push('/tabla-productos')
    },
    llamarRegistroDependencias(){
      this.$router.push('/registro-dependencias')
    },
    llamarTablaDependencias(){
      this.$router.push('/tabla-dependencias')
    },
     llamarRegistroEmpleados(){
      this.$router.push('/registro-empleados')
    },
    llamarTablaEmpleados(){
      this.$router.push('/tabla-empleados')
    },
     llamarRegistroSolicitudes(){
      this.$router.push('/registro-solicitudes')
    },
    llamarTablaSolicitudes(){
      this.$router.push('/tabla-solicitudes')
    },
  },
};
</script>