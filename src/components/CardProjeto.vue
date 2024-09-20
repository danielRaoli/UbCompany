<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
    image: string,
    title: string,
    link: string

}>()
</script>

<template>
    <v-col cols="12" md="4">
        <v-card>
            <v-img :lazy-src="image" :src="image" height="205" cover></v-img>

            <v-card-text>
                <div>{{ title }}</div>
            </v-card-text>

            <v-card-actions>
                <v-btn :href="link" target="_blank" color="secondary" text="Acessar"></v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>