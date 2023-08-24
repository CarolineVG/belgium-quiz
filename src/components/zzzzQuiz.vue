<script setup lang="ts">
import IQuiz from "../interfaces/IQuiz"
import ITown from "../interfaces/IQuiz"
import {useRoute} from "vue-router";
import Svg from "../components/Antwerp/Svg.vue"
import { ref } from "vue"

/* ---- get quiz id ---- */
let quiz:IQuiz = {};
const route = useRoute();
const quizId: number = + route.params.id;
if(quizId === 0){ 
    quiz.name = "Antwerpen";
}

/* ---- game vars ---- */
const quizLevels:Array<string> = ["Makkelijk", "Normaal", "Moeilijk"];
let allTowns:Array<ITown> = [];
let questions:Array<string> = [];
let quizLevel:string = "";
let currentQuestion:number = 0;
let showNextQuestion:boolean = false;
let answers: {id: string, answer: string}[] = [];

/* ---- ui vars ---- */
let quizLevelChoice = ref();
let feedback = ref('?')
let score = ref(0);
let quizState = ref('start');

/* ---- methods ---- */
function startQuiz(){
    loadQuiz();
    quizState.value = 'ongoing';
}

function loadQuiz(){
    if(quizId === 0){ 
        // ANTWERPEN 
        if(!localStorage.getItem("Antwerpen")) {
            // no data in local storage yet
            allTowns = [];
            createallTowns();
        } else {
            // get data from local storage
            let localData = JSON.parse(localStorage.getItem("Antwerpen") || "[]");
            allTowns = localData;
        }
    }
    quizLevel = quizLevelChoice.value
    questions = generateQuestions(quizLevel, 5); // amount of questions
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

    for(let i = 0; i < allTowns.length; i++){
        if(allTowns[i].level == selectedLevel){
            towns.push(allTowns[i].name)
        }
    }
    const shuffledTowns = towns.sort(() => 0.5 - Math.random());
    let selectedTowns = shuffledTowns.slice(0, amount);

    return selectedTowns;
}

function filterTownsByLevel(){

}

function checkTown(event: string) {
    if(event==questions[currentQuestion]){
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
        console.log("end");
        // show end screen
    }
}

function nextQuestion(){
    currentQuestion++;
    feedback.value = '?';
    checkEnd(); 
    showNextQuestion = false;
}

function editTownLevel(input:string){
    quizLevel = input; 
}



</script>

<template>
    <div class="container">
        <h1>Quiz: {{ quiz.name }} ({{ quizLevelChoice }})</h1>
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
                <div v-for="item in quizLevels">
                    <input v-model="quizLevelChoice" type="radio" :id="item" :value="item"/>
                    <label for="one">{{item}}</label>
                </div>

                <p>Totaal aantal gemeentes: {{allTowns.length}} </p>

                <button type="button" class="btnStart" v-on:click="startQuiz">Start quiz</button>
                <h1>{{ quizLevelChoice }}</h1>
            </div>
        </div>
        
        <div class="end-overlay" v-show="quizState=='end'">
            <h1>End</h1>
            <h2>Score: {{ score }}</h2>
            <h3>Level: {{ quizLevel }}</h3>
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