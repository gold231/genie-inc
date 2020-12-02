<template>
    <b-row class="border mt-3 mx-0 py-3">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">
            <b-row class="items">
                <b-col>
                    <b-dropdown left text="Mes offres d’emploi" variant="outline" :class="{'drop-bold':menuIndex==0}">
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
                    <b-link href="#/candidatures" :class="{active: menuIndex == 1}" class="text-decoration-none text-black">Mes candidatures</b-link>
                </b-col>
                <b-col>
                    <b-link class="text-decoration-none text-black" >Facturation</b-link>                    
                </b-col>
            </b-row>
        </div>
        <div class="col-lg-3"></div>
    </b-row>
</template>

<script>
export default {
  name: 'Menu',
  props: {
      menuIndex: Number
  },
  mounted() {
      console.log(this.menuIndex);
  }
}
</script>

<style lang="scss" scoped>
.active{
    color: #000;
    font-weight: bold !important;
}
</style>