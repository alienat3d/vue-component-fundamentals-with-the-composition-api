<script setup>
import CoffeePlan from './components/CoffeePlan.vue'
import { ref } from 'vue'
const plans = ref(['The Single', 'The Curious', 'The Addict', 'The Hacker'])
</script>

<template>
  <div class="content">
    <h1 class="title">Coffee Plans</h1>
    <h2 class="subtitle">
      We travel the world to source the very best single origin coffee for you
    </h2>
    <div class="plans">
      <!-- * 1.0 Итак, начнём с пропсов. Они нам нужны, чтобы динамически передавать какие-то данные в компоненты из родительских компонентов, тем самым создавая уникальный контент для однотипных компонентов. Мы просто укажем названия пропа атрибутом компонента (по аналогии с HTML тегами), куда запишем уникальное значение. -->
      <!-- Go to [src\components\CoffeePlan.vue] -->
      <!-- <CoffeePlan name="The Hacker"></CoffeePlan> -->
      <!-- 1.5 Но мы можем сократить 4 строчки в тэмплэйте до 1-ой, если добавим названия для CoffeePlan в отдельный массив и потом используем его в "v-for" цикле. -->
      <CoffeePlan v-for="plan in plans" :key="plan" :name="true"></CoffeePlan>
    </div>
  </div>
</template>
