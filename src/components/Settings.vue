<script setup lang="ts">
import ITown from "../interfaces/ITown"
import IProvince from "../interfaces/IProvince"
import { ref, onMounted } from 'vue'
import dataProvince from "../data/Province.json"

/* ---- vars ---- */
let quizData:IProvince = ref({});
let antwerpTowns: Array<ITown> = [];
getQuizData();
let showAntwerpTowns = ref(antwerpTowns); 
    

/* ---- methods ---- */
function getQuizData(){
    if(!localStorage.getItem("data")) {
        quizData = dataProvince;
    } else {
        quizData = JSON.parse(localStorage.getItem("data") || "[]");;
    }
    // todo change from antwerp to all 
    antwerpTowns = quizData[0].towns;
    console.log(antwerpTowns)
}

function editTownLevel(id:number, input:string){
    let level = parseInt(input);
    // todo: quizdata[0] == antwerpen!! 
    for(let y = 0; y < quizData[0].towns.length; y++){
        if(y==id){
            quizData[0].towns[y].level = level;
        }
    }
    addToLocalStorage();
}

function addToLocalStorage() {
    localStorage.setItem("Antwerpen", JSON.stringify(quizData));
}

function levelToText(input:number){
    let levelText:string;
    switch (input) {
        case 0:
            levelText = "Makkelijk";
            break;
        case 1:
            levelText = "Normaal";
            break;
        case 2:
            levelText = "Moeilijk";
            break;
        default:
            levelText = "Makkelijk";
            break;
    }
    return levelText;
}

</script>

<template>
    <div class="container">
      <h1>Antwerpen</h1>
      <form action="">
      <div class="all-towns">
        <div v-for="(town, index) in showAntwerpTowns" class="town-card">
            <div class="item">
                <p>{{ town.name }}</p>
            </div>
            <div class="item">
                <select 
                    @change="editTownLevel(index, town.level)"
                    v-model="town.level" 
                    :id="'t_' + index" 
                    :name="'t_' + index" 
                >
                    <option value="0">{{ levelToText(0) }}</option>
                    <option value="1">{{ levelToText(1) }}</option>
                    <option value="2">{{ levelToText(2) }}</option>
                </select>
            </div>
        </div>
      </div>
    </form>
    </div>
    
</template>

<style>
.container {
    /*max-width: 1000px;*/
}
.all-towns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    gap: 10px;
}
.town-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
    background-color: var(--green);
}
.item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5px;
}
.item input[type=number]{
    width: 30px;
}
.bold {
    font-weight: 700;
}
</style>