<script setup lang="ts">
import { ref } from 'vue'
import Svg from "../components/Antwerp/Svg.vue"

let townName = ref("test");
/*townName = "test";*/

function showTown(event: string) {
    console.log(event);
}



</script>

<template>
    <div class="container">
        <h1 class="question">Toon gemeentes</h1>
        <h2 class="town" ref="townName"></h2>
        <Svg @getTown="showTown($event)"></Svg>
    </div>
    
</template>

<style>
.container {
    max-width: 1000px;
}
</style>