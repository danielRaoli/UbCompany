<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
    image: string,
    title: string,
    description: string

}>()
</script>
<template>
    <v-slide-x-transition>
        <div class="d-flex max-width-400 flex-column  align-center w-100 w-md-25">
            <img loading="lazy" :src="image" width="300" alt="">
            <h4 class="text-primary font-weight-bold text-h5">{{ title }}</h4>
            <p class="text-subtitle-2">{{ description }}</p>
        </div>
    </v-slide-x-transition>

</template>