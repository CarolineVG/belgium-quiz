<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Svg from "../components/Antwerp/Svg.vue"

const townName = ref('')

function showTown(event: string) {
    townName.value = event;
    console.log(townName.value) 
}
</script>

<template>
    <div class="container">
        <h1 class="question">Toon gemeentes</h1>
        <h2 class="town">Gemeente: {{ townName }}</h2>
        <Svg @getTown="showTown($event)"></Svg>
    </div>
    
</template>

<style>
.container {
    max-width: 1000px;
}
</style>