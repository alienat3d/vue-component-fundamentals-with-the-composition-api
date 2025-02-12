<script setup>
import { ref } from 'vue'
import CoffeePlan from './CoffeePlan.vue'
// 5.1 И теперь, если убрать у одного значения, передаваемых в проп комп. CoffeePlan "The", то мы получим предупреждение в консоль от функции-валидатора.
// Go to [src\components\CoffeePlan.vue]
const plans = ref(['The Single', 'The Curious', 'The Addict', 'The Hacker'])

const selectedCoffeePlan = ref()

const handleSelectCoffeePlan = (name) => (selectedCoffeePlan.value = name)
</script>

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
