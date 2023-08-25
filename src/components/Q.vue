<script setup lang="ts">
import IProvince from "../interfaces/IProvince"
import { useRoute } from "vue-router";
import { ref, onMounted } from 'vue'
import dataProvince from "../data/Province.json"
// todo: svg from all provinces! 
import Svg from "../components/Antwerp/Svg.vue"
import {useRouter} from "vue-router";


/* ---- get quiz id ---- */
const route = useRoute();
const quizId: number = + route.params.id;

/* ---- vars ---- */
const router = useRouter();
const QUIZLEVELS: Array<string> = ["Makkelijk", "Normaal", "Moeilijk"];
let quizDataProvinces: Array<IProvince> = [];
let questions: Array<string> = [];
let currentQuestion: number = 0;
let showNextQuestion: boolean = false;
let answers: { id: string, answer: string }[] = [];

/* ---- ui vars ---- */
let quizName = ref("");
let quizLevelChoice = ref();
let feedback = ref('?')
let score = ref(0);
let quizState = ref('start');
let totalQuestions = ref(0);


// loaded
onMounted(() => {
    getQuizData();
})

/* ---- methods ---- */
function getQuizData() {
    if (!localStorage.getItem("data")) {
        for (let i = 0; i < dataProvince.length; i++) {
            quizDataProvinces.push(dataProvince[i])
        }
    } else {
        let jsondata = JSON.parse(localStorage.getItem("data") || "[]");
        quizDataProvinces = jsondata;
    }
    quizName.value = quizDataProvinces[quizId].name
}

function startQuiz() {
    totalQuestions.value = 5;
    questions = generateQuestions(quizLevelChoice.value, totalQuestions.value);
    quizState.value = 'ongoing';
    console.log(questions)
}

function levelToNumber(input: string) {
    let levelText: number;
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

function generateQuestions(quizLevel: string, amount: number) {
    console.log('level' + quizLevel);
    let towns = [];
    let selectedLevel = levelToNumber(quizLevel);

    for (let i = 0; i < quizDataProvinces[quizId].towns.length; i++) {
        if (quizDataProvinces[quizId].towns[i].level == selectedLevel) {
            towns.push(quizDataProvinces[quizId].towns[i].name)
        }
    }
    const shuffledTowns = towns.sort(() => 0.5 - Math.random());
    let selectedTowns = shuffledTowns.slice(0, amount);

    return selectedTowns;
}

function checkTown(event: string) {
    if (event.toLowerCase() == questions[currentQuestion].toLowerCase()) {
        feedback.value = 'correct, gemeente is ' + event;
        score.value++;
        let item: { id: string, answer: string } = {
            id: questions[currentQuestion],
            answer: 'correct'
        }
        answers.push(item)
    } else {
        feedback.value = 'incorrect, gemeente is ' + event;
        let item: { id: string, answer: string } = {
            id: questions[currentQuestion],
            answer: 'incorrect'
        }
        answers.push(item)
    }
    // show next question
    showNextQuestion = true;
}

function checkEnd() {
    if (currentQuestion >= questions.length) {
        quizState.value = 'end';
    }
}

function nextQuestion() {
    currentQuestion++;
    feedback.value = '?';
    checkEnd();
    showNextQuestion = false;
}


function navigateToHome() {
    router.push(`/`);
}

</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Quiz: {{ quizName }} ({{ quizLevelChoice }})</h1>
        </div>
        
        <div v-show="quizState=='start'" class="start-screen">
            <div class="level-screen">
                <h3>Kies een level</h3>
                <div class="levels">
                    <div v-for="item in QUIZLEVELS">
                        <div class="level">
                            <input v-model="quizLevelChoice" type="radio" :id="item" :value="item"/>
                            <label for="one" class="level">{{item}}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="buttons">
                <div class="btn"><button v-on:click="startQuiz">start</button></div>
                <div class="btn"><button v-on:click="navigateToHome">terug</button></div>
            </div>
        </div>

        <div v-show="quizState=='ongoing'" class="quiz-screen" >
            <div class="info-screen">
                <h3>Duid {{ questions[currentQuestion] }} aan</h3>
                <h3>{{ feedback }}</h3>
            </div>
            <div class="svg-screen">
                <div v-if="!showNextQuestion" class="svg-clickable">
                    <Svg @getTown="checkTown($event)"></Svg>
                </div>
                <div v-else-if="showNextQuestion" class="svg-non-clickable">
                    <Svg></Svg>
                </div>
            </div>
            <div class="feedback-screen">
                <h3>Score: {{ score }}</h3>
                <h3>Vraag: {{ currentQuestion+1 }}/{{ totalQuestions }}</h3>
                <div v-show="showNextQuestion" class="btn">
                    <button v-on:click="nextQuestion">Volgende</button>
                </div>
            </div>
        </div>


        
        <div v-show="quizState=='end'" class="end-screen">
            <div class="end-screen">
                <h3>Einde</h3>
                <h2>Score: {{ score }}</h2>
                <h3>Level: {{ quizLevelChoice }}</h3>
            </div>
            <div class="buttons">
                <div class="btn"><button v-on:click="navigateToHome">menu</button></div>
            </div>
        </div>

    </div>
</template>

<style>
body {
    height: 100vh;
    background-color: aliceblue;
}

.container {
    padding: 0;
    margin: 0;
    display: grid;
    justify-items: center;
    align-items: center;
    place-items: center;
}

.title {
    display: flex;
    width: 100%;
    text-align: center;
    height: 5rem;
}

.title h1 {
    place-self: center;
    justify-self: center;
    width: 100%;
    font-size: 2rem;
}

.start-screen {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
    height: 300px;
    width: 60%;
    height: 50vh;
    background-color: var(--beige);
}

.level-screen {
    place-self: center;
    text-align: center;
    justify-self: center;
    width: 100%;
}
.level-screen h3 {
    padding: 1rem 0;
}

.levels {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
}

.level {
    height: 7rem;
    width: 7rem;
    background-color: var(--green);
    font-size: 1rem;
}
.level input {
    /*display: none;*/
}

.start-screen .buttons {
    display: grid;
    place-self: center;
    text-align: center;
    justify-self: center;
    width: 100%;
    gap: 1rem;
}

.start-screen .buttons .btn {
    display: grid;
    place-self: center;
    text-align: center;
    justify-self: center;
    width: 100%;
    justify-items: center;
}

.btn button {
    width: 50%;
    height: 2rem;
}

.quiz-screen{
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 80%;
    background-color: var(--beige);
}

.info-screen {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-self: center;
    text-align: center;
    justify-self: center;
    width: 100%;
}
.svg-screen {
    place-self: center;
    text-align: center;
    justify-self: center;
}
.svg-screen svg {
    height: 500px;
}
.feedback-screen {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-self: center;
    text-align: center;
    justify-self: center;
    width: 100%;
}
.end-screen {
    place-self: center;
    text-align: center;
    justify-self: center;
    width: 100%;

}

@media (max-width: 700px) {
    .title h1 {
        font-size: 2rem;
    }
    .start-screen {
        display: grid;
        gap: 2rem;
        height: 300px;
        width: 100%;
    }
    .levels {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
    }
}</style>