import Vue from "vue";
import VueRouter from "vue-router";
import Postes from "../components/Postes.vue"
import Candidatures from "../components/Candidatures.vue"
import Documents from "../components/Documents.vue"

Vue.use(VueRouter);

export default new VueRouter({
  routes:  [
    {
      path: "",
      name: "Postes",
      component: Postes
    },
    {
      path: "/candidatures",
      name: "Candidatures",
      component: Candidatures
    },
    {
      path: "/documents",
      name: "Documents",
      component: Documents
    },  
  ]
});
