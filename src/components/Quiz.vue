<script setup lang="ts">
import IProvince from "../interfaces/IProvince"
import {useRoute} from "vue-router";
import { ref, onMounted } from 'vue'
import dataProvince from "../data/Province.json"
// todo: svg from all provinces! 
import Svg from "../components/Antwerp/Svg.vue"

/* ---- get quiz id ---- */
const route = useRoute();
const quizId: number = + route.params.id;

/* ---- vars ---- */
const QUIZLEVELS:Array<string> = ["Makkelijk", "Normaal", "Moeilijk"];
let quizDataProvinces:Array<IProvince> = [];
let questions:Array<string> = [];
let currentQuestion:number = 0;
let showNextQuestion:boolean = false;
let answers: {id: string, answer: string}[] = [];

/* ---- ui vars ---- */
let quizName = ref("");
let quizLevelChoice = ref();
let feedback = ref('?')
let score = ref(0);
let quizState = ref('start');


// loaded
onMounted(() => {
  getQuizData();
})

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

function startQuiz(){
    questions = generateQuestions(quizLevelChoice.value, 5);
    quizState.value = 'ongoing';
    console.log(questions)
}

function levelToNumber(input:string){
    let levelText:number;
    switch (input) {
        case "Makkelijk":
            levelText = 0;
            break;
        case "Normaal":
            levelText = 1;
            break;
        case "Moeilijk":
            levelText = 2;
            break;
        default:
            levelText = 0
            break;
    }
    return levelText;
}

function generateQuestions(quizLevel:string, amount:number){
    console.log('level' + quizLevel);
    let towns = [];
    let selectedLevel = levelToNumber(quizLevel);

    for(let i = 0; i < quizDataProvinces[quizId].towns.length; i++){
        if(quizDataProvinces[quizId].towns[i].level == selectedLevel){
            towns.push(quizDataProvinces[quizId].towns[i].name)
        }
    }
    const shuffledTowns = towns.sort(() => 0.5 - Math.random());
    let selectedTowns = shuffledTowns.slice(0, amount);

    return selectedTowns;
}

function checkTown(event: string) {
    if(event.toLowerCase()==questions[currentQuestion].toLowerCase()){
        feedback.value = 'correct, gemeente is ' + event;
        score.value++;
        let item: {id: string, answer: string} = {
            id:questions[currentQuestion],
            answer: 'correct'
        }
        answers.push(item)
    } else {
        feedback.value = 'incorrect, gemeente is ' + event;
        let item: {id: string, answer: string} = {
            id:questions[currentQuestion],
            answer: 'incorrect'
        }
        answers.push(item)
    }
    // show next question
    showNextQuestion = true;
}

function checkEnd(){
    if(currentQuestion>=questions.length){
        quizState.value = 'end';
    }
}

function nextQuestion(){
    currentQuestion++;
    feedback.value = '?';
    checkEnd(); 
    showNextQuestion = false;
}

</script>

<template>
    <div class="container">
        <h1>Quiz: {{ quizName }} ({{ quizLevelChoice }})</h1>
        <div class="quiz" v-show="quizState=='ongoing'">
            <h2 class="question">Duid {{ questions[currentQuestion] }} aan</h2>
            <p>{{ feedback }}</p>
            <p>Score: {{ score }}</p>
            <div v-if="!showNextQuestion" class="svg-clickable">
                <Svg @getTown="checkTown($event)"></Svg>
            </div>
            <div v-else-if="showNextQuestion" class="svg-non-clickable">
                <Svg></Svg>
            </div>
        </div>

        <div class="next-overlay" v-show="showNextQuestion">
            <button type="button" class="btnNext" v-on:click="nextQuestion">Volgende</button>
        </div>

        <div class="start-overlay" v-show="quizState=='start'">
            <div class="start-ui">
                <h1>Level:</h1>
                <div v-for="item in QUIZLEVELS">
                    <input v-model="quizLevelChoice" type="radio" :id="item" :value="item"/>
                    <label for="one">{{item}}</label>
                </div>

                <p>Totaal aantal gemeentes: todo </p>

                <button type="button" class="btnStart" v-on:click="startQuiz">Start quiz</button>
                <h1>{{ quizLevelChoice }}</h1>
            </div>
        </div>
        
        <div class="end-overlay" v-show="quizState=='end'">
            <h1>End</h1>
            <h2>Score: {{ score }}</h2>
            <h3>Level: {{ quizLevelChoice }}</h3>
            <ul>
                <li v-for="item in answers">{{ item.id }}: {{ item.answer  }}</li>
            </ul>
        </div>
    </div>
</template>

<style>
.container {
    max-width: 1000px;
}
.start-overlay{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    padding: 0 auto;
}
.start-ui{
    margin: 1rem;
    width: 500px;
    height: 500px;
    background-color: var(--beige);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2%;
}


button {
  background-color: var(--green);
  border: none;
  color: white;
  padding: 1em 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.4em;
  cursor: pointer;
}
button:hover {
  opacity: 90%;
}
</style>