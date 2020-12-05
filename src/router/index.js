import Vue from "vue";
import VueRouter from "vue-router";
import Postes from "../components/Postes.vue"
import Candidatures from "../components/Candidatures.vue"
import Documents from "../components/Documents.vue"
import ModifierFirstStep from "../components/Modifier-firststep.vue"
import ModifierSecondStep from "../components/Modifier-secondstep.vue"
import ModifierThirdStep from "../components/Modifier-thirdstep.vue"
import ModifierFourthStep from "../components/Modifier-fourthstep.vue"

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
    { 
      path: '/modifier-first-step', 
      name: 'ModifierFirstStep', 
      component: ModifierFirstStep 
    },
    { 
      path: '/modifier-second-step', 
      name: 'ModifierSecondStep', 
      component: ModifierSecondStep     
    },
    { 
      path: '/modifier-third-step', 
      name: 'ModifierThirdStep', 
      component: ModifierThirdStep 
    },
    { 
      path: '/modifier-fourth-step', 
      name: 'ModifierFourthStep', 
      component: ModifierFourthStep 
    }
  ]
});
