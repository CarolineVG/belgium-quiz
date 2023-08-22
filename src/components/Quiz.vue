<script setup lang="ts">
import data from "../data/data.json"
import IQuiz from "../interfaces/IQuiz"

import {useRoute} from "vue-router";
import Svg from "../components/Antwerp/Svg.vue"
import { computed, ref, watch } from "vue"

/* ---- get data ---- */

// get quiz id 
const route = useRoute();
const quizId: number = +route.params.id;
console.log(quizId)

// load quiz
let quiz:IQuiz = {};
for(let i = 0; i < data.length; i++){
    if(data[i].id === quizId){
        quiz = data[i];
    }
}

// generate 5 random towns
const shuffledAllTowns = quiz.towns.sort(() => 0.5 - Math.random());
let selectedTowns = shuffledAllTowns.slice(0, 5);
console.log(selectedTowns);


//const towns = quiz.questions
const towns = selectedTowns;

/* ---- vars ---- */
let feedback = ref('?')
let currentQuestion: number = 0;
let score = ref(0);
let showNextQuestion: boolean = false;
let quizState = ref('start');
let answers: {id: string, answer: string}[] = [];

/* ---- methods ---- */
function startQuiz(){
    quizState.value = 'ongoing';
}

function checkTown(event: string) {
    if(event==towns[currentQuestion]){
        feedback.value = 'correct, gemeente is ' + event;
        score.value++;
        let item: {id: string, answer: string} = {
            id:towns[currentQuestion],
            answer: 'correct'
        }
        answers.push(item)
    } else {
        feedback.value = 'incorrect, gemeente is ' + event;
        let item: {id: string, answer: string} = {
            id:towns[currentQuestion],
            answer: 'incorrect'
        }
        answers.push(item)
    }
    // show next question
    showNextQuestion = true;
}

function checkEnd(){
    if(currentQuestion>=towns.length){
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
</script>

<template>
    <div class="container">
        <h1>Quiz: {{ quiz.name }}</h1>
        <div class="quiz" v-show="quizState=='ongoing'">
            <h2 class="question">Duid {{ towns[currentQuestion] }} aan</h2>
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
                <button type="button" class="btnStart" v-on:click="startQuiz">Start quiz</button>
            </div>
        </div>
        
        <div class="end-overlay" v-show="quizState=='end'">
            <h1>End</h1>
            <h2>Score: {{ score }}</h2>
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