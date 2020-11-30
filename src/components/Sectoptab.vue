<template>
    <div>
        <h4 class="text-dark">Roger Desjardins</h4>
        <p class="text-dark">Ingénieur civil</p>
        <p class="mb-1"><span class="font-weight-bold">Téléphone :</span> 438-883-3331</p> 
        <p class="mb-1"><span class="font-weight-bold">Courriel :</span> nomcandidat@gmail.com</p>          
        <p><span class="font-weight-bold">Peut déménager :</span> oui</p> 
        <div class="row">
            <div class="col-md-2 list-p border-right" v-b-modal.modal-action>Intéressé</div>
            <div class="col-md-2 list-p border-right" v-b-modal.modal-permet>Contacter</div>
            <div class="col-md-4 list-p" v-b-modal.modal-action>Candidature envoyé le : 10 novembre 2020</div>
            <div class="col-md-2 list-p border-right" v-b-modal.modal-action>Ajouter un commentaire</div>
            <div class="col-md-2 list-p" v-b-modal.modal-action>Archivé</div>
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
</template>

<script>
export default {
  name: 'Sectoptab',
  components: {},
  data() {
    return {}
  }
}
</script>