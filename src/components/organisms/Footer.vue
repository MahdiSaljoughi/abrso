<script setup lang="ts">
import staticData from '~/staticData.json'

const { fetchAllPages } = await usePage()
const pagesData = (await fetchAllPages()).value

defineProps(['classes'])
</script>

<template>
  <footer class="w-full text-black dark:text-white shadow-lg shadow-black">
    <div
      :class="`bg-white dark:bg-black flex-col md:flex-row flex items-center mx-auto w-full justify-center py-14 ${classes} md:space-x-7 md:space-x-reverse`"
    >
      <p class="md:mb-0 ml-0 mb-4 text-xl">
        مشاوره خریـد
      </p>

      <div class="w-full md:w-auto input">
        <form class="relative w-3/4 mx-auto md:w-full">
          <input
            class="border border-zinc-500 rounded-full px-5 outline-none dark:border-none text-base h-12 w-full md:w-72 bg-white dark:text-black"
            placeholder="شماره تماس خود را وارد کنید"
          >
          <button class="absolute center-element bg-black rounded-full w-8 h-8 force-left">
            <nuxt-img
              alt="ارسال"
              class="center-element"
              width="14"
              height="15"
              src="/icons/email.svg"
            />
          </button>
        </form>
      </div>
    </div>

    <div class="w-full border-rounded-gradient bg-white dark:bg-black ">
      <div class="mx-auto xl:max-w-5xl md:max-w-4xl sm:max-w-xl px-10">
        <div
          class="footer-links pt-12 pb-12 grid grid-cols-2 gap-y-9 md:flex md:flex-row md:mx-32 justify-between"
        >
          <div
            v-for="obj in pagesData.slice(1)"
            :key="obj.title"
            class="flex flex-col space-y-2"
          >
            <NuxtLink
              :to="`/${obj.slug}`"
              class="text-sm font-normal transition ease-in-out duration-200 hover:text-teal-blue"
            >
              {{ obj.title }}
            </NuxtLink>
          </div>
          <nuxt-link to="/contact-us" class="text-sm font-normal transition ease-in-out duration-200 hover:text-teal-blue">تماس باما</nuxt-link>
        </div>

        <div class="flex flex-col flex-wrap w-full pb-10 pt-12">
          <div class="footer-social-media flex justify-center space-x-4 space-x-reverse mb-8">
            <NuxtLink
              v-for="obj in staticData.social_media"
              :key="obj.name"
              :href="obj.address"
            >
              <nuxt-img
                :aria-label="obj.name"
                alt="social-media"
                :src="`/social-media/${obj.name}.svg`"
                class="hover:scale-105 hidden dark:block"
                width="15px"
              />
              <nuxt-img
                :aria-label="obj.name"
                alt="social-media"
                :src="`/social-media/dark/${obj.name}.svg`"
                class="hover:scale-105 dark:hidden"
                width="15px"
              />
            </NuxtLink>
          </div>
          <p class="footer-copy-right text-sm text-center">
            {{ staticData.copyRight }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.border-rounded-gradient {
  text-align: center;
  border-top: 1px solid transparent;
  border-image: linear-gradient(
    -0.25turn,
    rgba(128, 128, 128, 0.397),
    rgba(128, 128, 128, 0.192),
    rgba(56, 2, 155, 0)
  );
  border-image-slice: 1;
  width: 100%;
}

.force-left {
  left: 1.5rem !important;
}

.support {
  backdrop-filter: blur(19px);
}
</style>
