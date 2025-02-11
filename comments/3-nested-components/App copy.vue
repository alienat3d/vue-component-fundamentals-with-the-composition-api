<script setup>
import PlanPicker from './components/PlanPicker.vue'
// * 2.0 Если мы хотим использовать комп. "CoffeePlan" ещё где-то, то нам придётся снова копировать массив с названиями планов, давайте сделаем этот момент чуть более универсальным добавив ещё один комп. для этого "PlanPicker".
// Go to [src\components\PlanPicker.vue]
</script>

<template>
  <div class="content">
    <h1 class="title">Coffee Plans</h1>
    <h2 class="subtitle">
      We travel the world to source the very best single origin coffee for you
    </h2>
    <!-- 2.2 Заменим CoffeePlan на PlanPicker и всё работает как раньше. -->
    <!-- Go to [src\components\PlanPicker.vue] -->
    <PlanPicker />
  </div>
</template>
