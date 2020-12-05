<template>
    <div class="float-right mb-3">
        <b-button class="list-p ml-3 mt-3" variant="outline-dark" @click="navigatePrev">Retour</b-button>
        <b-button class="list-p ml-3 mt-3" variant="dark">Enregistrer les modifications</b-button>
        <b-button class="list-p ml-3 mt-3 button-ajouter" @click="navigateNext">{{ nextBtnTxt() }}</b-button>       
    </div>
</template>

<script>
export default {
    name: 'ModifierButtons',
    data() {
        return {
        }
    },
    methods: {
        nextBtnTxt() {
            if(this.$route.name == 'ModifierFourthStep') {
                return 'Enregistrer et mettre en ligne';
            }
            return 'Suivant';
        },
        // togglePrevious() {
        //     if(this.$route.name == 'ModifierFirstStep') {
        //         return false;
        //     }
        //     return true;
        // },
        navigateNext() {
            this.nextBtnTxt = 'Suivant';
            if(this.$route.name == 'ModifierFirstStep') {
                this.$router.push('/modifier-second-step/');
            } else if(this.$route.name == 'ModifierSecondStep') {
                this.$router.push('/modifier-third-step/');
            } else if(this.$route.name == 'ModifierThirdStep') {
                this.$router.push('/modifier-fourth-step/');
            } else {
                this.nextBtnTxt = 'Enregistrer et mettre en ligne';
                this.$router.push('/');
                // handle saving of the form
            }
        },
        navigatePrev() {
            this.nextBtnTxt = 'Suivant';
            if(this.$route.name == 'ModifierFourthStep') {
                this.$router.push('/modifier-third-step/');
            } else if(this.$route.name == 'ModifierThirdStep') {
                this.$router.push('/modifier-second-step/');
            } else if(this.$route.name == 'ModifierSecondStep') {
                this.$router.push('/modifier-first-step/');
            } else {
                this.$router.push('/');
            }
        }
    }
}
</script>