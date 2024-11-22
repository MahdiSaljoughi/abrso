<script setup lang="ts">
const { fetchAllPages } = await usePage()
const pagesData = (await fetchAllPages()).value

defineProps(['classes'])
</script>
<template>
  <div :class="`${classes}`" class="flex flex-col pt-5 w-full z-10 fixed bg-menu-text dark:bg-black bg-white">
    <!-- fixed enter button -->
    <div class="w-full text-zinc-100 flex flex-col gap-y-5">
      <NuxtLink to="https://app.abrso.ir/">
        <div class="block bg-item button-rounded py-3 text-center mx-4 bg-[#008AAE] dark:bg-slate-950">
          <span>ورود به نرم‌ افزار</span>
        </div>
      </NuxtLink>
      <!-- <NuxtLink to="https://app.abrso.ir/">
        <div class="block bg-item button-rounded py-3 text-center mx-4 bg-[#008AAE] dark:bg-slate-950">
          <span>مشترکین سازمانی</span>
        </div>
      </NuxtLink> -->
    </div>
    <div class="flex flex-col space-y-7 items-center w-full pt-5">
      <!-- a tag because the menu in mobile must be close before redirecting -->
      <NuxtLink
        v-for="obj in pagesData"
        :key="obj.title"
        :aria-label="obj.title"
        :active-class="`text-teal-blue font-semibold`"
        :to="obj.slug === '-' ? '/' : `/${obj.slug}`"
        class="text-sm px-3 py-2 hover:text-teal-blue font-normal text-primary2-400 transition ease-in-out duration-200"
      >
        <h5>{{ obj.title }}</h5>
      </NuxtLink>
      <NuxtLink
        to="/learn-app/"
        class="text-sm px-1 lg:px-3 py-2 hover:text-teal-blue transition ease-in-out duration-200"
        >آموزش</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.bg-item {
  position: relative;
  box-sizing: border-box;
  /* background: linear-gradient(125.15deg, rgb(2 7 15 / 92%), rgb(16 55 110 / 48%) 148.76%); */
  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 10px;
}

.bg-item::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -1px;
  border-radius: inherit;
  background: linear-gradient(to right, #ffffff3b, transparent);
}

.button-rounded {
  border-radius: 10px;
}

.bg-menu-unvisible {
  display: none;
  opacity: 0;
  transition:
    visibility 0s,
    opacity all 0.1s ease-in,
    background 0.2s ease-in-out;
}

.bg-menu-text {
  height: calc(100vh);
}
</style>
