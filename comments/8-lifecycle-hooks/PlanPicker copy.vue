<!-- * 6.0 Каждый Vue-компонент проходит через определённые стадии жизненного цикла: через некоторые, когда он был создан, когда у него обновились какие-то данные и ему надо перерендериться, а также, когда ему нужно быть удалённым со страницы. Чтобы иметь возможность делать какие-то вещи в определённые моменты этих стадий жизненного цикла Vue предоставляет нам т.н. «хуки жизненного цикла», которые в названии начинаются на "on...", например "onBeforeMount" или "onBeforeUnmounted" и многие другие. -->
<!-- 6.1 Для начала импортируем из Vue два самых популярных хука "onMounted" и "onUnmounted". -->
<!-- 6.2.0 Хук "onMounted" срабатывает тогда, когда вёрстка уже отрендерилась на странице. Т.ч. если мы хотим получить доступ к какому-то элементу DOM на странице, то нам нужно дождаться стадии "mounted" и для этого использовать соответствующий хук. -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CoffeePlan from './CoffeePlan.vue'

const plans = ref(['The Single', 'The Curious', 'The Addict', 'The Hacker'])

const selectedCoffeePlan = ref()

const handleSelectCoffeePlan = (name) => (selectedCoffeePlan.value = name)

// 6.2.1 Если же мы попытаемся получить доступ к элементу без хука, то получим "null", т.к. элементы не успели появиться на странице:
// console.log(document.querySelector('.plan'))
// 6.2.2 Теперь поместим ту же команду в хук "onMounted":
// onMounted(() => console.log(document.querySelector('.plan')))

// ? 6.3.0 Во Vue мы можем вместо "document.querySelector" использовать "template ref". Он похож на реактивный реф, но привязан к DOM-элементу.
const plansWrapper = ref()

// ? 6.8.0 Но для чего обычно используют "onUnmounted" хук? Обычно для того, чтобы избавиться от сторонних эффектов, после удаления чего либо со страницы. Рассмотрим ещё пример. У нас есть счётчик реф "count", у которого начальным значением будет 0 и который каждую секунду увеличивается на 1.
const count = ref(0)

// 6.8.2 Решением проблемы будет упаковать метод setInterval в переменную interval...
const interval = setInterval(() => {
  count.value++
}, 1000)

// 6.8.3 ...и затем отменять его хуком "onUnmounted".
onUnmounted(() => clearInterval(interval))

// 6.4 И теперь мы можем получить его в консоль и это рекомендованный способ получить доступ к DOM-элементам во Vue.
// onMounted(() => console.log(plansWrapper.value))

// 6.5 Также рассмотрим пример с хуком "onUnmounted", который запускается в момент, когда элемент удаляется со страницы.
// Go to [src\App.vue]
// onUnmounted(() => console.log('Bye-bye, plan picker!'))
</script>
<template>
  <!-- 6.8.1 Далее мы покажем его здесь. Но проблема в том, что даже, когда мы уберём со страницы планы вместе со счётчиком, то он не перестанет производить отсчёт времени, а это лишние потребляемые ресурсы и возможно мы захоти, чтобы когда этот элемент снова появился, то счётчик бы обнулялся. ↑ -->
  {{ count }}
  <!-- 6.3.1 А затем добавим атрибут ref к элементу, с которым хотим связать template ref. И теперь, когда страница загрузится, то переменная plansWrapper будет содержать ссылку на этот элемент. -->
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
