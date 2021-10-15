<template>
<v-container>

    <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>SOLICITUDES</v-toolbar-title>
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
                                        <v-text-field v-model="editedItem.consecutivo" label="Consecutivo de la solicitud"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.observacion" label="Observacion de la solicitud"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.fecha" label="Fecha de la solicitud"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.productoId" label="Producto ID"></v-text-field>
                                    </v-col>
                                     <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.cantidad" label="Cantidad pedida"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4"> 
                                        <v-text-field v-model="editedItem.empleadoId" label="Empleado ID"></v-text-field>
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
                            <v-btn color="blue darken-1" text @click="editarSolicitud(editedItem)">
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
            <v-icon small @click="eliminarSolicitud(item._id)">
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
                text: 'ID  de la solicitud',
                value: '_id'
            },
            {
                text: 'Consecutivo de la solicitud',
                value: 'consecutivo'
            },
            {
                text: 'Observación',
                value: 'observacion'
            },
            {
                text: 'Fecha de la solicitud',
                value: 'fecha'
            },
             {
                text: 'Producto Id',
                value: 'productoId'
            },
             {
                text: 'Cantidad',
                value: 'cantidad'
            },
            {
                text: 'Empleado Id',
                value: 'empleadoId'
            },
            {
                text: 'Usuario Id',
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
        this.listarSolicitudes();

    },

    methods: {
        initialize() {

        },

        editItem(item) {
            this.dialog = true
            console.log(item);
            this.axios.get(`buscarEmpleado/${item}`)
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

        listarSolicitudes() {

            this.axios.get('/buscarSolicitudes')
                .then((response) => {
                    this.desserts = response.data;
                })
                .catch((e) => {
                    console.log('error' + e)
                })

        },

        editarSolicitud(item) {

            this.axios.put(`/actualizarSolicitud/${item._id}`, item)
                .then(res => {
                     this.$swal('success!',
                    'Solicitud MODIFICADO exitosamente!',
                    'success');
                    this.close();

                    const index = this.desserts.findindex(n => n._id === res.data._id)
                    this.desserts[index].consecutivo = res.data.consecutivo;
                    this.desserts[index].observacion = res.data.observacion;
                    this.desserts[index].fecha = res.data.fecha;
                    this.desserts[index].productoId = res.data.productoId;
                    this.desserts[index].cantidad = res.data.cantidad;
                    this.desserts[index].usuarioId = res.data.usuarioId;

                }).catch(e => {
                    console.log(e.response)
                })

        },

        eliminarSolicitud(id) {
            console.log(id);
            this.axios.delete(`/eliminarSolicitud/${id}`)
                .then(res => {
                       this.$swal('OK!',
                    'Solicitud ELIMINADO exitosamente!',
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
