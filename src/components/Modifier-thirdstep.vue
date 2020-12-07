
<template>
    <b-container>
        <div class="overflow-auto">
            <a class="text-red float-left" href="/"><b-icon icon="chevron-double-left" scale="0.7" />Retour aux offres</a>
            <a class="text-gray float-right" href="#/modifier-fourth-step">Vos options<b-icon icon="chevron-double-right" scale="0.7" /></a>
        </div>
        <div class="circle-div">
            <div class="contact-width">
                <h1 class="font-weight-bold">Questions de présélections</h1>
                <div class="p-5 position-relative">
                    <b-row class="progressbar">
                        <b-col class="">
                            <a href="#/modifier-first-step" class="text-decoration-none"> 
                                <div class="circle-div">
                                    <div class="circle bg-lightgray text-white step-form">1</div>
                                </div>
                                <p class="text-lightdark">Modifier votre offre d’emploi</p>
                            </a>
                        </b-col>                
                        <b-col class="">
                            <a href="#/modifier-second-step" class="text-decoration-none"> 
                                <div class="circle-div">
                                    <div class="circle bg-lightgray text-white step-form">2</div>
                                </div>
                                <p class="text-lightdark">Visualisation</p>
                            </a>
                        </b-col>                
                        <b-col class="">
                            <div class="circle-div">
                                <div class="circle button-ajouter text-white font-weight-bold step-form">3</div>
                            </div>
                            <p class="font-weight-bold">Questions de préselections</p>
                        </b-col>
                        <b-col class="">
                            <a href="#/modifier-fourth-step" class="text-decoration-none"> 
                                <div class="circle-div">
                                    <div class="circle bg-lightgray text-white step-form">4</div>
                                </div>
                                <p class="text-lightdark">Vos options</p>
                            </a>
                        </b-col>
                    </b-row>
                </div>
                <div class="shadow">
                    <div class="p-5">
                        <div class="">
                            <h2 class="text-gray font-weight-bold">Présélectionnez vos candidatures</h2>
                            <p class="list-p">Posez des questions aux candidats lorsqu’ils posent leur candidature sur votre offre d’emploi afin de sauver du temps!</p>
                        </div>
                        <div class="mt-5">
                            <h4 class="font-weight-bold">Choisissez votre type de question</h4>
                            <b-row class="mt-5">
                                <b-col class=" p-3">
                                    <b-row class="mx-0 mb-3" style="border-bottom: 1px solid #000;">
                                        <b-col cols="8">
                                            <a @click="openContent('development')" class="btn">
                                                <h5 class="text-left font-weight-bold">Question à développement</h5>
                                            </a>
                                        </b-col>
                                        <b-col cols="4" class="items">
                                            <b-icon icon="arrow-right" scale="2"/>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col class="p-3">
                                    <b-row class="mx-0 mb-3" style="border-bottom: 1px solid #000;">
                                        <b-col cols="8">
                                            <a @click="openContent('multiples')" class="btn">
                                                <h5 class="text-left font-weight-bold">Question à choix multiples</h5>
                                            </a>
                                        </b-col>
                                        <b-col cols="4" class="items">
                                            <b-icon icon="arrow-right" scale="2"/>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </div>
                <div class="con-height mb-5">
                    <Buttons /> 
                </div> 
                <b-container class="text-left">
                    <div id="development" style="display: none;">
                        <div class="mt-5">
                            <h5 class="font-weight-bold">Question à développement</h5>    
                            <div class="mt-4" style="border-bottom: 1px solid #000;">
                                <p class="font-weight-bold">Posez votre question ici</p>
                                <input type="text" id="phone" name="phone" class="form-control collape list-p mb-3" placeholder="Inscrire votre question ici">
                            </div> 
                        </div>                        
                        <div class="text-center mt-5">
                            <h4 class="font-weight-bold">+</h4>
                            <h4 class="font-weight-bold">Ajouter une question</h4>
                        </div>
                    </div>
                    <div id="multiples" style="display: none;">
                        <div class="mt-5" style="border-bottom: 1px solid #000;">
                            <h5 class="font-weight-bold">Question à choix multiples</h5>    
                            <div class="mt-4">
                                <p class="font-weight-bold">Posez votre question ici :</p>
                                <input type="text" id="phone" name="phone" class="form-control collape list-p mb-3" placeholder="Entrez votre question ici">
                            </div> 
                            <div class="mt-4">
                                <p class="font-weight-bold">Choix #1</p>
                                <input type="text" id="phone" name="phone" class="form-control collape list-p mb-3" placeholder="Écrire le choix #1">
                            </div> 
                            <div class="overflow-auto mb-3">
                                <p class="float-right font-weight-bold">+ Ajouter un choix</p>
                            </div>
                        </div>                        
                        <div class="text-center mt-5">
                            <h4 class="font-weight-bold">+</h4>
                            <h4 class="font-weight-bold">Ajouter une question</h4>
                        </div>
                    </div>
                </b-container>
            </div>                     
        </div>
    </b-container>
</template>

<script>
import Buttons from './Modifier-buttons.vue';
export default {
    name: 'ModifierThirdStep',
    components: {
        Buttons
    },
    methods: {
        openContent(key) {
            if (key == "development") {
                document.getElementById('development').style.display = "block";
                document.getElementById('multiples').style.display = "none";
            } else {
                document.getElementById('multiples').style.display = "block";
                document.getElementById('development').style.display = "none";
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.con-height {
    height: 30px;
    @media (max-width: 490px) {
        height: 50px;
    }    
    @media (max-width: 380px) {
        height: 100px;
    }
}
</style>