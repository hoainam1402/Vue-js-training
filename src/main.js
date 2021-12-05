import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import AppSCSS from "./assets/scss/_app.scss";
import "../node_modules/vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  AppSCSS,
  render: (h) => h(App),
}).$mount("#app");
