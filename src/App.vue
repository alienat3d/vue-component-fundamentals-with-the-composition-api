<script setup>
import IconEmail from './components/icons/IconEmail.vue'
import FancyButton from './components/FancyButton.vue'
</script>
<template>
  <div class="content">
    <FancyButton><strong>S</strong>ubmit</FancyButton>
    <FancyButton><i>Cancel</i></FancyButton>
    <FancyButton><strong>Re-</strong><br />play</FancyButton>
    <FancyButton
      ><template v-slot:icon><IconEmail /></template
      ><template v-slot:default>Email Us</template></FancyButton
    >
    <FancyButton
      ><template #icon="{ hover }"> {{ hover ? '👍' : '📝' }} </template>Subscribe</FancyButton
    >
  </div>
</template>
<style scoped>
svg {
  margin-right: 7px;
  vertical-align: top;
  width: 20px;
  height: 20px;
}
</style>
