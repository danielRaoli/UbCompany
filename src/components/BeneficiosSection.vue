<script setup>
import CardBeneficio from './CardBeneficio.vue';


const cards = [
    {
        icon: 'mdi-auto-fix',
        title: 'Design Profissional',
        description: 'Nossos designs únicos e modernos se adequam ao seu estilo e necessidades dando a identidade que seu negócio precisa para se destacar.'
    },
    {
        icon: 'mdi-responsive',
        title: 'Responsivo e Mobile-Friendly',
        description: 'Seu site se adaptará automaticamente a dispositivos móveis, garantindo que seus visitantes tenham a melhor experiência em qualquer lugar.'
    },
    {
        icon: 'mdi-magnify',
        title: 'SEO Integrado',
        description: 'Aumente sua visibilidade nos mecanismos de busca com ferramentas de otimização de SEO incorporadas, ajudando seu site a ser encontrado mais facilmente na internet'
    }
]
</script>

<template>
    <div class="bg-blue-grey-lighten-4 w-100 h-auto pb-10">
        <v-container>
            <header class="w-100 d-flex flex-column text-start text-md-center mb-10">
                <span class="text-h5 text-primary">- Benefícios</span>
                <span class="text-h4 text-secondary font-weight-black">Por que nos escolher?</span>
            </header>
            <div class="d-flex  flex-column flex-md-row  ga-10">
                <CardBeneficio v-for="card in cards" :key="card.icon" :title="card.title" :icon="card.icon"
                    :description="card.description" />
            </div>
        </v-container>
    </div>
</template>