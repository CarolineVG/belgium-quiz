<script setup lang="ts">
import Alveringen from "./Towns/Alveringen.vue";
import Anzegem from "./Towns/Anzegem.vue";
import Ardooie from "./Towns/Ardooie.vue";
import Avelgem from "./Towns/Avelgem.vue";
import Beernem from "./Towns/Beernem.vue";
import Blankenberge from "./Towns/Blankenberge.vue";
import Bredene from "./Towns/Bredene.vue";
import Brugge from "./Towns/Brugge.vue";
import Damme from "./Towns/Damme.vue";
import Deerlijk from "./Towns/Deerlijk.vue";
import DeHaan from "./Towns/DeHaan.vue";
import Dentergem from "./Towns/Dentergem.vue";
import DePanne from "./Towns/DePanne.vue";
import Diksmuide from "./Towns/Diksmuide.vue";
import Gistel from "./Towns/Gistel.vue";
import Harelbeke from "./Towns/Harelbeke.vue";
import Heuvelland from "./Towns/Heuvelland.vue";
import Hooglede from "./Towns/Hooglede.vue";
import Houthulst from "./Towns/Houthulst.vue";
import Ichtegem from "./Towns/Ichtegem.vue";
import Ieper from "./Towns/Ieper.vue";
import Ingelmunster from "./Towns/Ingelmunster.vue";
import Izegem from "./Towns/Izegem.vue";
import Jabbeke from "./Towns/Jabbeke.vue";
import KnokkeHeist from "./Towns/KnokkeHeist.vue";
import Koksijde from "./Towns/Koksijde.vue";
import Koekelare from "./Towns/Koekelare.vue";
import Kortemark from "./Towns/Kortemark.vue";
import Kortrijk from "./Towns/Kortrijk.vue";
import Kuurne from "./Towns/Kuurne.vue";
import LangemarkPoelkapelle from "./Towns/LangemarkPoelkapelle.vue";
import Ledegem from "./Towns/Ledegem.vue";
import Lendelede from "./Towns/Lendelede.vue";
import Lichtervelde from "./Towns/Lichtervelde.vue";
import LoReninge from "./Towns/LoReninge.vue";
import Menen from "./Towns/Menen.vue";
import Mesen from "./Towns/Mesen.vue";
import Meulebeke from "./Towns/Meulebeke.vue";
import Middelkerke from "./Towns/Middelkerke.vue";
import Moorslede from "./Towns/Moorslede.vue";
import Nieuwpoort from "./Towns/Nieuwpoort.vue";
import Oostende from "./Towns/Oostende.vue";
import Oostrozebeke from "./Towns/Oostrozebeke.vue";
import Oostkamp from "./Towns/Oostkamp.vue";
import Oudenburg from "./Towns/Oudenburg.vue";
import Pittem from "./Towns/Pittem.vue";
import Poperinge from "./Towns/Poperinge.vue";
import Roeselare from "./Towns/Roeselare.vue";
import Ruiselede from "./Towns/Ruiselede.vue";
import SpiereHelkijn from "./Towns/SpiereHelkijn.vue";
import Staden from "./Towns/Staden.vue";
import Tielt from "./Towns/Tielt.vue";
import Torhout from "./Towns/Torhout.vue";
import Veurne from "./Towns/Veurne.vue";
import Vleteren from "./Towns/Vleteren.vue";
import Waregem from "./Towns/Waregem.vue";
import Wervik from "./Towns/Wervik.vue";
import Wevelgem from "./Towns/Wevelgem.vue";
import Wielsbeke from "./Towns/Wielsbeke.vue";
import Wingene from "./Towns/Wingene.vue";
import Zedelgem from "./Towns/Zedelgem.vue";
import Zonnebeke from "./Towns/Zonnebeke.vue";
import Zuienkerke from "./Towns/Zuienkerke.vue";
import Zwevegem from "./Towns/Zwevegem.vue";

const emit = defineEmits(['getTownById']);

function onTown(event: Event){
    console.log("on town west vlaanderen");
    if (event.target instanceof Element) {
        const id = event.target.id
        console.log(id)

        // make everything yellow again
        let allTowns = <HTMLCollection>document.getElementById("Communes/Gemeente/Gemeinden")?.children;
        if(allTowns){
            for(let y = 0; y < allTowns.length; y++){
                let t = <HTMLElement>allTowns[y];
                t.style.color = "yellow"; 
            }
        }
        
        // highlight current town
        let currentTown = <HTMLElement>document.getElementById(id)
        currentTown.style.color = "blue"
        emit('getTownById', id)
    }
}

</script>
<template>
    <g
    id="Communes/Gemeente/Gemeinden"
    inkscape:label="Communes/Gemeente/Gemeinden"
    inkscape:groupmode="layer"
    style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:4;stroke-linecap:square;stroke-linejoin:bevel"
    transform="translate(-630.06485,-28.255199)">
    <Alveringen @click="onTown($event)"/>
    <Anzegem @click="onTown($event)"/>
    <Ardooie @click="onTown($event)"/>
    <Avelgem @click="onTown($event)"/>
    <Beernem @click="onTown($event)"/>
    <Blankenberge @click="onTown($event)"/>
    <Bredene @click="onTown($event)"/>
    <Brugge @click="onTown($event)"/>
    <Damme @click="onTown($event)"/>
    <Deerlijk  @click="onTown($event)"/>
    <DeHaan @click="onTown($event)"/>
    <Dentergem @click="onTown($event)"/>
    <DePanne @click="onTown($event)"/>
    <Diksmuide @click="onTown($event)"/>
    <Gistel @click="onTown($event)"/>
    <Harelbeke @click="onTown($event)"/>
    <Heuvelland @click="onTown($event)"/>
    <Hooglede @click="onTown($event)"/>
    <Houthulst @click="onTown($event)"/>
    <Ichtegem @click="onTown($event)"/>
    <Ieper @click="onTown($event)"/>
    <Ingelmunster @click="onTown($event)"/>
    <Izegem @click="onTown($event)"/>
    <Jabbeke @click="onTown($event)"/>
    <KnokkeHeist @click="onTown($event)"/>
    <Koksijde @click="onTown($event)"/>
    <Koekelare @click="onTown($event)"/>
    <Kortemark @click="onTown($event)"/>
    <Kortrijk @click="onTown($event)"/>
    <Kuurne @click="onTown($event)"/>
    <LangemarkPoelkapelle @click="onTown($event)"/>
    <Ledegem @click="onTown($event)"/>
    <Lendelede @click="onTown($event)"/>
    <Lichtervelde @click="onTown($event)"/>
    <LoReninge @click="onTown($event)"/>
    <Menen @click="onTown($event)"/>
    <Mesen @click="onTown($event)"/>
    <Meulebeke @click="onTown($event)"/>
    <Middelkerke @click="onTown($event)"/>
    <Moorslede @click="onTown($event)"/>
    <Nieuwpoort @click="onTown($event)"/>
    <Oostende @click="onTown($event)"/>
    <Oostrozebeke @click="onTown($event)"/>
    <Oostkamp @click="onTown($event)"/>
    <Oudenburg @click="onTown($event)"/>
    <Pittem @click="onTown($event)"/>
    <Poperinge @click="onTown($event)"/>
    <Roeselare @click="onTown($event)"/>
    <Ruiselede @click="onTown($event)"/>
    <SpiereHelkijn @click="onTown($event)"/>
    <Staden @click="onTown($event)"/>
    <Tielt @click="onTown($event)"/>
    <Torhout @click="onTown($event)"/>
    <Veurne @click="onTown($event)"/>
    <Vleteren @click="onTown($event)"/>
    <Waregem @click="onTown($event)"/>
    <Wervik @click="onTown($event)"/>
    <Wevelgem @click="onTown($event)"/>
    <Wielsbeke @click="onTown($event)"/>
    <Wingene @click="onTown($event)"/>
    <Zedelgem @click="onTown($event)"/>
    <Zonnebeke @click="onTown($event)"/>
    <Zuienkerke @click="onTown($event)"/>
    <Zwevegem @click="onTown($event)"/>
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
    color: red;
    cursor: pointer;
}
</style>