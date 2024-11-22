<script setup lang="ts">
defineProps(['classes'])
</script>
<template>
  <div :class="`px-7 md:px-10 mx-auto max-w-5xl sm:max-w-xl md:max-w-6xl ${classes}`">
    <div class="flex flex-col w-full">
      <div class="relative">
        <!-- this circule shadow has bug that each item in it can not choose -->
        <!-- <div class="circle-gradient dark:bg-circle-blue bg-circle-gray"></div> -->
      </div>
      <slot />
    </div>
  </div>
</template>
