<script setup>
import { ref } from 'vue'
const links = [
    {
        icon: 'mdi-facebook',
        link: '#'
    },
    {
        icon: 'mdi-whatsapp',
        link: 'https://api.whatsapp.com/send?phone=5574998073272&text='
    },
    {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/bcwebcreators/'
    },
]

const message = ref('')

</script>

<template>
    <v-footer class="d-flex flex-column w-100 pa-4 bg-indigo-darken-4">
        <div class="d-flex flex-column flex-md-row ga-4 pa-md-16  pa-2 align-center justify-space-around w-100 my-10">

            <v-sheet class="d-flex flex-column flex-1 bg-indigo-darken-4" max-width="450px">
                <span class="text-center font-weight-bold text-primary text-h4 mb-10">Entre em contato e coloque os
                    planos
                    emprática</span>



                <v-text-field append-inner-icon="mdi-email-outline" variant="solo" class="mb-2 w-100"
                    label="Olá, boa tarde" clearable v-model="message"></v-text-field>


                <v-btn :href="`https://api.whatsapp.com/send?phone=5574998073272&text=${message}`" color="primary"
                    type="submit" max-width="300" variant="elevated"
                    class="w-auto pa-4 text-secondary font-weight-black" block>

                    Entrar em contato

                </v-btn>

            </v-sheet>

            <div class="d-flex ga-4 ga-md-8 flex-column align-md-center h-100 justify-md-center  flex-1">
                <span class="text-primary text-center">Social</span>
                <div class="d-flex flex-md-column w-100 ga-2 ga-md-8 align-md-center justify-md-center h-auto">
                    <a v-for="link in links" :key="icon" :icon="icon" :href="link.link" class="text-decoration-none"
                        color="primary" target="_blank">
                        <v-icon color="primary">{{ link.icon }}</v-icon>
                    </a>
                </div>




            </div>

            <div class="d-flex ga-md-8 ga-4 flex-column align-md-center h-100 justify-md-center  flex-1">

                <span class="text-primary text-center">Menu</span>
                <div class="d-flex flex-md-column ga-2 ga-md-8 align-md-center">
                    <a href="#servicos" class=" text-primary text-decoration-none">Serviços</a>
                    <a href="#projetos" class=" text-primary text-decoration-none">Projetos</a>
                    <a href="#beneficios" class=" text-primary text-decoration-none">Benefícios</a>
                </div>

            </div>

        </div>
        <div class="d-flex align-center ga-3">
            <img src="../../public/logomarca-bc.png" width="35" alt="ub icon">
            <span class="text-white text-h5">Brothers Company</span>
            <span class="text-grey subtitle-2">Copyright ©{{ new Date().getFullYear() }}</span>
        </div>

    </v-footer>
</template>
