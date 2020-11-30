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
    <b-row class="mb-5 mx-0">
      <div class="col-lg-3 col-md-12 mt-5">
        <div class="border p-3">
          <div class="overflow-auto items border-bottom">
            <img class="float-left" src="../assets/img/filter.png" width="65">
            <h5 class="float-left font-weight-bold mb-0">Filtrer vos offres</h5>
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
          <b-dropdown text="Compognie" variant="outline" class="text-dark border w-100">
          </b-dropdown>
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
      <div class="col-lg-9 col-md-12 mt-5">
        <div class="">
          <b-list-group horizontal="sm" class="list-items">
            <b-list-group-item class="bg-gray list-item first-item mr-1" href="#">Poste actif</b-list-group-item>
            <b-list-group-item class="bg-gray list-item mr-1" href="#" v-b-modal.modal-action>Poste archivés</b-list-group-item>
            <b-list-group-item class="bg-gray list-item mr-1" href="#" v-b-modal.modal-action>Tous</b-list-group-item>
          </b-list-group>  
        </div>                  
        <b-modal id="modal-action" hide-footer hide-header>
          <div class="text-center">
            <h4>L’action de ce bouton n’est pas disponible sur le prototype</h4>
          </div>
        </b-modal>  
        <b-modal id="modal-en" hide-footer hide-header>
          <div class="text-center">
            <h1 class="mb-3">En cours</h1>
            <p class="font-weight-bold list-bold">L’utilisateur est dirigé vers</p> 
            <p class="font-weight-bold list-bold">"Modification d’une offre d’emploi"</p>
          </div>
        </b-modal>
        <div class="border">
          <div v-for="(item, key) in array" :key="key" :value="item" class="border-bottom py-3">
            <b-row class=" mx-0">
              <b-col class="box-1 text-left">
                <b-link href="#/candidatures"><h4 class="font-weight-bold mb-0 p-1 text-gray">Titre du poste</h4></b-link>
                <p class="list-p mb-0 p-1">En ligne : {{ item.key1 }}</p>              
                <p class="list-bold font-weight-bold mb-0 p-1">Montréal</p>
                <b-list-group horizontal="md" class="list-items-1">
                  <b-list-group-item class="p-1 list-p list-item-1" href="#/candidatures">Candidatures({{ item.key2 }})</b-list-group-item>
                  <b-list-group-item class="p-1 list-p border-left" href="#" v-b-modal.modal-en>Modifier</b-list-group-item>
                  <b-list-group-item class="p-1 list-p border-left" href="#">Archiver</b-list-group-item>
                </b-list-group> 
              </b-col>
              <b-col class="my-3">
                <p class="list-p mt-3">Nb de vue</p>
                <p class="list-p mb-0">{{ item.key3 }}</p>
              </b-col>
              <b-col class=" my-3">
                <p class="list-p mt-3">CV reçus</p>
                <p class="list-p text-blue mb-0">{{ item.key4 }}</p>
              </b-col>
              <b-col class="my-3 border-right">
                <p class="font-weight-bold text-dark list-bold mt-3 mb-0">PHASE 2</p>
                <p class="text-dark list-p mb-0">Statistiques</p>
              </b-col>
              <b-col class="">
                <p class="font-weight-bold list-bold mt-3 mb-1">Budjet</p>
                <p class="font-weight-bold list-bold text-red mb-1">{{ item.key5 }}$</p>
                <p class="font-weight-bold list-p text-blue mb-0" style="text-decoration: underline;">Ajouter un service</p>
              </b-col>
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
  name: 'Poste',
  components: {
    Toptab,
  },
  data() {
    return {
      array: [
        { key1: '10-09-2020 à 10-09-2020', key2: '45', key3: '345', key4: '45', key5: '299' },
        { key1: '10-09-2020 à 10-09-2020', key2: '45', key3: '345', key4: '45', key5: '299' },
        { key1: '10-09-2020 à 10-09-2020', key2: '45', key3: '345', key4: '45', key5: '299' },
        { key1: '10-09-2020 à 10-09-2020', key2: '45', key3: '345', key4: '45', key5: '299' },
        { key1: '10-09-2020 à 10-09-2020', key2: '45', key3: '345', key4: '45', key5: '299' },
        { key1: '10-09-2020 à 10-09-2020', key2: '45', key3: '345', key4: '45', key5: '299' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
