import Vue from "vue";
import Router from "vue-router";
import PersonList from "./components/PersonList.vue";
import BookList from "./components/BookList.vue";
 
Vue.use(Router);
 
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "person-details",
      alias: "/persons",
      component: PersonList
    },
    {
      path: "/books",
      name: "book-details",
      alias: "/books",
      component: BookList
    },
  ]
});