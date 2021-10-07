<template>
  <div id="app">
    <v-app>
        <v-app-bar app color="primary" dark elevation="0">
            <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn @click="toggleTheme" color="primary" class="mr-2">{{buttonText}}</v-btn>
            <v-icon>mdi-account</v-icon>
        </v-app-bar>
        <v-navigation-drawer 
            v-model="sidebarMenu" 
            app
            floating
            :permanent="sidebarMenu"
            :mini-variant.sync="mini"
            >
            <v-list dense color="primary" dark>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon @click.stop="sidebarMenu = !sidebarMenu">mdi-chevron-left</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <h3 class="font-weight-thin">Vuetify Dashboard</h3>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list-item class="px-2" @click="toggleMini = !toggleMini">
                <v-list-item-avatar>
                    <v-icon>mdi-account-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content class="text-truncate">
                    Jane Doeski
                </v-list-item-content>
                <v-btn icon small>
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
                    <v-list-item-icon>
                        <v-icon color="primary">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="primary--text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <v-container class="px-4 py-0 fill-height" fluid>
                <v-row class="fill-height">
                    <v-col>
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <v-footer class="py-3">
            <span class="ml-auto overline">Iatek &copy;2020</span>
        </v-footer>
    </v-app>
</div>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>