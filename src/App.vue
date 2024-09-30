<script setup lang="ts">
import MainHeader from './components/MainHeader.vue';
import Banner from './components/Banner.vue';
import BeneficiosSection from './components/BeneficiosSection.vue';
import ServicoSection from './components/ServicoSection.vue';
import ProjetosSection from './components/ProjetosSection.vue';
import MainFooter from './components/MainFooter.vue';



</script>


<template>
  <v-app>
    <v-main>
      <MainHeader />
      <Banner />
      <BeneficiosSection />
      <ServicoSection />
      <ProjetosSection />
    </v-main>
    <MainFooter />
  </v-app>
</template>



<style>
* {
  font-family: 'Poppins', sans-serif !important;
}

html {
  scroll-behavior: smooth;
}

.letter-space {
  letter-spacing: 5px;
}

.max-width-400 {
  max-width: 400px;
}
</style>