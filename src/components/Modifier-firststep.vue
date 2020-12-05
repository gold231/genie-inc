<template>
    <b-container >
        <div class="overflow-auto">
            <a class="text-red float-left" href="/"><b-icon icon="chevron-double-left" scale="0.7" />Retour aux offres</a>
            <a class="text-gray float-right" href="#/modifier-second-step">Visualisation<b-icon icon="chevron-double-right" scale="0.7" /></a>
        </div>
        <div class="circle-div">
            <div class="contact-width">
                <h1 class="font-weight-bold">Modifier votre offre D’emploi</h1>
                <div class="p-5">
                    <b-row>
                        <b-col class="">
                            <div class="circle-div">
                                <div class="circle button-ajouter text-white font-weight-bold">1</div>
                            </div>
                            <p class="font-weight-bold">Modifier votre offre d’emploi</p>
                        </b-col>                
                        <b-col class="">
                            <a href="#/modifier-second-step" class="text-decoration-none"> 
                                <div class="circle-div">
                                    <div class="circle bg-lightgray text-white">2</div>
                                </div>
                                <p class="text-lightdark">Visualisation</p>
                            </a>
                        </b-col>                
                        <b-col class="">
                            <a href="#/modifier-third-step" class="text-decoration-none"> 
                                <div class="circle-div">
                                    <div class="circle bg-lightgray text-white">3</div>
                                </div>
                                <p class="text-lightdark">Questions de préselections</p>
                            </a>
                        </b-col>
                        <b-col class="">
                            <a href="#/modifier-fourth-step" class="text-decoration-none"> 
                                <div class="circle-div">
                                    <div class="circle bg-lightgray text-white">4</div>
                                </div>
                                <p class="text-lightdark">Vos options</p>
                            </a>
                        </b-col>
                    </b-row>                    
                </div>
                <div class="shadow">
                    <div class="p-5">    
                        <div class="">      
                            <div class="border-bottom overflow-auto">
                                <h4 class="float-left font-weight-bold">Coordonnées</h4>
                                <p class="float-right text-gray list-p">Enregistrer les modification<b-icon icon="chevron-double-right" scale="0.7" /></p>
                            </div>      
                            <div class="text-left mt-4">
                                <h6 class="font-weight-bold">Société</h6>
                                <b-dropdown variant="outline" text="Compagnies reliés au compte" class="dropdown-left border list-p"></b-dropdown>
                            </div>        
                            <div class="text-left mt-4">
                                <h6 class="font-weight-bold">Nom du responsable*</h6>
                                <input type="text" id="phone" name="phone" class="form-control collape list-p" placeholder="Nom du responsable de l’offre">
                            </div>       
                            <div class="text-left mt-4">
                                <h6 class="font-weight-bold">Comment recevoir les notifications de nouvelles candidatures?</h6>
                                <p class=" list-p">Indiquez au moins un courriel</p>
                            </div> 
                            <b-row>
                                <b-col class="text-left mt-4">
                                    <h6 class="font-weight-bold">Courriel 1*</h6>
                                    <input type="text" id="phone" name="phone" class="form-control collape list-p" placeholder="Courriel">
                                </b-col>
                                <b-col class="text-left mt-4">
                                    <h6 class="font-weight-bold">Courriel 2*</h6>
                                    <input type="text" id="phone" name="phone" class="form-control collape list-p" placeholder="Courriel">
                                </b-col>
                            </b-row>
                            <b-form-checkbox
                                id="checkbox-1"
                                name="checkbox-1"
                                value="accepted"
                                unchecked-value="not_accepted"
                                class="font-weight-bold list-p mt-4"
                            >
                                *Les informations sur mon entreprise ainsi que le nom et le numéro de téléphone du responsable du poste ne doivent pas être affichés
                            </b-form-checkbox>
                        </div>
                        <div class="mt-5">
                            <div class="border-bottom overflow-auto">
                                <h4 class="float-left font-weight-bold">Détails de l'offre à afficher</h4>
                            </div>         
                            <div class="text-left mt-4">
                                <h6 class="font-weight-bold text-left">Titre du poste à pourvoirr*</h6>
                                <input type="text" id="phone" name="phone" class="form-control collape list-p" placeholder="Titre du poste à pourvoir">
                            </div>       
                            <div class="text-left">
                                <b-row>
                                    <b-col class="mt-4">
                                        <h6 class="font-weight-bold">Salaire offert</h6>
                                        <b-dropdown variant="outline" text="Salaire" class="dropdown-left border list-p w-100"></b-dropdown>
                                    </b-col>
                                    <b-col class="mt-4">
                                        <h6 class="font-weight-bold">Secteur</h6>
                                        <b-dropdown variant="outline" text="Choisissez un secteur" class="dropdown-left list-p border w-100"></b-dropdown>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col class="mt-4">
                                        <h6 class="font-weight-bold">Spécialité</h6>
                                        <b-dropdown variant="outline" text="Spécialité" class="dropdown-left border list-p w-100"></b-dropdown>
                                    </b-col>
                                    <b-col class="mt-4">
                                        <h6 class="font-weight-bold">Expérience</h6>
                                        <b-dropdown variant="outline" text="Expérience" class="dropdown-left border list-p w-100"></b-dropdown>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col class="mt-4">
                                        <h6 class="font-weight-bold">Type d’emploi</h6>
                                        <b-dropdown variant="outline" text="Type d’emploi" class="dropdown-left border list-p w-100"></b-dropdown>
                                    </b-col>
                                    <b-col class="mt-4">
                                        <h6 class="font-weight-bold">Catégorie d’emploi</h6>
                                        <b-dropdown variant="outline" text="Auto-jobs seulement" class="dropdown-left border list-p w-100"></b-dropdown>
                                    </b-col>
                                </b-row>
                            </div>                                    
                            <div class="text-left mt-4">
                                <h6 class="font-weight-bold">Langue(s) parlée(s)</h6>
                                <div class="overflow-auto">
                                    <b-dropdown variant="outline" text="Français" class="dropdown-left border list-p float-left"></b-dropdown>
                                    <h6 class="font-weight-bold float-left mt-2 ml-2"> + Ajouter une langue</h6>
                                </div>
                            </div>                               
                            <div class="text-left mt-4">
                                <h6 class="font-weight-bold">Langue(s) écrite(s)</h6>
                                <div class="overflow-auto">
                                    <b-dropdown variant="outline" text="Français" class="dropdown-left border list-p float-left"></b-dropdown>
                                    <h6 class="font-weight-bold float-left mt-2 ml-2"> + Ajouter une langue</h6>
                                </div>
                            </div> 
                        </div>
                        <div class="overflow-auto mt-5">
                            <div class="float-left" style="width: 40px; height: 40px">
                                <b-icon icon="brightness-high" scale="2" />
                            </div>
                            <div class="float-left">
                                <p class="font-weight-bold text-gray list-p mb-0">Vous avez de la difficulté à rédiger votre offre?</p>
                                <p class=" list-p">Notre équipe est là pour vous!</p>
                            </div>
                            <div class="float-right">
                                <a class="text-gray list-p">Laissez-nous vous aider</a> 
                            </div>
                        </div>
                        <b-card no-body class="mt-4">
                            <b-tabs v-model="tabIndex" card class="mytabs">
                                <b-tab title="Français">
                                    <p class="font-weight-bold text-left m-3">B 
                                        <span class="font-italic ml-3">I </span>
                                        <span class="ml-3" style="text-decoration: underline;"> U </span>
                                        <img class="ml-3" src="../assets/img/liste_a_puce.svg">
                                        <img class="ml-3" src="../assets/img/liste_numero.svg">
                                    </p>
                                    <div class="p-3">
                                        <div class="border justify-center collape cont-height text-left py-3 px-5">
                                            <p class="cont-top">Description complète du poste</p>
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Anglais">
                                    <p class="font-weight-bold text-left m-3">B 
                                        <span class="font-italic ml-3">I </span>
                                        <span class="ml-3" style="text-decoration: underline;"> U </span>
                                        <img class="ml-3" src="../assets/img/liste_a_puce.svg">
                                        <img class="ml-3" src="../assets/img/liste_numero.svg">
                                    </p>
                                    <div class="p-3">
                                        <div class="border justify-center collape cont-height text-left py-3 px-5">
                                            <p class="cont-top">Description complète du poste</p>
                                        </div>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </div>
                </div>
                <Buttons />  
                <div class="mt-5 p-5 ">
                    <div class="text-left">
                        <h4 class="font-weight-bold text-gray">PHASE 2 :</h4>
                        <p class="font-weight-bold">Recherche des disciplines par mots-clés entré par l’utilisateur</p>
                    </div>
                    <div class="text-left mt-4">
                        <h4 class="font-weight-bold">Aidez-nous à trouver vos candidats:</h4>
                        <p class="font-weight-bold" style="color: #AAAAAA;" >Disciplines</p>
                    </div>
                    <Select2  class="style-chooser" 
                        placeholder="Choose a Mots-clés Option" 
                        taggable 
                        multiple 
                        :options="motsOptions" 
                    /> 
                    <div class="border cont-note collape float-left my-3 py-3 px-5">
                        <p class="font-weight-bold text-left list-max my-0">Note au programmeur:</p>
                        <input type="text" id="phone" name="phone" class="form-control list- mt-3" placeholder="Nom de la compagnie">
                        <p class="list-p text-left mt-3">Dropdown qui contient tous les compagnies enregistré + un lien  + "Ajouter une compagnie"</p>
                    </div>                    
                </div>                                      
            </div>
        </div>
    </b-container>
</template>

<script>
import Select2 from 'vue-select';
import Buttons from './Modifier-buttons.vue';
export default {
    name: 'ModifierFirstStep',
    components: {
        Select2,
        Buttons
    },
    data() {
        return {
            motsOptions: ['Mots-clés_1', 'Mots-clés_2', 'Mots-clés_3'],
            tabIndex: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.cont-height {
    height: 250px;
}
</style>