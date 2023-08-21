<script setup lang="ts">
import ShowTowns from "../components/ShowTownNames.vue"
</script>

<template>
  <main>
    <ShowTowns></ShowTowns>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
