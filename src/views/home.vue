<script setup lang="ts">
import {ref} from "vue"
import data from "../data/Province.json"
import {useRouter} from "vue-router";

const quizes = ref(data);
const router = useRouter();

const navigateToQuiz = (id:number) => {
    console.log('id ' + id);
    router.push(`/quiz/${id}`);
}

</script>

<template>
  <div class="container">
    <div class="title">
      <h1>Gemeentes Quiz</h1>
    </div>
    <div class="all-cards">
      <div class="test" v-for="quiz in quizes">
        <div class="card" @click="navigateToQuiz(quiz.id)">
            <!--<img :src="quiz.img" alt="">-->
            <div class="card-text">
                <h2>{{quiz.name}}</h2>
            </div>
        </div>
      </div>
      <div class="card">
        <div class="card-text">
            <h2>Instellingen</h2>
        </div>
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
  height: 15rem;
}
.title h1 {
  place-self: center;
  justify-self: center;
  width: 100%;
  font-size: 4rem;
}

.all-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr;
  gap: 2rem;

}

.card {
  width: 200px;
  height: 200px;
  text-align: center;
  border: 2px solid var(--blue);
  border-radius: 2%;
  cursor: pointer;
  background-color: var(--green);
}
.quizes {
  margin: 0rem 0;
  display: flex;
  flex-direction: column;
}
.card .card-text {
  padding: 0 5px;
  color: var(--beige);
  background-color: var(--green);
}
.card h2 {
  font-weight: bold;
  color: var(--white);
  place-self: center;
  justify-self: center;
}


@media (max-width: 700px) {
  .all-cards {
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr;
  }
}

</style>