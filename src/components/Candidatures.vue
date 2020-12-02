<template>
  <div class="home">
    <Toptab />
    <Menu :menuIndex="menuIndex"/>
    <b-row class="my-5 mx-0">
      <div class="col-lg-3 col-md-12 pb-3">
        <div class="border text-left p-3">
          <div class="overflow-auto items border-bottom">
            <img src="../assets/img/Nouvelles_candidatures.png" width="65">
            <h5 class="font-weight-bold mb-0">Filtrer vos offres</h5>
          </div>
          <div class="border-bottom mt-3">
            <p class="font-weight-bold">Pour le poste :</p>
            <b-dropdown variant="outline" text="Titre du poste" class="drop-bold"></b-dropdown>
          </div>
          <div class="mt-3">
            <p class="font-weight-bold text-left">Rechercher par :</p>
            <p class="font-weight-bold text-left">Mots-clés</p>
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
          <div class="border text-center">
            <b-dropdown variant="outline" text="Les plus récent">
            </b-dropdown>
            <b-dropdown variant="outline" text="Ordre alphabétique">
            </b-dropdown>
          </div>
        </div>
      </div>      
      <div class="col-lg-9 col-md-12"> 
        <b-card no-body>
          <b-tabs v-model="tabIndex" card class="mytabs">
            <b-tab title="Candidatures reçus (123)">
              <CandidaturesRecus />
            </b-tab>
            <b-tab title="Intéressé (45)">
              <CandidaturesRecus />
            </b-tab>
            <b-tab title="Archivés 23">
              <CandidaturesRecus />
            </b-tab>
          </b-tabs>
        </b-card>                     
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
      </div>
    </b-row>
  </div>
</template>

<script>
import Toptab from "./Toptab.vue"
import Menu from "./Menu.vue"
import CandidaturesRecus from './Candidatures-recus.vue'
export default {
  name: 'Candidatures',
  components: {
    Toptab,
    Menu,
    CandidaturesRecus,
  },
  data() {
    return {
      tabIndex: 0,
      menuIndex: 1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
