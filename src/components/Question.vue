<script setup lang="ts">

import Svg from "../components/Antwerp/Svg.vue"

function checkTown(event: string) {
    console.log(event);

    
}

</script>

<template>
    <div class="container">
        <h1 class="question">Duid Putte aan</h1>
        <Svg @getTown="checkTown($event)"></Svg>
    </div>
    
</template>

<style>
.container {
    max-width: 1000px;
}
</style>