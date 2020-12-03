<template>
    <div>
        <div v-for="(item, key) in array" :key="key" :value="item" class="border-bottom">
            <b-row class=" mx-0">
                <b-col class="text-left">
                    <b-link href="#/candidatures"><h4 class="font-weight-bold mb-0 p-1 text-gray">Titre du poste</h4></b-link>
                    <p class="list-p mb-0 p-1">En ligne : {{ item.key1 }}</p>              
                    <p class="list-bold font-weight-bold mb-0 p-1">Montréal</p>
                    <b-button-group>
                        <b-button variant="light" href="#/candidatures" class="list-p font-weight-bold" style="color: #6E6C92;">Candidatures (45)</b-button>
                        <b-button variant="light" class="list-p font-weight-bold border-left" style="color: #6E6C92;">Remettre ce poste en ligne</b-button>
                        <b-button variant="light" class="list-p font-weight-bold border-left">Supprimer définitivement</b-button>
                    </b-button-group>
                </b-col>                
                <b-col class="my-3">
                    <p class="list-p mt-3">Nb de vue</p>
                    <p class="list-p mb-0">{{ item.key2 }}</p>
                </b-col>
                <b-col class="mt-4 mb-3">
                    <b-button variant="light" href="#/candidatures" class="list-p">CV reçus</b-button>
                    <p class="list-p text-blue mt-3 mb-0">{{ item.key3 }}</p>
                </b-col>
                <b-col class="my-3 border-right">
                    <p class="font-weight-bold text-dark list-bold mt-3 mb-0">PHASE 2</p>
                    <p class="text-dark list-p mb-0">Statistiques</p>
                </b-col>
                <b-col class="">
                    <p class="font-weight-bold list-bold mt-3 mb-1">Budjet</p>
                    <p class="font-weight-bold list-bold text-red mb-1">{{ item.key4 }}$</p>
                    <p class="font-weight-bold list-p text-blue mb-0" style="text-decoration: underline;">Ajouter un service</p>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Postes-actifs',
  components: {},
  data() {
    return {
      array: [
        { key1: '10-09-2020 à 10-09-2020', key2: '345', key3: '45', key4: '299' },
        { key1: '10-09-2020 à 10-09-2020', key2: '345', key3: '45', key4: '299' },
        { key1: '10-09-2020 à 10-09-2020', key2: '345', key3: '45', key4: '299' },
        { key1: '10-09-2020 à 10-09-2020', key2: '345', key3: '45', key4: '299' },
        { key1: '10-09-2020 à 10-09-2020', key2: '345', key3: '45', key4: '299' },
        { key1: '10-09-2020 à 10-09-2020', key2: '345', key3: '45', key4: '299' },
      ]
    }
  }
}
</script>