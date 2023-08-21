<script setup lang="ts">
import SvgBase from "./SvgBase.vue"
import SvgTown from "./SvgTown.vue"

const emit = defineEmits(['getTown']);

const getTownById = (event: string) => {
    // change color
    
    emit('getTown', event);
}

</script>
<template>
    <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 3290.0953 2474.4639" version="1.2" id="svg2" inkscape:version="0.91 r13725" sodipodi:docname="Retie Antwerpen Belgium Map.svg" inkscape:label="Provinces/Provincies/Provinzen">
        <SvgBase></SvgBase>
        <SvgTown @getTownById="getTownById($event)"></SvgTown>
    </svg>
    <h1></h1>
</template>

<style>
svg {
    height: 600px;
}
.currentColor {
    color: red;
}

</style>