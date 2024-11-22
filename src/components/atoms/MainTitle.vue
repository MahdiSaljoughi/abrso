<script setup lang="ts">
defineProps(['classes'])
</script>

<template>
  <p :class="`text-granite-black dark:text-plantium-silver ${classes}`">
    <slot />
  </p>
</template>

<style scoped>
.title {
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 27.5px;
}

.title1 {
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
}
</style>
