<!-- Здесь мы попрактикуемся создавать карточки с информацией о пользователе, используя GitHub API для получения информации о пользователях, URL: https://api.github.com/users/[username] -->
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  username: { type: String, required: true },
})

const userInfo = ref({})

const registeredTimeAgo = computed(() => {
  const startDate = Date.parse(userInfo.value.created_at)
  const endDate = Date.now()
  const diff = endDate - startDate

  const seconds = diff / 1000
  const minutes = seconds / 60
  const hours = minutes / 60
  const days = hours / 24
  const years = days / 365.25 // Account for leap years (365.25 days on average)

  const wholeYears = Math.floor(years)
  const fractionalPart = years - wholeYears
  const remainingMonths = Math.round(fractionalPart * 12)

  // Differs single or plural form of the words based on number and remove if it’s 0
  if (remainingMonths > 0 && wholeYears === 0) {
    return remainingMonths === 1 ? `${remainingMonths} month` : `${remainingMonths} months`
  } else if (remainingMonths === 0 && wholeYears > 0) {
    return wholeYears === 1 ? `${wholeYears} year` : `${remainingMonths} years`
  } else {
    return `${wholeYears === 1 ? `${wholeYears} year` : `${remainingMonths} years`} & ${remainingMonths === 1 ? `${remainingMonths} month` : `${remainingMonths} months`}`
  }
})

fetch(`https://api.github.com/users/${props.username}`).then(async (res) => {
  const data = await res.json()
  userInfo.value = data
})
</script>
<template>
  <div v-if="userInfo" class="basis-xl min-h-[230px] card card-side bg-base-100 shadow-xl">
    <figure class="w-[40%]">
      <img :src="userInfo.avatar_url" alt="Avatar pic of " />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-gray-300">{{ userInfo.login }}</h2>
      <div class="text-gray-400 font-bold">
        <p>
          Followers: <span class="font-light text-base">{{ userInfo.followers }}</span>
        </p>
        <p>
          Following: <span class="font-light text-base">{{ userInfo.following }}</span>
        </p>
        <p>
          Repositories: <span class="font-light text-base">{{ userInfo.public_repos }}</span>
        </p>
        <p>
          Signed Up: <span class="font-light text-base">{{ registeredTimeAgo }} ago</span>
        </p>
      </div>
      <div class="card-actions mt-5 justify-center">
        <a class="btn btn-primary bg-slate-700 text-gray-400" :href="userInfo.html_url"
          >View Profile</a
        >
      </div>
    </div>
  </div>
</template>
