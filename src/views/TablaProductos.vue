<template>
<v-container>

    <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>PRODUCTOS</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                            New Item
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                     <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.codigo" label="Código de Producto"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.nombre" label="Nombre de Producto"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.unidad_medida" label="Unidad de medida"></v-text-field>
                                    </v-col>
                                     <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.vida_util" label="Vida útil"></v-text-field>
                                    </v-col>
                                     <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.cantidad" label="Cantidad del Producto"></v-text-field>
                                    </v-col>
                                     <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.categoriaId" label="Categoría ID"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.usuarioId" label="Usuario ID"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">

                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">
                                Cancel
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="editarProducto(editedItem)">
                                Modificar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item._id)">
                mdi-pencil
            </v-icon>
            <v-icon small @click="eliminarProducto(item._id)">
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
                Reset
            </v-btn>
        </template>
    </v-data-table>

</v-container>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [{
                text: 'ID  de producto',
                value: '_id'
            },
            {
                text: 'Código de producto',
                value: 'codigo'
            },
             {
                text: 'Nombre de producto',
                value: 'nombre'
            },
            {
                text: 'Unidad de medida',
                value: 'unidad_medida'
            },
            {
                text: 'Vida útil',
                value: 'vida_util'
            },
              {
                text: 'Cantidad',
                value: 'cantidad'
            },
              {
                text: 'Categoría ID',
                value: 'categoriaId'
            },
              {
                text: 'Usuario ID',
                value: 'usuarioId'
            },
            {
                text: 'Acciones',
                value: 'actions',
                sortable: false
            },

        ],
        desserts: [],
        editedIndex: -1,
        editedItem: [],
        defaultItem: {

        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
        this.listarProductos();

    },

    methods: {
        initialize() {

        },

        editItem(item) {
            this.dialog = true
            console.log(item);
            this.axios.get(`buscarProducto/${item}`)
                .then(res => {
                    this.editedItem = res.data
                })

        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)

            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },

        listarProductos() {

            this.axios.get('/buscarProductos')
                .then((response) => {
                    this.desserts = response.data;
                })
                .catch((e) => {
                    console.log('error' + e)
                })

        },

        editarProducto(item) {

            this.axios.put(`/actualizarProducto/${item._id}`, item)
                .then(res => {
                     this.$swal('success!',
                    'Producto MODIFICADO exitosamente!',
                    'success');
                    this.close();

                    const index = this.desserts.findindex(n => n._id === res.data._id)
                    this.desserts[index].codigo = res.data.codigo;
                    this.desserts[index].nombre = res.data.nombre;
                    this.desserts[index].unidad_medida = res.data.unidad_medida;
                    this.desserts[index].vida_util = res.data.vida_util;
                    this.desserts[index].cantidad = res.data.cantidad;
                    this.desserts[index].categoriaId = res.data.categoriaId;
                    this.desserts[index].usuarioId = res.data.usuarioId;

                }).catch(e => {
                    console.log(e.response)
                })

        },

        eliminarProducto(id) {
            console.log(id);
            this.axios.delete(`/eliminarProducto/${id}`)
                .then(res => {
                       this.$swal('OK!',
                    'Producto ELIMINADO exitosamente!',
                    'error');
                  

                    const index = this.desserts.findIndex(item => item._id === res.data._id)
                    this.desserts.splice(index, 1);
                    // this.editedIndex = this.desserts.indexOf(item);
                    // this.editedItem = Object.assign({}, item)

                }).catch(e => {
                    console.log(e.response)
                })

        }

    },

}
</script>
