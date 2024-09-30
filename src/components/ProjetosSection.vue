<script setup lang="ts">
import contabilidadeImg from '../assets/images/contabilidade.png';
import jazzschoolImg from '../assets/images/jazzschool.png';
import joalheiriaImg from '../assets/images/joalheiria.png';
import floriculturaImg from '../assets/images/floricultura.png'
import { ref } from 'vue'
import CardProjeto from './CardProjeto.vue';
const tab = ref(null);

const landingPages = [
    {
        image: contabilidadeImg,
        title: 'Landing page para contadores',
        link: 'https://lr-contabilidade.vercel.app'
    },
    {
        image: jazzschoolImg,
        title: 'Landing Page para escola de música',
        link: 'https://danielraoli.github.io/Jazz-School/'
    },
    {
        image: joalheiriaImg,
        title: 'Landing page para joalheiria',
        link: 'https://joalheria-page.vercel.app/'
    },
]

const ecomerces = [
    {
        image: floriculturaImg,
        title: 'E-commerce para floricultura',
        link: 'https://danielraoli.github.io/Flower-Delivery/'
    }
]

</script>

<template>
    <KeepAlive>
        <v-container id="projetos" class="py-16">
            <h3 class="text-center mb-10 text-secondary text-h4 font-weight-black">Conheça alguns dos nossos projetos
            </h3>
            <v-card>
                <v-tabs v-model="tab" align-tabs="center" color="primary">
                    <v-tab :value="1">Landing Page</v-tab>
                    <v-tab :value="2">E-commerce</v-tab>
                    <v-tab :value="3">institucional</v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab">
                    <v-tabs-window-item :value="1">
                        <v-container fluid>
                            <v-row>
                                <CardProjeto v-for="projeto in landingPages" :image="projeto.image" :link="projeto.link"
                                    :title="projeto.title" />
                            </v-row>
                        </v-container>
                    </v-tabs-window-item>
                    <v-tabs-window-item :value="2">
                        <v-container fluid>
                            <v-row>
                                <card-projeto v-for="projeto in ecomerces" :image="projeto.image" :link="projeto.link"
                                    :title="projeto.title" />
                            </v-row>
                        </v-container>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card>
        </v-container>
    </KeepAlive>

</template>