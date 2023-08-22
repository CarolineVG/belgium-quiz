<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
const {quiz} = defineProps(['quiz']);

const navigateToQuiz = () => {
    router.push(`/quiz/${quiz.id}`);
}
</script>

<template>
<div class="card" @click="navigateToQuiz">
    <img :src="quiz.img" alt="">
    <div class="card-text">
        <h2>{{quiz.name}}</h2>
        <p>{{quiz.questions.length}} vragen</p>
    </div>
</div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 200px;
    min-width: 200px;
    overflow: hidden;
    border: 2px solid var(--blue);
    border-radius: 2%;
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
    background-color: var(--green);
  }
  .card img {
    width: 100%;
    margin: 0;
  }
  .card .card-text {
    padding: 0 5px;
    color: var(--beige);
    background-color: var(--green);
  }
  .card h2 {
    font-weight: bold;
    color: var(--white);
  }
</style>