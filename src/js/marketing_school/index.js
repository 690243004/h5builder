import "./assets/css/index.scss";
import "./assets/css/common.scss";
import App from "./app.vue";
import Vue from "vue";
import { Carousel, CarouselItem } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Carousel);
Vue.use(CarouselItem);

new Vue({
  el: document.getElementById("app"),
  render(h) {
    return h(App);
  },
});
