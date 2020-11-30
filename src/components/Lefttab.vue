<template>
    <div>
        <div class="overflow-auto items border-bottom">
            <img class="float-left" src="../assets/img/candidature.png" width="65">
            <h5 class="float-left font-weight-bold mb-0">Candidatures reçus</h5>
        </div>
        <div class="border-bottom mt-3">
            <p class="font-weight-bold text-left">Pour le poste :</p>
            <div class="overflow-auto">
                <h5 class="font-weight-bold text-left float-left">Titre du poste</h5>  
                <img class="float-right" src="../assets/img/braquette_titre_poste.png">
            </div>
        </div>
        <div class="mt-3">
            <p class="font-weight-bold text-left">Filtrer vos candidats par :</p>
            <b-dropdown text="Nouvelles candidatures" variant="outline" class="text-dark border w-100">
            </b-dropdown>
        </div>
        <div class="border bg-gray px-5 py-3 mt-3">
            <p class="font-weight-bold text-left mb-0">Listes des candidats correspondant :</p>
        </div>
        <div v-for="(item, key) in typeArray" :key="key" :value="item" class="border-bottom py-3">
            <p class="font-weight-bold text-left mb-1">{{ item.key1 }}</p>
            <p class="text-left text-red mb-1">{{ item.key2 }}</p>
            <p class="text-left text-dark">{{ item.key3 }}</p>
            <b-list-group horizontal="sm" class="list-items-1">
                <b-list-group-item class="p-1 list-p list-item-1 text-dark text-left" href="#">Intéressé</b-list-group-item>
                <b-list-group-item class="p-1 list-p list-item-1 text-dark text-right" href="#">Archivé</b-list-group-item>
            </b-list-group> 
        </div>
    </div>
</template>

<script>
export default {
  name: 'Lefttab',
  components: {},
  data() {
    return {
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