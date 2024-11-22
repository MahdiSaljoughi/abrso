<script setup lang="ts">
defineProps(['classes'])
</script>
<template>
  <div :class="`flex w-full h-full justify-center ${classes}`">
    <slot />
  </div>
</template>
