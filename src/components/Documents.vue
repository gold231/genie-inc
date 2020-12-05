<template>
  <div class="home">
    <Toptab />
    <Menu />
    <b-row class="my-5 mx-0">
      <div class="col-lg-3 col-md-12 pb-3">
        <div class="border text-left p-3">
          <div class="items border-bottom">
              <img src="../assets/img/candidature.png" width="65">
              <h5 class="text-gray-1 font-weight-bold mb-0">Candidatures reçus</h5>
          </div>
          <div class="border-bottom mt-3">
              <p class="text-gray-1 font-weight-bold">Pour le poste :</p>            
              <b-dropdown variant="outline" text="Titre du poste" class="drop-bold"></b-dropdown>
          </div>
          <div class="mt-3">
              <p class="text-gray-1 font-weight-bold">Filtrer vos candidats par :</p>
              <b-dropdown text="Nouvelles candidatures" variant="outline" class="text-dark button-bold border w-100">
              </b-dropdown>
          </div>
          <div class="border bg-gray px-5 py-3 mt-3">
              <p class="font-weight-bold mb-0">Listes des candidats correspondant :</p>
          </div>
          <div v-for="(item, key) in typeArray" :key="key" :value="item" class="border-bottom">
              <p class="font-weight-bold my-1">{{ item.key1 }}</p>
              <p class="text-red font-weight-bold mb-1">{{ item.key2 }}</p>
              <p class="text-dark mb-1">{{ item.key3 }}</p>
              <div class="overflow-auto">
                <b-link class="font-weight-bold text-decoration-none text-gray-1 float-left" href="#">Intéressé</b-link>
                <b-link class="font-weight-bold text-decoration-none text-gray-1 float-right" href="#">Archivé</b-link>
              </div>
          </div>
        </div>
      </div>      
      <div class="col-lg-9 col-md-12">
        <div class="bg-gray text-left p-3 mb-5">
          <h4 class="text-gray-1 font-weight-bold">Roger Desjardins</h4>
          <p class="text-dark font-weight-bold">Ingénieur civil</p>
          <p class="mb-1"><span class="font-weight-bold">Téléphone :</span><span class="text-gray-1 "> 438-883-3331</span></p> 
          <p class="mb-1"><span class="font-weight-bold">Courriel :</span><span class="text-gray-1 "> nomcandidat@gmail.com</span></p>          
          <p><span class="font-weight-bold">Peut déménager :</span> oui</p> 
          <div class="row button-menu items">
              <div class="col-md-2 list-p text-gray-1 font-weight-bold border-right" v-b-modal.modal-action>Intéressé</div>
              <div class="col-md-2 list-p text-gray-1 font-weight-bold border-right" v-b-modal.modal-permet>Contacter</div>
              <div class="col-md-4 list-p" v-b-modal.modal-action>Candidature envoyé le : 10 novembre 2020</div>
              <div class="col-md-2 list-p font-weight-bold border-right" v-b-modal.modal-action>Ajouter un commentaire</div>
              <div class="col-md-2 list-p font-weight-bold " v-b-modal.modal-action>Archivé</div>
          </div>  
          <b-modal id="modal-action" hide-footer hide-header>
              <div class="text-center">
                  <h4>L’action de ce bouton n’est pas disponible sur le prototype</h4>
              </div>
          </b-modal>   
          <b-modal id="modal-permet" hide-footer hide-header>
              <div class="text-center">
                  <h4 class="font-weight-bold mb-3">Permet d’envoyer un courriel au candidat</h4>
                  <p class="font-weight-bold list-bold">Phase 2 : Message automatisé</p>
              </div>
          </b-modal>
        </div>  
        <b-card no-body>
          <b-tabs v-model="tabIndex" card class="mytabs">
            <b-tab title="Documents du candidat">
              <DocumentsDu />
            </b-tab>
            <b-tab title="Qualifications">
              <DocumentsQualifications />
            </b-tab>
            <b-tab title="Questions de présélections">
              <DocumentsQuestions />
            </b-tab>
            <b-tab title="Motivations du candidat">
              <DocumentsMotivations />
            </b-tab>
          </b-tabs>
        </b-card>  
      </div>
    </b-row>
  </div>
</template>

<script>
import Toptab from "./Toptab.vue"
import Menu from "./Menu.vue"
import DocumentsDu from "./Documents-du.vue"
import DocumentsQualifications from "./Documents-qualifications.vue"
import DocumentsQuestions from "./Documents-questions.vue"
import DocumentsMotivations from "./Documents-motivations.vue"

export default {
  name: 'Documents',
  components: {
    Toptab,
    Menu,
    DocumentsDu,
    DocumentsQualifications,
    DocumentsQuestions,
    DocumentsMotivations
  },
  data() {
    return {
      tabIndex: 0,
      typeArray: [
        { key1: 'Roger Desjardins', key2: 'Ingénieur civil', key3: 'Montréal' },
        { key1: 'Roger Desjardins', key2: 'Ingénieur civil', key3: 'Montréal' },
        { key1: 'Roger Desjardins', key2: 'Ingénieur civil', key3: 'Montréal' },
        { key1: 'Roger Desjardins', key2: 'Ingénieur civil', key3: 'Montréal' },
        { key1: 'Roger Desjardins', key2: 'Ingénieur civil', key3: 'Montréal' },
        { key1: 'Roger Desjardins', key2: 'Ingénieur civil', key3: 'Montréal' },
        { key1: 'Roger Desjardins', key2: 'Ingénieur civil', key3: 'Montréal' },
        { key1: 'Roger Desjardins', key2: 'Ingénieur civil', key3: 'Montréal' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.button-menu {
  text-align: center;
  @media (max-width: 767px) {
    text-align: left;
  }
}
</style>
