<template>
    <b-container>
        <div class="overflow-auto">
            <a class="text-red float-left" href="/"><b-icon icon="chevron-double-left" scale="0.7" />Retour aux offres</a>
            <a class="text-gray float-right" href="#/modifier-third-step">Questions de présélections<b-icon icon="chevron-double-right" scale="0.7" /></a>
        </div>
        <div class="circle-div">
            <div class="contact-width">
                <h1 class="font-weight-bold">Visualisation</h1>
                <div class="p-5">
                    <b-row>
                        <b-col class="">
                            <a href="#/modifier-first-step" class="text-decoration-none">
                                <div class="circle-div">
                                    <div class="circle bg-lightgray text-white">1</div>
                                </div>
                                <p class="text-lightdark">Modifier votre offre d’emploi</p>
                            </a>
                        </b-col>                
                        <b-col class=""> 
                            <div class="circle-div">
                                <div class="circle button-ajouter text-white font-weight-bold">2</div>
                            </div>
                            <p class="font-weight-bold">Visualisation</p>
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
                        <div class="border-bottom text-left">
                            <div class="overflow-auto">
                                <div class="float-left">
                                    <p class="list-bold font-weight-bold mb-0">Titre de l’emploi</p>
                                    <p class="list-p font-weight-bold mb-0">$70 000 a year</p>
                                    <p class="text-red">Desjardins</p>
                                </div>
                                <div class="float-right text-red mt-3">
                                    <b-icon icon="heart"/>
                                    Ajouter à mes favoris
                                </div>
                            </div>
                            <div class="">
                                <p class="list-bold font-weight-bold mb-0">Type de poste</p>
                                <p class="list-p">Temps plein</p>
                            </div>
                            <div class="overflow-auto mb-3">
                                <div class="float-left">
                                    <b-button class="" variant="dark">Postuler</b-button>
                                </div>
                                <div class="float-right">
                                    <img src="../assets/img/telechargement.png" width="150">
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="overflow-auto">
                                <div class="float-left mt-3">
                                    <img class="mr-2" src="../assets/img/twitter.svg" width="20">
                                    <img class="mr-2" src="../assets/img/facebook.svg" width="20">
                                    <img class="mr-2" src="../assets/img/linkedin.svg" width="20">
                                    <img class="mr-2" src="../assets/img/e_mail.svg" width="20">
                                    <img class="mr-2" src="../assets/img/rss.svg" width="20">
                                </div>
                                <div class="float-right mt-3">
                                    <img src="../assets/img/imprimante.svg" width="20">
                                    Imprimer
                                </div>
                            </div>
                            <div class="text-left border-bottom mt-4">
                                <p class="list-p font-weight-bold">Description de la compagnie</p>
                                <p class="list-p">Vous avez une passion pour le domaine du marketing et du Web?</p>
                                <p class="list-p">Vous avez envie de faire partie d’une entreprise ayant une méthodologie éprouvée ainsi qu’une équipe expérimentée?</p>
                                <p class="list-p">Joignez-vous à cette agence Web qui s’efforce à être celle qui offre la meilleure expérience client, autant au niveau de la qualité visuelle et technique de ses réalisations, que par l’excellence du service ainsi que des conseils offerts par les membres de son équipe!</p>
                                <p class="list-p">Chez nous, l’esprit d’équipe, l’entraide et le dépassement de soi font partie intégrante de notre quotidien! Suite à une ouverture de poste, nous sommes à la recherche d’un responsable pour notre département numérique! Ça vous intéresse? Continuez de lire!</p>
                                <p class="list-p"></p>
                            </div>
                            <div class="text-left border-bottom mt-4">
                                <p class="list-p font-weight-bold">Sommaire du poste </p>
                                <p class="list-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat sed cras ornare. </p>
                                <p class="list-p">Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Viverra adipiscing at in tellus integer feugiat. Nisl pretium fusce id velit ut tortor pretium viverra. Felis bibendum ut tristique et egestas quis. </p>
                                <p class="list-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat sed cras ornare.</p>
                            </div>
                            <div class="text-left mt-3">
                                <p class="list-p font-weight-bold">Profil de compétences recherché : </p>
                                <b-list-group>
                                    <b-list-group-item class="border-0 ml-3 p-0">Baccalauréat en marketing, en communication ou dans un domaine similaire;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Au moins 3 ans d’expérience à un poste comparable;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Certification Google; Excellentes compétences en pratiques SEM;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Connaissances des plateformes de placement média, des outils de suivi analytique et des outils SEO.</b-list-group-item>
                                </b-list-group>
                            </div>
                            <div class="text-left mt-3">
                                <p class="list-p font-weight-bold">Aptitudes demandées : </p>
                                <b-list-group>
                                    <b-list-group-item class="border-0 ml-3 p-0">Entregent et leadership; </b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Organisé et sens de la planification; Responsable;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Responsable;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Démontrant de l’initiative;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Capable de bien gérer le temps et les priorités; </b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Apte à trouver de bonnes solutions et de nouvelles idées;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Bilingue, en français et en anglais, à l’oral et à l’écrit. </b-list-group-item>
                                </b-list-group>
                            </div>
                            <div class="text-left mt-3">
                                <p class="list-p font-weight-bold">Vos futurs tâches :</p>
                                <b-list-group>
                                    <b-list-group-item class="border-0 ml-3 p-0">Effectuer une analyse et bien comprendre les besoins des clients;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Offrir vos conseils aux clients en matière de stratégie Web; </b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Mettre en place des stratégies numériques innovantes et performantes;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Diriger et participer à l’exécution des stratégies; </b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Accompagner et superviser la qualité du travail des employés;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Assurer le respect du budget d’honoraires et de placement média; </b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Présenter les résultats et les performances aux clients. </b-list-group-item>
                                </b-list-group>
                            </div>
                            <div class="text-left mt-3">
                                <p class="list-p font-weight-bold">Les avantages auxquels vous aurez droit :</p>
                                <b-list-group>
                                    <b-list-group-item class="border-0 ml-3 p-0">Horaire flexible; Possibilité de faire du télétravail;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Salaire compétitif;</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Remboursement pour un programme d’activité physique (jusqu’à 500 $ par année);</b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Assurance groupe après votre probation; </b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Possibilité de cotiser à un REER avec la participation de l’employeur; </b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Climat de travail idéal; </b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Formation continue; </b-list-group-item>
                                    <b-list-group-item class="border-0 ml-3 p-0">Télémédecine pour tous les employés! </b-list-group-item>
                                </b-list-group>
                            </div>
                            <div class="text-left mt-3">
                                <p class="list-p">Ce texte vous représente? Alors, soumettez votre candidature via Espresso-jobs.ca.</p>
                                <p class="list-p">Veuillez noter que le processus de présélection est effectué par l’équipe de recrutement d’Espresso-jobs.</p>
                                <p class="list-p">* Le genre masculin n’est utilisé qu’afin d’alléger le texte.</p>
                            </div>
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
    name: 'ModifierSecondStep',
    components: {
        Buttons
    }
}
</script>

<style lang="scss" scoped>

</style>