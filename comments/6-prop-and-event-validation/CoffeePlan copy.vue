<script setup>
// * 5.0 Чтобы получить максимум контроля над пропами, над пэйлоадом кастомных событий мы можем добавить валидаторы для каждого из них. Начнём с пропов, добавив функцию "validator", которая будет принимать значение, которое принимает этот проп, а возвращать true или false, в зависимости от значения попадающего в проп, где true - хорошо, валидное значение, а false - невалидное. Представим, что все наши кофе-планы должны начинаться со слова "The" и напишем тернарный оператор для этого.
// Go to [src\components\PlanPicker.vue]
const props = defineProps({
  name: {
    type: String,
    default: 'Default Plan',
    validator(value) {
      // return value.startsWith('The') ? true : false - можно сократить до (т.к. если условие выполняется, то оно будет правдивым, иначе — нет):
      return value.startsWith('The')
    },
  },
  selected: { type: Boolean, default: false },
})

// 5.2.0 А теперь рассмотрим кастомную валидацию для кастомных событий. И для этого нужно заменить передаваемый массив эмитов в "defineEmits" на объект. Теперь "selected" становится функцией, которая принимает payload и похожим образом на то, как мы делали в пропах она будет возвращать true или false. А проверку сделаем на то, что в payload попал строчный тип данных.
// const emit = defineEmits(['selected'])
// 5.3 Также, если у нас много эмитированных событий, но мы не хотим делать валидацию на некоторые из них, то просто присваиваем им значение null. И событие hiThere не будет иметь кастомной валидации.
const emit = defineEmits({
  hiThere: null,
  selectedPlan() {
    return typeof payload === 'boolean'
  },
})
// 5.2.1 И теперь, если заменить payload например на булево значение, то мы также получим предупреждение в консоль.
const selectPlan = () => emit('selectedPlan', props.name)
</script>
<template>
  <div class="plan" :class="{ 'active-plan': selected }" @click="selectPlan">
    <div class="description">
      <span class="title">{{ name }} </span>
    </div>
  </div>
</template>
