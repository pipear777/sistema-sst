import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
// import 'sweetalert2/dist/sweetalert2.min.css';

// Vue.use(VueSweetalert2);

Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';
//axios.defaults.baseURL = 'mongodb+srv://alv:sistemas2021*@cluster0.btqlf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

Vue.config.productionTip = false



new Vue({
  router,
  // store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
