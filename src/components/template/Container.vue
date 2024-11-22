<script setup lang="ts">
defineProps(['classes'])
</script>
<template>
  <div :class="`pt-10 pb-40 px-7 md:px-5 mx-auto max-w-5xl md:max-w-7xl ${classes}`">
    <div class="flex flex-col w-full">
      <slot />
    </div>
  </div>
</template>
