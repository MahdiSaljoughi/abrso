<script setup lang="ts">
defineProps(['classes'])
</script>
<template>
  <section :class="`w-full ${classes}`">
    <div
      class="container flex flex-wrap md:px-10 mx-auto justify-between max-w-5xl sm:max-w-xl md:max-w-6xl gap-8"
    >
      <div class="flex md:flex-row flex-col justify-between w-full">
        <slot />
      </div>
      <slot name="slider" />
    </div>
  </section>
</template>
