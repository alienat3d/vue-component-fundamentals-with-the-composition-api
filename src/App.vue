<script setup>
import { ref } from 'vue'
import AppAlert from './components/AppAlert.vue'
// 8.15 Ладно, хотя этот пример с кастомным событием "closed" был не очень полезным и скорее тестировочным, но мы можем придумать пример, где он может быть действительно необходим. Представим, что комп. AppAlert были не прописаны каждый отдельно хардкодом, а размножены циклом, на основе существующего реф-массива c объектами "alerts". Каждый объект описывает отдельный компонент.
const alerts = ref([
  {
    type: 'info',
    message: 'New update is available.',
  },
  {
    type: 'success',
    message: 'Your purchase has been confirmed!',
  },
  {
    type: 'warning',
    message: 'Warning: Invalid email address!',
  },
  {
    type: 'error',
    message: 'Task failed due to error!',
  },
])

/* const handleClose = () => console.log('closed') */
</script>
<template>
  <div class="container mx-auto pt-5">
    <!-- 8.17 И теперь мы заменим содержимое слушателя кастомного события "closed" на след. код, чтобы он удалял алёрт, по кнопке которого кликнули также из массива, используя метод filter. По сути он говорит вернуть все остальные, кроме того, на который кликнули. -->
    <AppAlert
      v-for="alert in alerts"
      :key="alert.message"
      :type="alert.type"
      @closed="alerts = alerts.filter((a) => a.message !== alert.message)"
      >{{ alert.message }}</AppAlert
    >
    <!--     <AppAlert type="info" @closed="handleClose"></AppAlert>
    <AppAlert type="success" @closed="handleClose">Your purchase has been confirmed!</AppAlert>
    <AppAlert type="warning" @closed="handleClose">Warning: Invalid email address!</AppAlert>
    <AppAlert type="error" @closed="handleClose">Task failed due to error!</AppAlert> -->

    <!-- 8.16 Теперь, если мы будем выводить содержимое реактивного массива "alerts" сюда, то увидим, что при удалении элемент пропадает со страницы, но в массиве остаётся. Но что, если нам нужно удалять их из массива тоже? Т.о. наши данные будут соответствовать тому, что рендерится на странице, как это и должно быть в хороших веб-приложениях. -->
    <pre>{{ alerts }}</pre>
  </div>
</template>
