<template>
  <div class="home">
    <Toptab />
    <Menu :menuIndex="menuIndex"/>
    <b-row class="mb-5 mx-0">
      <div class="col-lg-3 col-md-12 mt-5">
        <div class="border text-left p-3">
          <div class="overflow-auto items border-bottom">
            <img src="../assets/img/filter.png" width="65">
            <h5 class="font-weight-bold mb-0">Filtrer vos offres</h5>
          </div>
          <div class="my-3">
            <p class="font-weight-bold">Rechercher par :</p>
            <p class="font-weight-bold">Mots-clés</p>
            <div style="height: 30px;">
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
          </div>
        </div>
      </div>      
      <div class="col-lg-9 col-md-12 mt-5">
        <b-card no-body>
          <b-tabs v-model="tabIndex" card class="mytabs">
            <b-tab title="Postes actifs">
              <PostesActifs :handle="tabchange"/>
            </b-tab>
            <b-tab title="Postes archivés">
              <PostesArchive />
            </b-tab>
            <b-tab title="Info">
              <PostesActifs :handle="tabchange"/>
            </b-tab>
          </b-tabs>
        </b-card>
        <b-modal id="modal-en" hide-footer hide-header>
          <div class="text-center">
            <h1 class="mb-3">En cours</h1>
            <p class="font-weight-bold list-bold">L’utilisateur est dirigé vers</p> 
            <p class="font-weight-bold list-bold">"Modification d’une offre d’emploi"</p>
          </div>
        </b-modal>
      </div>
    </b-row>
  </div>
</template>

<script>
import Toptab from "./Toptab.vue"
import Menu from "./Menu.vue"
import PostesActifs from "./Postes-actifs.vue"
import PostesArchive from "./Postes-archive.vue"
export default {
  name: 'Postes',
  components: {
    Toptab,
    Menu,
    PostesActifs,
    PostesArchive
  },
  data() {
    return {
      tabIndex: 0,
      menuIndex: 0
    }
  },
  methods: {
    tabchange() {
      this.tabIndex = 1;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
