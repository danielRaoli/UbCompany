<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
    icon: string,
    title: string,
    description: string

}>()
</script>

<template>
    <v-card class="mx-auto d-flex flex-column align-center pa-10 ga-4 w-100 w-md-33" max-width="400" hover>
        <v-icon :icon="icon" class=" text-secondary text-h3 text-center"></v-icon>

        <span class="text-primary text-h6">{{ title }}</span>

        <v-card-text class="text-center">
            {{ description }}
        </v-card-text>
    </v-card>
</template>