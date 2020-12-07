
<template>
    <b-container>
        <div class="overflow-auto">
            <a class="text-red float-left" href="/"><b-icon icon="chevron-double-left" scale="0.7" />Retour aux offres</a>
            <a class="text-gray float-right" href="/">Enregistrer et mettre en ligne<b-icon icon="chevron-double-right" scale="0.7" /></a>
        </div>
        <div class="circle-div">
            <div class="contact-width">
                <h1 class="font-weight-bold">Vos options</h1>
                <div class="p-5 position-relative">
                    <b-row class="progressbar">
                        <b-col lg="3" md="6" sm="12">
                            <a href="#/modifier-first-step" class="text-decoration-none"> 
                                <div class="circle-div">
                                    <div class="circle bg-lightgray text-white step-form">1</div>
                                </div>
                                <p class="text-lightdark">Modifier votre offre d’emploi</p>
                            </a>
                        </b-col>                
                        <b-col lg="3" md="6" sm="12">
                            <a href="#/modifier-second-step" class="text-decoration-none"> 
                                <div class="circle-div">
                                    <div class="circle bg-lightgray text-white step-form">2</div>
                                </div>
                                <p class="text-lightdark">Visualisation</p>
                            </a>
                        </b-col>                
                        <b-col lg="3" md="6" sm="12">
                            <a href="#/modifier-third-step" class="text-decoration-none">
                                <div class="circle-div">
                                    <div class="circle bg-lightgray text-white step-form">3</div>
                                </div>
                                <p class="text-lightdark">Questions de préselections</p>
                            </a>
                        </b-col>
                        <b-col lg="3" md="6" sm="12"> 
                            <div class="circle-div">
                                <div class="circle button-ajouter text-white font-weight-bold step-form">4</div>
                            </div>
                            <p class="font-weight-bold">Vos options</p>
                        </b-col>
                    </b-row>
                </div>
                <div class="shadow">
                    <div class="p-5">  
                        <div class="text-left border-bottom">
                            <h2 class="text-gray font-weight-bold">Visibilité additionnelle</h2>
                            <p class="list-p">Optimisez votre recrutement avec nos options à la carte</p>
                        </div>
                        <div class="">
                            <b-row>
                                <b-col class="p-3">
                                    <div class="mx-0 mb-3" style="border-bottom: 1px solid #000;">
                                        <h4 class="font-weight-bold">Offre en vedette</h4>
                                        <b-form-checkbox
                                            id="checkbox-1"
                                            name="checkbox-1"
                                            value="accepted"
                                            unchecked-value="not_accepted"
                                            class="font-weight-bold list-p mt-4"
                                        > </b-form-checkbox>
                                        <p class="list-p text-left">Je désire que mon offre d'emploi soit également visible dans la section des 
                                            <span class="font-weight-bold"> OFFRES EN VEDETTE</span> en première page du site durant une semaine ainsi que dans les pages associées aux chercheurs d'emploi.</p>
                                        <p class="list-p text-left"> Des frais additionnels de 79.99 $ me seront facturés.</p>
                                        <br>
                                    </div>
                                </b-col>
                                <b-col class="p-3">
                                    <div class="mx-0 mb-3" style="border-bottom: 1px solid #000;">
                                        <h4 class="font-weight-bold">Offre du jour</h4>
                                        <b-form-checkbox
                                            id="checkbox-1"
                                            name="checkbox-1"
                                            value="accepted"
                                            unchecked-value="not_accepted"
                                            class="font-weight-bold list-p mt-4"
                                        > </b-form-checkbox>
                                        <p class="list-p text-left">Je désire 
                                            <span class="font-weight-bold"> épingler mon offre en haut de l’alerte emploi personnalisée </span> 
                                            envoyée à tous les chercheurs pour un maximum de visibilité. Je serai donc en première position de l’alerte emploi à la journée sélectionnée (une seule place disponible par jour).</p>
                                        <p class="list-p text-left"> Des frais additionnels de 99.99$ s’appliquent.</p>
                                    </div>
                                </b-col>
                            </b-row>
                            <div class="text-left mt-4">
                                <h2 class="font-weight-bold">Laissez 
                                    <span class="text-gray"> nos expert en recrutement </span> 
                                    se charger de votre prochain candiat.</h2>
                                <p class="list-p">Service de recrutement disponibles</p>
                            </div>
                            <b-row>
                                <b-col class="p-3">
                                    <div class="mx-0 mb-3" style="border-bottom: 1px solid #000;">
                                        <h4 class="font-weight-bold">Recrutement 3.0</h4>
                                        <b-form-checkbox
                                            id="checkbox-1"
                                            name="checkbox-1"
                                            value="accepted"
                                            unchecked-value="not_accepted"
                                            class="font-weight-bold list-p mt-4"
                                        > </b-form-checkbox>
                                        <p class="list-p text-left">Nous prendrons en charge le processus complet de votre recrutement allant de la rédaction stratégique de votre offre d’emploi jusqu’à l’entrevue en personne ou par vidéoconférence ainsi que les vérifications préemploi. Payable sur embauche seulement. Contactez-nous pour connaître les tarifs.</p>
                                        <br>
                                    </div>
                                </b-col>
                                <b-col class="p-3">
                                    &nbsp;
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </div>
                <Buttons />
            </div>
        </div>
    </b-container>
</template>

<script>
import Buttons from './Modifier-buttons.vue';
export default {
    name: 'ModifierFourthStep',
    components: {
        Buttons
    }
}
</script>