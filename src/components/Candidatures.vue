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
          <div class="overflow-auto items border-bottom">
            <img class="float-left" src="../assets/img/Nouvelles_candidatures.png" width="65">
            <h5 class="float-left font-weight-bold mb-0">Filtrer vos offres</h5>
          </div>
          <div class="border-bottom mt-3">
            <p class="font-weight-bold text-left">Pour le poste :</p>
            <div class="overflow-auto">
              <h5 class="font-weight-bold text-left float-left">Titre du poste</h5>  
              <img class="float-right" src="../assets/img/braquette_titre_poste.png">
            </div>
          </div>
          <div class="mt-3">
            <p class="font-weight-bold text-left">Rechercher par :</p>
            <p class="font-weight-bold text-left">Mot-clés</p>
            <b-input-group
              id="fieldset-1"
              label-for="input-1"
              class="float-left w-75"
            >
              <b-input-group-prepend is-text>
                <b-icon icon="search"></b-icon>
              </b-input-group-prepend>
              <b-form-input id="input-1" :placeholder="'Mots-clés'" trim></b-form-input>
            </b-input-group> 
          </div>
          <hr style="margin-top: 70px;">
          <div class="border px-5 py-3">
            <p class="font-weight-bold text-left">Les plus récent</p>
            <p class="font-weight-bold text-left mb-0">Ordre alphabétique</p>
          </div>
          <div class="mt-5 px-3">
            <p class="font-weight-bold text-left text-dark">PHASE 2</p>
            <p class="text-left text-dark">Ajouter des filtres pertinents pour Les recruteurs</p>
            <ul class="text-dark text-left custom-li">
              <li>Zone géographique</li>
              <li>À évaluer</li>
              <li>Langue</li>
              <li>Secteur de profession</li>
            </ul>
          </div>
        </div>
      </div>      
      <div class="col-lg-9 col-md-12">
        <div class="">
          <b-list-group horizontal="md" class="list-items">
            <b-list-group-item class="bg-gray list-item first-item mr-1" href="#">Candidatures reçus (123)</b-list-group-item>
            <b-list-group-item class="bg-gray list-item mr-1" href="#" v-b-modal.modal-action>Intéressé (45)</b-list-group-item>
            <b-list-group-item class="bg-gray list-item mr-1" href="#" v-b-modal.modal-action>Archivés 23</b-list-group-item>
          </b-list-group>  
        </div>                  
        <b-modal id="modal-candidature" hide-footer hide-header>
          <div class="text-center">
            <h4>La candidature sera déplacé</h4>
          </div>
        </b-modal>  
        <b-modal id="modal-permet" hide-footer hide-header>
          <div class="text-center">
            <h4 class="font-weight-bold mb-3">Permet d’envoyer un courriel au candidat</h4>
            <p class="font-weight-bold list-bold">Phase 2 : Message automatisé</p>
          </div>
        </b-modal>
        <div class="border">
          <div v-for="(item, key) in array" :key="key" :value="item" class="border-bottom py-3">
            <b-row class="mx-0">
              <div class="col-sm-8 box-1 text-left">
                <b-link href="#/documents"><h4 class="font-weight-bold mb-0 p-1 text-gray">{{ item.key1 }}</h4></b-link>
                <p class="list-p mb-0 p-1">Candidature envoyé le : {{ item.key2 }}</p>              
                <p class="list-bold font-weight-bold mb-0 p-1">Ingénieur civil</p>
                <b-list-group horizontal="sm" class="list-items-1">
                  <b-list-group-item class="p-1 list-p list-item-1 list-width" href="#" v-b-modal.modal-candidature>Intéressé</b-list-group-item>
                  <b-list-group-item class="p-1 list-p border-left list-width" href="#" v-b-modal.modal-permet>Contacter</b-list-group-item>
                  <b-list-group-item class="p-1 list-p border-left list-width" href="#" v-b-modal.modal-candidature>Archivés</b-list-group-item>
                </b-list-group> 
              </div>
              <div class="col-sm-4 text-left">
                <p class="font-weight-bold list-bold mt-3 mb-1">PHASE 2</p>
                <p class="font-weight-bold list-p mb-1">Documents du candidat :</p>
                <p class="list-p mb-0">{{ item.key3 }}</p>
                <p class="list-p mb-0">{{ item.key4 }}</p>
                <p class="list-p mb-0">{{ item.key5 }}</p>
              </div>
            </b-row>
          </div>
        </div>      
      </div>
    </b-row>
  </div>
</template>

<script>
import Toptab from "./Toptab.vue"
export default {
  name: 'Candidatures',
  components: {
    Toptab,
  },
  data() {
    return {
      array: [
        { key1: 'Roger Desjardins', key2: '10/25/2020', key3: 'Nom_cv_candidat.pdf', key4: 'Lettre de présentation.pdf', key5: 'Portfolio.pdf' },
        { key1: 'Roger Desjardins', key2: '10/25/2020', key3: 'Nom_cv_candidat.pdf', key4: 'Lettre de présentation.pdf', key5: 'Portfolio.pdf' },
        { key1: 'Roger Desjardins', key2: '10/25/2020', key3: 'Nom_cv_candidat.pdf', key4: 'Lettre de présentation.pdf', key5: 'Portfolio.pdf' },
        { key1: 'Roger Desjardins', key2: '10/25/2020', key3: 'Nom_cv_candidat.pdf', key4: 'Lettre de présentation.pdf', key5: 'Portfolio.pdf' },
        { key1: 'Roger Desjardins', key2: '10/25/2020', key3: 'Nom_cv_candidat.pdf', key4: 'Lettre de présentation.pdf', key5: 'Portfolio.pdf' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.list-width {
  width: 95px;
}
</style>
