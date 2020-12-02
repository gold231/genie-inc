<template> 
  <div class="">
    <div class="overflow-auto border-bottom py-3 px-5">
      <p class="font-weight-bold float-left list-max my-0">Motivations du candidat</p>
    </div>
    <div class="border justify-center bg-wblue cont-height text-left py-3 px-5">
      <p class="cont-top">Les motivations du candidat apparaîtrons ici</p>
    </div>
    <div class="border cont-note bg-wblue float-right my-3 py-3 px-5">
      <p class="font-weight-bold text-left list-max my-0">Note au programmeur:</p>
      <p class="text-left">Exemple du template lorsque l’utilisateur n’a pas encore utiliser le service.</p>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'Documents-motivations',
  components: {
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.justify-center {
  display: flex;
  justify-content: center;
}
.cont-height {
  height: 550px;
}
.cont-top {
  margin-top: 100px;
}
.cont-note {
  width: 60%;
}
@media (max-width: 576px) {
  .cont-note {
    width: 100%;
  }
}
</style>
