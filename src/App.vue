<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav class="navbar bg-body-tertiary">
<div class="container">
<a class="navbar-brand" href="/">
  <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
 Pokedex!
</a>
<RouterLink to="/" class="btn btn-outline-primary">Home</RouterLink>
<RouterLink to="/pokemons" class="btn btn-outline-primary">Pokemons</RouterLink>
<RouterLink to="/favoritos" class="btn btn-outline-primary">Poke Favs</RouterLink>
</div>
</nav>
    
      </header>

  <RouterView />
</template>

<style scoped>

</style>
