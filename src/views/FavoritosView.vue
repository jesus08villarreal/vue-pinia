<script>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';

const useFavoritos = useFavoritosStore()

const {favoritos} = storeToRefs(useFavoritos)

</script>
<template>
<h1 class="text-center">Favoritos!</h1>
<ul>
    <li 
    v-for="poke in favoritos"
    :key="poke.id"
    >{{ poke.name }}</li>
</ul>
</template>
<style> 
</style>