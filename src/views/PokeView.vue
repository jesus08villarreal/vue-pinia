<script setup>
import {useFavoritosStore} from "@/store/favoritos"
import {useRoute, useRouter} from 'vue-router'
import {useGetData} from '@/composables/getData'


const {getData,data,loading,error} = useGetData()
const route = useRoute()
const router = useRouter()
const useFavoritos = useFavoritosStore()
const back = () => {
    router.push("/pokemons")
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`)

</script>
<template>
    <div class="container card-body" v-if="loading===true">
        <h1 class="text-center">
            Cargando infomracion....
            <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    <div v-if="error">
    <h1>{{ error }}</h1></div>
         </h1>
        </div>
        <div v-else>
        <div v-if="data!=null" class="card text-color">
            <p class="card-title text-center">Nombre de Pokemon: <h1>{{ $route.params.pokename }}</h1></p>
            <img :src="data.sprites?.front_default" alt="/" class="" height="350" width="350">
            <div class="card-body">
                <h4>Especificaciones:</h4>
                <ul class="card-text">
                    <li>Id del Pokemon: {{ data.id }}</li>
                    <li>La experience base del pokemon es: {{ data.base_experience }}</li>
                    <span>Tipo de pokemon:</span>
                    <li v-for="types in data.types">
                        <li>{{ types.type.name }}</li>
                    </li>
                </ul>
                <div class="btn-group gap-3">
                <button @click="back" class="btn btn-primary">Regresar</button>
                <button :disabled="useFavoritos.repetido(data.name)" @click="useFavoritos.add(data)" class="btn btn-primary" >Agregar a favoritos</button>
            </div>
            </div>
        </div>
        <div v-else>
            <div class="card-body container text-center">
            <h1 class="card-title">Ese Pokemon no existe, vuelve a la lista de pokemons</h1>
            <button @click="back" class="btn btn-outline-primary">Regresar</button>
        </div>
        </div>
    </div>

</template>
<style>
.text-color {
    color: black;
}
</style>