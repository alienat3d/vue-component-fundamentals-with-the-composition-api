<script setup>
import IconEmail from './components/icons/IconEmail.vue'
import FancyButton from './components/FancyButton.vue'
</script>
<!-- * 7.0 Для следующей темы «слоты во Vue» избавимся от функционала выбора плана кофе и создадим новый компонент кнопки FancyButton. -->
<!-- 7.1 «Слоты» очень полезная фича во Vue, которая позволяет передавать HTML-вёрстку в родительском компоненте в дочерний, придавая им уникальность (похоже на пропы, но в отличии от них здесь передаётся HTML-контент). -->
<!-- Go to [src\components\FancyButton.vue] -->
<template>
  <!-- 7.3 И теперь с помощью HTML-тегов нам открываются обширные возможности для кастомизации компонентов. -->
  <!-- Go to [src\components\FancyButton.vue] -->
  <div class="content">
    <FancyButton><strong>S</strong>ubmit</FancyButton>
    <FancyButton><i>Cancel</i></FancyButton>
    <FancyButton><strong>Re-</strong><br />play</FancyButton>
    <!-- 7.5 А теперь мы можем указать место для именованных слотов с помощью тега <template> и его директивы v-slot, а аргументом будет название слота. А также можно специально указать слот по умолчанию, но делать это не обязательно, а просто использовать его как на примерах выше. -->
    <FancyButton
      ><template v-slot:icon><IconEmail /></template
      ><template v-slot:default>Email Us</template></FancyButton
    >
    <!-- 7.6 А ещё директиву "v-slot" можно записать сокращённо "#". -->
    <!-- Go to [src\components\FancyButton.vue] -->
    <!-- 7.9.1 Теперь добавим к '#icon' '="slotProps"', в котором будут в объекте содержаться пропы, которые мы повесили на именованный слот в FancyButton. -->
    <!-- <FancyButton
      ><template #icon="slotProps">{{ slotProps }}📝 </template>Subscribe</FancyButton
    > -->
    <!-- 7.9.2 Для лаконичности кода мы можем деструктурировать slotProps, сказав, что нас не интересует проп "random", а только "hover". А дальше пропишем тернарник для отображения одной или другой иконки, в зависимости от того, hover в значении true или false. -->
    <!-- 7.10 Подобный синтаксис называется "scope slots", он очень удобен и используется достаточно часто. Он даёт возможность добраться из родит. комп. к данным в области видимости дочернего комп. -->
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
