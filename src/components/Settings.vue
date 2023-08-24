<script setup lang="ts">
import IProvince from "../interfaces/IProvince"
import { ref, onMounted } from 'vue'
import dataProvince from "../data/Province.json"

/* ---- vars ---- */
let quizDataProvinces:Array<IProvince> = [];
let province = ref(0);
getQuizData();

/* ---- methods ---- */
function getQuizData(){
    if(!localStorage.getItem("data")) {
        for(let i = 0; i < dataProvince.length; i++){
            quizDataProvinces.push(dataProvince[i])
        }
    } else {
        let jsondata = JSON.parse(localStorage.getItem("data") || "[]");
        quizDataProvinces = jsondata;
    }
}

function editTownLevel(id:number, input:number){
    let level = input;
    for(let y = 0; y < quizDataProvinces[province.value].towns.length; y++){
        if(y==id){
            quizDataProvinces[province.value].towns[y].level = level;
        }
    }
    addToLocalStorage();
}

function addToLocalStorage() {
    console.log(quizDataProvinces);
    localStorage.setItem("data", JSON.stringify(quizDataProvinces));
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
    <div class="settings-dropdown">
        <select 
            @change="getQuizData()"
            v-model="province"
        >
            <option value=0>Antwerpen</option>
            <option value=1>West-Vlaanderen</option>
            <option value=2>Oost-Vlaanderen</option>
            <option value=3>Limburg</option>
            <option value=4>Vlaams-Brabant</option>
        </select>
    </div>

    <div class="settings-province" >
        <h1>{{ quizDataProvinces[province].name }}</h1>
        <div class="all-towns">
            <div v-for="(town, index) in quizDataProvinces[province].towns" class="town-card">
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
    </div>
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