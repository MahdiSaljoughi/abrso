<template>
  <div class="bg-lines">
    <slot />
  </div>
</template>

<style scoped>
.bg-lines {
  height: 100%;
  background-image: url('~/assets/images/bg-lines-3.svg');
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: -9rem;
  background-size: 40% auto;
}
</style>
