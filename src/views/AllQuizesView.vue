<script setup lang="ts">
import Quiz from "../components/Quiz.vue"
import Card from "../components/Card.vue"
import {ref} from "vue"
import data from "../data/data.json"
import * as PIXI from "pixijs";

const quizes = ref(data);

</script>

<template>
  <main>
    <H1>HOME</H1>
    <div class="quizes">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"></Card>
    </div>
  </main>
</template>

<style>
.quizes {
  display: flex;
  flex-direction: column;
}
</style>