<template>
  <div class="home">
      <Toptab />
      <b-row class="border mt-3 mx-0 py-3">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">
            <b-row class="items">
                <b-col>
                    <b-dropdown left text="Mes offres d’emploi" variant="outline">
                        <b-dropdown-item href="/">
                          <b-dropdown-form class="pl-4"> Toutes mes offres</b-dropdown-form> 
                        </b-dropdown-item>
                        <b-dropdown-item href="/">
                          <b-dropdown-form class="pl-4">Offres actives</b-dropdown-form> 
                        </b-dropdown-item>
                        <b-dropdown-item href="" >
                          <b-dropdown-form class="bg-dark text-white">
                            <img class="mr-1" src="../assets/img/ajouter_.png" width="24">Ajouter une offre
                          </b-dropdown-form>
                        </b-dropdown-item>
                    </b-dropdown>
                </b-col>
                <b-col>
                  <b-link href="#/candidatures" class="text-dark" style="text-decoration: none;">Mes candidatures</b-link>
                </b-col>
                <b-col>
                  <b-link class="text-dark" style="text-decoration: none;">Facturation</b-link>                    
                </b-col>
            </b-row>
        </div>
        <div class="col-lg-3"></div>
    </b-row>
    <b-row class="my-5 mx-0">
      <div class="col-lg-3 col-md-12 pb-3">
        <div class="border p-3">
          <Lefttab />
        </div>
      </div>      
      <div class="col-lg-9 col-md-12">
        <div class="bg-gray text-left p-3 mb-5">
          <Sectoptab />
        </div>
        <div class="">
          <b-list-group horizontal="md" class="list-items">
            <b-list-group-item class="bg-gray list-item mr-1" href="#/documents">Documents du candidat</b-list-group-item>
            <b-list-group-item class="bg-gray list-item first-item mr-1" href="#/qualifications">Qualifications</b-list-group-item>
            <b-list-group-item class="bg-gray list-item mr-1" href="#/questions">Questions de présélections</b-list-group-item>
            <b-list-group-item class="bg-gray list-item mr-1" href="#/motivations">Motivations du candidat</b-list-group-item>
          </b-list-group>  
        </div>    
        <div class="">
          <div class="overflow-auto border-bottom py-3 px-5">
            <p class="font-weight-bold float-left list-max my-0">Qualifications</p>
          </div>
          <div class="border text-left py-3 px-5">
            <div class="mt-4">
              <h4 class="font-weight-bold mb-4">Expériences de travail</h4>
              <h5 class="font-weight-bold mb-3">Designer UI / UX</h5>
              <p class="mb-1">Groupe Velan média</p>
              <p>2016-2010</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div class="mt-4">
              <h4 class="font-weight-bold mb-4">Parcours scolaire</h4>
              <h5 class="font-weight-bold mb-3">Technique en multimédia</h5>
              <p class="mb-1">Cegep de maisonneuve</p>
              <p>2016-2010</p>
            </div>
            <div class="mt-4">
              <h4 class="font-weight-bold mb-4">Compétences</h4>
            </div>            
            <div class="mt-4">
              <h4 class="font-weight-bold mb-4">Certifications</h4>
            </div>           
            <div class="mt-4">
              <h4 class="font-weight-bold mb-4">Langues</h4>
            </div>           
            <div class="mt-4">
              <h4 class="font-weight-bold mb-4">Disponibilité</h4>
            </div>
          </div>
        </div>      
      </div>
    </b-row>
  </div>
</template>

<script>
import Toptab from "./Toptab.vue"
import Lefttab from "./Lefttab.vue"
import Sectoptab from "./Sectoptab.vue"
export default {
  name: 'Qualifications',
  components: {
    Toptab,
    Lefttab,
    Sectoptab,
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
