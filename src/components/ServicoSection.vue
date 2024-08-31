<script setup>
import institucionalImg from  '../assets/images/institucional-icon.jpg';
import landingImg from'../assets/images/landingpage-icon.jpg';
import ecomerceImg from  '../assets/images/e-commer-icon.jpg';
import blogImg from '../assets/images/blog-icon.jpg';
import botImg from '../assets/images/bot-icon.jpg';

const services = [
    {
        image:institucionalImg,
        title: 'Sites Institucionais',
        description: 'Os sites institucionais são projetados para representar uma organização, empresa ou instituição na internet.  Eles geralmente incluem informações sobre a história da empresa, missão, visão, valores, serviços ou        produtos.'
    },
    {
        image: landingImg,
        title: 'Landing Page',
        description: 'Landing pages são páginas da web projetadas especificamente para uma única finalidade, geralmente para promover um produto, serviço ou campanha. Elas são focadas em conversões'
    },    {
        image: ecomerceImg,
        title: 'E-commerce',
        description: 'Nossos designs únicos e modernos se adequam ao seu estilo e necessidades dando a identidade que seu negócio precisa para se destacar.'
    },
    {
        image: blogImg,
        title: 'Blogs',
        description: 'Os blogs são sites usados para compartilhar informações, artigos, opiniões ou atualizações regulares. São frequentemente usados para compartilhar conhecimento e se conectar com seu público-alvo.'
    },
    {
    image: botImg,
    title: 'Criação de Bots para Atendimento',
    description: 'Desenvolvemos bots personalizados para atendimento ao cliente, automatizando interações e melhorando a eficiência do suporte. Ideal para empresas que buscam oferecer respostas rápidas e atendimento 24/7.'
}


]

</script>

<template>
    <div class="w-100 h-auto text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#000b76" fill-opacity="1"
                d="M0,160L80,144C160,128,320,96,480,117.3C640,139,800,213,960,208C1120,203,1280,117,1360,74.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
            </path>
        </svg>
        <span class="text-h3 text-secondary  font-weight-black mt-n12">Serviços Populares</span>
        <div
            class="pa-5 w-100 h-auto d-flex flex-column align-center flex-md-row ga-5 align-md-end justify-md-center flex-md-wrap ma-md-auto">
            <div v-for="service in services" class="d-flex max-width-400 flex-column text-center align-center w-100 w-md-25">
                <img loading="lazy" :src="service.image" width="300" alt="">
                <h4 class="text-primary font-weight-medium text-h4">{{ service.title }}</h4>
                <p>{{ service.description }}</p>
            </div>
        </div>
    </div>
</template>