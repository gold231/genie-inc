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
            <b-list-group-item class="bg-gray list-item mr-1" href="#/qualifications">Qualifications</b-list-group-item>
            <b-list-group-item class="bg-gray list-item mr-1" href="#/questions">Questions de présélections</b-list-group-item>
            <b-list-group-item class="bg-gray list-item first-item mr-1" href="#/motivations">Motivations du candidat</b-list-group-item>
          </b-list-group>  
        </div>    
        <div class="">
          <div class="overflow-auto border-bottom py-3 px-5">
            <p class="font-weight-bold float-left list-max my-0">Motivations du candidat</p>
          </div>
          <div class="border justify-center bg-wblue cont-height text-left py-3 px-5">
            <p class="cont-top">Les motivations du candidat apparaîtrons ici</p>
          </div>
          <div class="border cont-note bg-wblue float-right mt-3 py-3 px-5">
            <p class="font-weight-bold text-left list-max my-0">Note au programmeur:</p>
            <p class="text-left">Exemple du template lorsque l’utilisateur n’a pas encore utiliser le service.</p>
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
  name: 'Motivations',
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
.justify-center {
  display: flex;
  justify-content: center;
}
.cont-height {
  height: 550px;
}
.cont-top {
  margin-top: 100px;
}
.cont-note {
  width: 60%;
}
@media (max-width: 576px) {
  .cont-note {
    width: 100%;
  }
}
</style>
