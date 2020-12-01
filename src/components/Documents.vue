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
            <b-list-group-item class="bg-gray list-item first-item mr-1" href="#/documents">Documents du candidat</b-list-group-item>
            <b-list-group-item class="bg-gray list-item mr-1" href="#/qualifications">Qualifications</b-list-group-item>
            <b-list-group-item class="bg-gray list-item mr-1" href="#/questions">Questions de présélections</b-list-group-item>
            <b-list-group-item class="bg-gray list-item mr-1" href="#/motivations">Motivations du candidat</b-list-group-item>
          </b-list-group>  
        </div>    
        <div class="border">
          <div class="overflow-auto p-3">
            <div class="float-left custom-wid-1">
              <p class="font-weight-bold float-left my-2">Documents :</p>
              <div class="float-left ml-3">
                <b-dropdown text="John.Doe.pdf" variant="outline" class="border w-100">
                </b-dropdown>
              </div>
            </div>
            <div class="float-left custom-wid-2">
              <p class="font-weight-bold list-p text-center float-left px-3 my-2">Imprimer</p>
              <p class="font-weight-bold list-p text-center float-left px-3 my-2">Télécharger</p>
            </div>
            <div class="font-weight-bold list-p float-left text-dark custom-wid-3 my-2">Envoyer le document par courriel - (PHASE 2)</div>
          </div>
          <div class="pdf-viewer">
            <!-- <b-embed type="iframe" aspect="16by9" src="http://www.africau.edu/images/default/sample.pdf" allowfullscreen></b-embed> -->
            <iframe src="https://s25.q4cdn.com/967830246/files/doc_downloads/test.pdf" width="100%" height="1000px"></iframe>
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
// import pdf from 'vue-pdf'
export default {
  name: 'Documents',
  components: {
    Toptab,
    Lefttab,
    Sectoptab,
    // pdf,
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.custom-wid-1 {
  width: 33%;
}
.custom-wid-2 {
  width: 27%;
}
.custom-wid-3 {
  width: 40%;
}
@media (max-width: 576px) {
  .custom-wid-1, .custom-wid-2, .custom-wid-3 {
    width: 100%;
  }
}
</style>
