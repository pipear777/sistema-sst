<template>
    <v-app>
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center" dense>
                    <v-col cols="12" sm="8" md="4" lg="4">
                        <v-card elevation="0">
                            <v-img src="@/assets/logo.jpg" 
                            alt="Sistema SST Logo" 
                            contain height="200"></v-img>

                            <v-card-text>
                                <v-form>
                                    <v-text-field label="Ingrese el correo electrónico" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0" outlined></v-text-field>
                                    <v-text-field abel="Ingrese la contraseña" name="password" prepend-inner-icon="mdi-lock" type="password" suffix="| Olvidó la contraseña?" class="rounded-0" outlined></v-text-field>
                                    <v-btn class="rounded-0" color="#000000" x-large block dark>Iniciar Sesión</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
</style>