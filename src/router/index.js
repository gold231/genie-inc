import Vue from "vue";
import VueRouter from "vue-router";
import Poste from "../components/Poste.vue"
import Candidatures from "../components/Candidatures.vue"
import Documents from "../components/Documents.vue"
import Qualifications from "../components/Qualifications.vue"
import Questions from "../components/Questions.vue"
import Motivations from "../components/Motivations.vue"

Vue.use(VueRouter);

export default new VueRouter({
  routes:  [
    {
      path: "",
      name: "Poste",
      component: Poste
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
    {
      path: "/qualifications",
      name: "Qualifications",
      component: Qualifications
    },  
    {
      path: "/questions",
      name: "Questions",
      component: Questions
    },
    {
      path: "/motivations",
      name: "Motivations",
      component: Motivations
    },
  ]
});
