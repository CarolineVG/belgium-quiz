<script setup lang="ts">
import Card from "../components/Card.vue"
import {ref} from "vue"
import data from "../data/Province.json"
import ITown from "../interfaces/ITown"

const quizes = ref(data); //todo use json file? 



// todo generate all towns with default data 
console.log(data);
let testTowns:ITown = [];
//createallTowns()

function createallTowns(){
    for(let i = 0; i < data.length; i++){
        if(data[i].id === 4){
            const antwerp = data[i];
            if(antwerp.towns){
                for(let y = 0; y < antwerp.towns.length; y++){
                    const t: ITown = {
                        "id": y,
                        "name": antwerp.towns[y],
                        "province": data[i].name,
                        "level": 0 // 0 -> easy, 1 -> medium, 2 -> hard 
                    }
                    testTowns.push(t);
                }
            }
        }
    }
    
  console.log(testTowns)
}


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
          <!-- send correct quiz with data -->
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