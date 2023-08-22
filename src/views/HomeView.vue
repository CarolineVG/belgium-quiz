<script setup lang="ts">
import Card from "../components/Card.vue"
import {ref} from "vue"
import data from "../data/data.json"

const quizes = ref(data);

</script>

<template>
  <main>
    <!--<div class="bg-container">
      <div class="screen">
        <div class="background"></div>
      </div>
    </div>-->
    <div class="main-container">
      <H1>Gemeentes Quiz</H1>
      <div class="test">
        <div class="quizes">
          <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"></Card>
        </div>
      </div>
    </div>
    
    
  </main>
</template>

<style>
/*
.background {
  height: 100vh;
  background-image: url("../assets/pixijs/city2/4.png"), url("../assets/pixijs/city2/3.png"), url("../assets/pixijs/city2/2.png"), url("../assets/pixijs/city2/1.png");
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
  background-size: cover; 
  animation-name: anim-background;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}
@keyframes anim-background {
  from {background-position: 50px 0px; scale: 1.2;}
  to {background-position: -50px 0px; scale: 1.2;}
}
*/
body {
  height: 100vh;
  background-image: url("../assets/pixijs/city2/4.png"), url("../assets/pixijs/city2/3.png"), url("../assets/pixijs/city2/2.png"), url("../assets/pixijs/city2/1.png");
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
  background-size: cover; 
  animation-name: anim-background;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}
h1 {
  font-weight: 600;
}
.quizes {
  margin: 0rem 0;
  display: flex;
  flex-direction: column;
}
@media (min-width: 500px) {
  .quizes {
    margin: 3rem 0;
    display: flex;
    flex-direction: row;
  }
}
@keyframes anim-background {
  
}
</style>