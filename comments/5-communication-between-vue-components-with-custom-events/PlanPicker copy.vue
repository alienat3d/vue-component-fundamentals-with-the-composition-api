<script setup>
import { ref } from 'vue'
import CoffeePlan from './CoffeePlan.vue'

const plans = ref(['The Single', 'The Curious', 'The Addict', 'The Hacker'])

// 4.10 Также создадим ещё один ref, который будет хранить название выбранного пользователем плана.
const selectedCoffeePlan = ref()

// 4.11 Создадим новую функцию, которая будет записывать в ref selectedCoffeePlan значение, получаемое в payload из кастомного события "selected" из дочернего CoffeePlan.
const handleSelectCoffeePlan = (name) => (selectedCoffeePlan.value = name)
</script>

<!-- * 4.0 Т.к. у нас есть вложенные компоненты, то нам также нужен способ передавать данные между ними. Мы уже рассмотрели передачу данных из родительского комп. в дочерний при помощи пропов. В данном примере используя проп "name" мы кладём каждому компоненту CoffeePlan своё текстовое содержимое. -->
<!-- 4.1 Но как передать данные из дочернего комп. в родительский? Итак, в этом комп. "PlanPicker" нам нужен функционал, чтобы пользователь мог выбрать нужные ему план — после клика на него должен остаться зелёный фон вокруг строчки выбранного плана. -->
<!-- Go to [src\components\CoffeePlan.vue] -->
<!-- 4.9 А теперь в родительском комп. мы сделаем слушатель для этого кастомного события. А также payload будет доступен через специальное ключ. слово "$event", который мы поместим внутрь новой функции handleSelectCoffeePlan(). Кстати @selected="handleSelectCoffeePlan($event)" можно сократит до @selected="handleSelectCoffeePlan", т.к. payload автоматически подставится в функцию её параметром. ↑ -->
<!-- 4.12 Здесь нам осталось лишь передать данные из selectedCoffeePlan о том, что конкретный план выбран дочернему элементу, чтобы ему добавился CSS-класс активности с зелёной подсветкой. И делать мы это будем при помощи пропа "selected", в котором будет выражение сравнивающее название плана с тем значением, что лежит в рефе "selectedCoffeePlan" и при совпадении проп selected этого плана будет возвращать true. -->
<!-- Go to [src\components\CoffeePlan.vue] -->
<template>
  <div class="plans">
    <CoffeePlan
      v-for="plan in plans"
      :key="plan"
      :name="plan"
      :selected="plan === selectedCoffeePlan"
      @selected="handleSelectCoffeePlan"
    ></CoffeePlan>
  </div>
</template>
