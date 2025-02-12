<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CoffeePlan from './CoffeePlan.vue'

const plans = ref(['The Single', 'The Curious', 'The Addict', 'The Hacker'])
const selectedCoffeePlan = ref()
const plansWrapper = ref()
const count = ref(0)

const interval = setInterval(() => count.value++, 1000)

const handleSelectCoffeePlan = (name) => (selectedCoffeePlan.value = name)

onMounted(() => console.log(plansWrapper.value))
onUnmounted(() => clearInterval(interval))
</script>
<template>
  {{ count }}
  <div ref="plansWrapper" class="plans">
    <CoffeePlan
      v-for="plan in plans"
      :key="plan"
      :name="plan"
      :selected="plan === selectedCoffeePlan"
      @click="handleSelectCoffeePlan(plan)"
    ></CoffeePlan>
  </div>
</template>
