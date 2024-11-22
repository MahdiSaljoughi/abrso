<script setup lang="ts">
import staticData from '~/staticData.json'
</script>

<template>
  <div class="absolute w-full">
    <div class="relative mx-auto max-w-screen-xl h-full">
      <div class="top-[-130px] md:top-48 left-2.5 dark:left-2 md:left-5 dark:md:left-5 absolute">
        <div
          class="horizental-line before:dark:bg-plantium-silver before:bg-granite-black relative text-[14px] w-56 right-24 -rotate-90"
        >
          <span class="hidden md:block"> مارا در شبکه های اجتماعی دنبال کنید. </span>
          <div
            class="absolute top-0 flex space-x-4 space-x-reverse"
            :style="{ left: '-7.5rem' }"
          >
            <NuxtLink
              v-for="obj in staticData.social_media.slice(0, 3)"
              :key="obj.name"
              :to="`${obj.address}`"
            >
              <nuxt-img
                width="20px"
                :src="`social-media/${obj.name}.svg`"
                class="scale-105 rotate-90 dark:block hidden"
              />

              <nuxt-img
                width="20px"
                :src="`social-media/dark/${obj.name}.svg`"
                class="scale-105 rotate-90 dark:hidden"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .horizental-line:before {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    left: -20px;
    top: 50%;
    position: absolute;
  }
}
</style>
