<script setup>

const icons = [
  'mdi-facebook',
  'mdi-whatsapp',
  'mdi-instagram',
]

</script>

<template>
    <v-container id="contato" class="h-auto w-100">
    
        <v-sheet class="bg-secondary pa-6 d-flex flex-column align-center" width="100%" rounded>
    
            <span class="text-center font-weight-black text-primary text-h4 mb-10">Entre em contato e coloque os planos emprática</span>
    
            <v-card class="w-100 bg-transparent" max-width="450" flat>
    
                <v-form v-model="form" @submit.prevent="" class="w-100">
    
                    <v-text-field append-inner-icon="mdi-email-outline" variant="solo" class="mb-2 w-100" label="Email" clearable></v-text-field>
    
    
    
                    <v-text-field append-inner-icon="mdi-account-outline" variant="solo" label="Nome" placeholder="digite seu nome" clearable></v-text-field>
    
    
    
                    <v-text-field append-inner-icon="mdi-account-outline" variant="solo" label="Telefone" placeholder="digite seu melhor numero" clearable></v-text-field>
    
                    <br>
    
    
    
                    <v-btn color="primary" type="submit" max-width="300" variant="elevated" class="w-auto pa-4 text-secondary font-weight-black" block>
    
                        Entrar em contato
    
                    </v-btn>
    
                </v-form>
    
            </v-card>
    
            <span class="text-primary">ou</span>
    
            <div class="d-flex flex-column w-100 align-center px-4">
    
                <strong class="text-primary">Nos siga e entre em contato por nossas redes sociais</strong>
    
    
    
                <div class="d-flex gap-4">
    
                    <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" color="primary" size="small" variant="plain"></v-btn>
    
                </div>
    
    
    
    
    
            </div>
    
        </v-sheet>
    
    </v-container>
</template>