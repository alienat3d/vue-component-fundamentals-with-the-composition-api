<!-- * 8.0 Итак, у нас стоит задача создать собственные алёрт-всплывающие элементы с какой-то информацией, которые легко настраиваются с помощью ключевых слов, тем самым изменяя цвет и иконку. -->
<script setup>
import { ref, computed } from 'vue'
// 8.1 И для этой задачи нам сперва потребуются пропы, где мы укажем тип и значение по умолчанию.
import IconInfo from './icons/IconInfo.vue'
import IconCheck from './icons/IconCheck.vue'
import IconCaution from './icons/IconCaution.vue'
import IconCancel from './icons/IconCancel.vue'

const props = defineProps({
  type: { type: String, default: 'info' },
})

// 8.13 А также эмитируем ещё событие 'closed', которое будет отдавать сигнал родит. комп., когда алёрт закроется. ↓
const emit = defineEmits(['closed'])

// 8.12 Также нам пригодится стейт реф "closed".
const closed = ref(false)

// 8.3 Также нам необходимо создать computed-поле для стилей и в нём мы создадим своего рода карту, объект нужных классов. А также нужно указать какой именно класс будет выбираться с помощью "[props.type]"
const alertType = computed(() => {
  return {
    info: 'alert-info',
    warning: 'alert-warning',
    success: 'alert-success',
    error: 'alert-error',
  }[props.type]
})

// 8.6 После того, как мы создали компоненты-иконки и импортировали сюда, создадим похожую computed-карту, как и с классами, но уже для иконок.
const iconType = computed(() => {
  return {
    info: IconInfo,
    warning: IconCaution,
    success: IconCheck,
    error: IconCancel,
  }[props.type]
})

// 8.11 Нам пригодится функция "close", которая будет убирать наши алёрты. ↑
// 8.14 А теперь добавим это кастомное событие сюда и payload нам здесь пока не понадобится.
// Go to [src\App.vue]
const close = () => {
  closed.value = true
  emit('closed')
}
</script>

<template>
  <!-- 8.2 Теперь поработаем с классами, во-первых прибайндим классы к пропам. -->
  <!-- 8.4 А теперь подставим это computed-поле в классы для отображение нужной стилистики для каждого комп., в зависимости от выбранного типа. -->
  <!-- 8.5 Дальше нам нужно подставлять нужную иконку, в зависимости от типа комп. AppAlert и удобнее всего будет из этих SVG-иконок сделать отдельные компоненты. -->
  <div v-show="!closed" role="alert" :class="`mb-3 mx-auto alert ${alertType} max-w-2/3`">
    <!-- 8.7 И теперь мы можем использовать специальную фичу Vue "component", чтобы динамически использовать один компонент внутри другого. Мы добавим директиву ":is" и присвоим ей аргументом карту иконок iconType, т.ч. она будет отображать нужную иконку, в зависимости от выбранного типа. -->
    <!-- ? 8.8 Однако, мы могли бы достичь того же результата и с помощью условий. -->
    <!-- <IconInfo v-if="type === 'info'" />
    <IconCheck v-if="type === 'success'"
    etc... -->
    <component :is="iconType"></component>
    <!-- 8.9 Также не забыть облачить текстовый контент в тег "<slot>", чтобы его можно было менять из родит. комп., а также добавим значение по умолчанию сюда. -->
    <span><slot>New update is available.</slot></span>
    <!-- 8.10 И у нас ещё осталось сделать логику кнопку, удаляющий наши алёрты. ↑ -->
    <button @click="close" class="hover:rotate-90 transition-transform">×</button>
  </div>
</template>

<style scoped>
button {
  outline: 0;
  font-size: 20px;
}
</style>
