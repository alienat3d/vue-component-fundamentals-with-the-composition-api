<script setup>
import { ref } from 'vue'
import PlanPicker from './components/PlanPicker.vue'

const show = ref(true)
</script>

<template>
  <div class="content">
    <h1 class="title">Coffee Plans</h1>
    <h2 class="subtitle">
      We travel the world to source the very best single origin coffee for you
    </h2>
    <!-- 6.6 Ну и для того, чтобы убирать планы со страницы создадим чекбокс, свяжем его при помощи директивы "v-model" с рефом "show". -->
    <label> <input v-model="show" type="checkbox" />Show plan picker </label>
    <!-- 6.7 И мы будем показывать планы, только если реф "show" в значении true. -->
    <!-- Go to [src\components\PlanPicker.vue] -->
    <PlanPicker v-if="show" />
  </div>
</template>
