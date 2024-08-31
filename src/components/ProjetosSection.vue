<script setup lang="ts">
import { ref } from 'vue'
const tab = ref(null);

const landingPages = [
    {
        image: '../../src/assets/images/contabilidade.png',
        title: 'Landing page para contadores',
        link: ''
    },
    {
        image: '../../src/assets/images/jazzschool.png',
        title: 'Landing Page para escola de música',
        link: 'https://danielraoli.github.io/Jazz-School/'
    },
    {
        image: '../../src/assets/images/joalheiria.png',
        title: 'Landing page para joalheiria',
        link: 'https://joalheria-page.vercel.app/'
    },
]

const ecomerces = [
    {
        image: '../../src/assets/images/floricultura.png',
        title: 'E-commerce para floricultura',
        link: 'https://danielraoli.github.io/Flower-Delivery/'
    }
]

</script>

<template>
    <v-container>
        <h3 class="text-center mb-10 text-secondary text-h4 font-weight-black">Conheça alguns dos nossos projetos</h3>
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
                            <v-col v-for="pages in landingPages" cols="12" md="4">
                                <v-card>
                                    <v-img :lazy-src="pages.image" :src="pages.image" height="205" cover></v-img>

                                    <v-card-text>
                                        <div>{{ pages.title }}</div>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-btn :href="pages.link" target="_blank" color="secondary"
                                            text="Acessar"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tabs-window-item>
                <v-tabs-window-item :value="2">
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="pages in ecomerces" cols="12" md="4">
                                <v-card>
                                    <v-img :lazy-src="pages.image" :src="pages.image" height="205" cover></v-img>

                                    <v-card-text>
                                        <div>{{ pages.title }}</div>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-btn :href="pages.link" target="_blank" color="secondary"
                                            text="Acessar"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card>
    </v-container>
</template>