import "./index.scss";
import "./common.scss";
import App from "./app.vue";
import Vue from "vue";

new Vue({
  el: document.getElementById("app"),
  render(h) {
    return h(App);
  },
});
