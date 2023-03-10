<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavoritos = useFavoritosStore()

const {favoritos} = storeToRefs(useFavoritos)

</script>
<template>
<h1 class="text-center">Favoritos!</h1>
<div class="container">
<ul class="list-group">
    <li
    class="list-group-item"
    v-for="poke in favoritos"
    :key="poke.id"
    ><span class="text-primary-emphasis" >{{ poke.name }}</span>
      <div class="btn-group ms-3">
        <button class="btn btn-sm btn-outline-danger" @click="useFavoritos.remove(poke.id)">Eliminar favorito!</button>
    <RouterLink class="btn btn-sm btn-outline-info ms-1" :to="`/pokemons/${poke.name}`">Mas informacion</RouterLink>
</div>
</li>

    
</ul>
</div>
</template>
<style> 
</style>