<template>
    <div>
        <div v-for="(item, key) in array" :key="key" :value="item" class="border-bottom">
            <div class="row mx-0">
                <div class="col-sm-8 text-left">
                    <b-link href="#/documents"><h4 class="font-weight-bold mb-0 p-1 text-gray">{{ item.key1 }}</h4></b-link>
                    <p class="list-p mb-0 p-1">Candidature envoyé le : {{ item.key2 }}</p>              
                    <p class="list-bold font-weight-bold mb-0 p-1">Ingénieur civil</p>
                    <b-button-group>
                        <b-button variant="light" href="#" class="list-p" v-b-modal.modal-candidature>Intéressé</b-button>
                        <b-button variant="light" href="#" class="list-p border-left" v-b-modal.modal-permet>Contacter</b-button>
                        <b-button variant="light" class="list-p border-left" v-b-modal.modal-candidature>Archivés</b-button>
                    </b-button-group>
                </div>
                <div class="col-sm-4 text-left">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Candidatures-recus',
  components: {},
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