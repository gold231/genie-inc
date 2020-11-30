<template>
  <div class="overflow-auto p-3 mx-0">
    <div class="custom-width-1 border-dash float-left mb-3" v-b-modal.modal-ajouter>
      <div class="float-left pad-16">
        <img src="../assets/img/ajouter.png" width="65">   
      </div>
      <p class="font-weight-bold mt-4 mb-0 mr-1">Ajouter une offre d’emploi</p>
    </div>
    <b-modal id="modal-ajouter" hide-footer hide-header>
      <div class="text-center">
        <h4>L’action de ce bouton n’est pas disponible sur le prototype</h4>
      </div>
    </b-modal>
    <div class="custom-width-2 float-left">
      <div class="overflow-auto">
        <div v-b-modal.modal-oups class="custom-width-3 float-left mb-3">
          <div class="shadow float-left pad-16">
            <img src="../assets/img/Nouvelles_candidatures.png" width="65">
          </div>
          <p class="mt-4 mb-0"><span style="color: red;">14</span> nouvelles candidatures</p>
        </div>
        <div v-b-modal.modal-oups class=" custom-width-3 float-left mb-3">
          <div class="shadow float-left pad-16">
            <img src="../assets/img/offres.png" width="65">
          </div>
          <p class="mt-4 mb-0"><span style="color: red;">8</span> Offres actives</p>
        </div>
      </div>
    </div>
    <b-modal id="modal-oups" hide-footer hide-header>
      <div class="text-center">
        <h4>Oups,</h4>
        <h4><span style="color: red;"> Ceci n’est pas un bouton,</span></h4> 
        <h4>Svp, me le mentionner si vous avez cliquer ici.</h4>
      </div>
    </b-modal>
    <div class="custom-width-2 float-left">
      <div class="overflow-auto">
        <div class="custom-width-3 float-left mb-3">
          <div class="shadow float-left lefttab">
          </div>
          <div class="">
            <p class="mt-3 mb-0">PHASE 2</p>
            <p class="text-gray1 mb-0"> Statistiques du recruteur</p>
          </div>
        </div>
        <div class="custom-width-3 float-left mb-3">
          <div class="shadow float-left lefttab items justify-center">
            <p class="text-gray1 mb-0" style="font-size: 30px;">+</p>
          </div>
          <div class="">
            <p class="mt-3 mb-0">PHASE 2</p>
            <p class="text-gray1 mb-0">+ Page statistique</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toptab'
}
</script>

<style lang="scss" scoped>
.lefttab {
  height: 97px;
  width: 97px;
}
.pad-16 {
  padding: 16px;
}
.custom-width-1 {
  width: 20%;
}
.custom-width-2 {
  width: 40%;
}
@media (max-width: 1150px) {
  .custom-width-1, .custom-width-2 {
    width: 100%;
  }
}
.custom-width-3 {
  width: 50%;
}
@media (max-width: 576px) {
  .custom-width-3 {
    width: 100%;
  }
}
.justify-center {
  display: flex;
  justify-content: center;
}
</style>