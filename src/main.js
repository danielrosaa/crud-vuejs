import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Axios from "axios";

Axios.defaults.baseURL = "https://5f175a987c06c900160dc027.mockapi.io/api/v1/";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
