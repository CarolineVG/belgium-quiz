<script setup lang="ts">
import Aartselaar from "./Towns/Aartselaar.vue";
import Antwerpen from "./Towns/Antwerpen.vue";
import Arendonk from "./Towns/Arendonk.vue";
import BaarleHertog from "./Towns/BaarleHertog.vue";
import Balen from "./Towns/Balen.vue";
import Beerse from "./Towns/Beerse.vue";
import Berlaar from "./Towns/Berlaar.vue";
import Boechout from "./Towns/Boechout.vue";
import Bonheiden from "./Towns/Bonheiden.vue";
import Boom from "./Towns/Boom.vue";
import Bornem from "./Towns/Bornem.vue";
import Borsbeek from "./Towns/Borsbeek.vue";
import Brasschaat from "./Towns/Brasschaat.vue";
import Brecht from "./Towns/Brecht.vue";
import Dessel from "./Towns/Dessel.vue";
import Duffel from "./Towns/Duffel.vue";
import Edegem from "./Towns/Edegem.vue";
import Essen from "./Towns/Essen.vue";
import Geel from "./Towns/Geel.vue";
import Grobbendonk from "./Towns/Grobbendonk.vue";
import HeistOpDenBerg from "./Towns/HeistOpDenBerg.vue";
import Hemiksem from "./Towns/Hemiksem.vue";
import Herentals from "./Towns/Herentals.vue";
import Herenthout from "./Towns/Herenthout.vue";
import Herselt from "./Towns/Herselt.vue";
import Hoogstraten from "./Towns/Hoogstraten.vue";
import Hove from "./Towns/Hove.vue";
import Hulshout from "./Towns/Hulshout.vue";
import Kalmthout from "./Towns/Kalmthout.vue";
import Kapellen from "./Towns/Kapellen.vue";
import Kasterlee from "./Towns/Kasterlee.vue";
import Kontich from "./Towns/Kontich.vue";
import Laakdal from "./Towns/Laakdal.vue";
import Lier from "./Towns/Lier.vue";
import Lille from "./Towns/Lille.vue";
import Lint from "./Towns/Lint.vue";
import Malle from "./Towns/Malle.vue";
import Mechelen from "./Towns/Mechelen.vue";
import Meerhout from "./Towns/Meerhout.vue";
import Merksplas from "./Towns/Merksplas.vue";
import Mol from "./Towns/Mol.vue";
import Mortsel from "./Towns/Mortsel.vue";
import Niel from "./Towns/Niel.vue";
import Nijlen from "./Towns/Nijlen.vue";
import Olen from "./Towns/Olen.vue";
import OudTurnhout from "./Towns/OudTurnhout.vue";
import Putte from "./Towns/Putte.vue";
import PuursSintAmands from "./Towns/PuursSintAmands.vue";
import Ranst from "./Towns/Ranst.vue";
import Ravels from "./Towns/Ravels.vue";
import Retie from "./Towns/Retie.vue";
import Rijkevorsel from "./Towns/Rijkevorsel.vue";
import Rumst from "./Towns/Rumst.vue";
import Schelle from "./Towns/Schelle.vue";
import Schilde from "./Towns/Schilde.vue";
import Schoten from "./Towns/Schoten.vue";
import SintKatelijneWaver from "./Towns/SintKatelijneWaver.vue";
import Stabroek from "./Towns/Stabroek.vue";
import Turnhout from "./Towns/Turnhout.vue";
import Vorselaar from "./Towns/Vorselaar.vue";
import Vosselaar from "./Towns/Vosselaar.vue";
import Westerlo from "./Towns/Westerlo.vue";
import Wijnegem from "./Towns/Wijnegem.vue";
import Willebroek from "./Towns/Willebroek.vue";
import Wommelgem from "./Towns/Wommelgem.vue";
import Wuustwezel from "./Towns/Wuustwezel.vue";
import Zandhoven from "./Towns/Zandhoven.vue";
import Zoersel from "./Towns/Zoersel.vue";
import Zwijndrecht from "./Towns/Zwijndrecht.vue";

const emit = defineEmits(['getTownById']);

function onTown(event: Event){
    if (event.target instanceof Element) {
        const id = event.target.id;
        emit('getTownById', id)
    }
}

</script>
<template>
    <g id="Communes/Gemeente/Gemeinden" inkscape:label="Communes/Gemeente/Gemeinden" inkscape:groupmode="layer" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:4;stroke-linecap:square;stroke-linejoin:bevel" sodipodi:insensitive="true" transform="translate(-108.61957,-2.4548429)">
        <Aartselaar @click="onTown"/>
        <Antwerpen @click="onTown"/>
        <Arendonk @click="onTown($event)"/>
        <BaarleHertog @click="onTown($event)"/>
        <Balen @click="onTown($event)"/>
        <Beerse @click="onTown($event)"/>
        <Berlaar @click="onTown($event)"/>
        <Boechout @click="onTown($event)"/>
        <Bonheiden @click="onTown($event)"/>
        <Boom @click="onTown($event)"/>
        <Borsbeek @click="onTown($event)"/>
        <Bornem @click="onTown($event)"/>
        <Brasschaat @click="onTown($event)"/>
        <Brecht @click="onTown($event)"/>
        <Dessel @click="onTown($event)"/>
        <Duffel @click="onTown($event)"/>
        <Edegem @click="onTown($event)"/>
        <Essen @click="onTown($event)"/>
        <Geel @click="onTown($event)"/>
        <Grobbendonk @click="onTown($event)"/>
        <HeistOpDenBerg @click="onTown($event)"/>
        <Hemiksem @click="onTown($event)"/>
        <Herentals @click="onTown($event)"/>
        <Herenthout @click="onTown($event)"/>
        <Herselt @click="onTown($event)"/>
        <Hoogstraten @click="onTown($event)"/>
        <Hove @click="onTown($event)"/>
        <Hulshout @click="onTown($event)"/>
        <Kalmthout @click="onTown($event)"/>
        <Kasterlee @click="onTown($event)"/>
        <Kapellen @click="onTown($event)"/>
        <Kontich @click="onTown($event)"/>
        <Laakdal @click="onTown($event)"/>
        <Lier @click="onTown($event)"/>
        <Lille @click="onTown($event)"/>
        <Lint @click="onTown($event)"/>
        <Malle @click="onTown($event)"/>
        <Meerhout @click="onTown($event)"/>
        <Mechelen @click="onTown($event)"/>
        <Merksplas @click="onTown($event)"/>
        <Mol @click="onTown($event)"/>
        <Mortsel @click="onTown($event)"/>
        <Niel @click="onTown($event)"/>
        <Nijlen @click="onTown($event)"/>
        <Olen @click="onTown($event)"/>
        <OudTurnhout @click="onTown($event)"/>
        <Putte @click="onTown($event)"/>
        <PuursSintAmands @click="onTown($event)"/>
        <Ranst @click="onTown($event)"/>
        <Ravels @click="onTown($event)"/>
        <Retie @click="onTown($event)"/>
        <Rijkevorsel @click="onTown($event)"/>
        <Rumst @click="onTown($event)"/>
        <Schelle @click="onTown($event)"/>
        <Schilde @click="onTown($event)"/>
        <Schoten @click="onTown($event)"/>
        <SintKatelijneWaver @click="onTown($event)"/>
        <Stabroek @click="onTown($event)"/>
        <Turnhout @click="onTown($event)"/>
        <Vorselaar @click="onTown($event)"/>
        <Vosselaar @click="onTown($event)"/>
        <Westerlo @click="onTown($event)"/>
        <Wijnegem @click="onTown($event)"/>
        <Willebroek click="onTown($event)"/>
        <Wommelgem @click="onTown($event)"/>
        <Wuustwezel @click="onTown($event)"/>
        <Zandhoven @click="onTown($event)"/>
        <Zoersel @click="onTown($event)"/>
        <Zwijndrecht @click="onTown($event)"/>
    </g>
</template>

<style scoped>
.town {
    font-style:normal;
    font-weight:400;
    font-size:medium;
    font-family:'MS Shell Dlg 2';
    fill-rule:evenodd;
    stroke-linecap:square;
    stroke-linejoin:bevel;
    stroke-miterlimit:4;
    stroke-dasharray:none;
    stroke-opacity:1;
    fill-opacity:1;
    color: yellow;
}
.town:hover {
    opacity: 50%;
    cursor: pointer;
}
</style>