<script setup>
import { RouterLink } from 'vue-router';
import {useGetData} from '@/composables/getData'

const {getData,data,loading} = useGetData()

getData("https://pokeapi.co/api/v2/pokemon")
</script>
<template>
    <div class="container">
    <h1 class="text-center">Pokemons</h1>
    <h3 v-if="loading">Cargando informacion</h3>
    <div v-if="data">
    <ul class="list-group">

        <li v-for="pokemon in data.results" class="list-group-item list-group-item-action">
            <RouterLink :to="`/pokemons/${pokemon.name}`">{{ pokemon.name  }}</RouterLink>
            </li>

    </ul>
    <div class="navbar bg-body-tertiary">
    <button  class="btn btn-outline-secondary" @click="getData(data.previous)" :disabled="!data.previous">Pag. Anterior</button>
    <button  class="btn btn-outline-primary" @click="getData(data.next)" :disabled="!data.next">Pag. Siguiente</button>
</div>
</div>
</div>
</template>
