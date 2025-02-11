import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 3.1 Мы просто импортируем нужный компонент, как мы это делали с локальной регистрацией компонентов.
import CoffeePlan from './components/CoffeePlan.vue'

// 3.2 А дальше мы добавим с помощью метода "component" наш новый компонент между "createApp()" и "mount()".
// Go to [src\components\PlanPicker.vue]
createApp(App)
  .component("CoffeePlan", CoffeePlan)
  .mount('#app')
