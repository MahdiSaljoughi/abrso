<template>
  <div class="bg-lines overflow-clip overflow-img">
    <slot />
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .bg-lines {
    height: 60rem;
  }
}

.bg-lines {
  height: auto;
  background-image: url('~/assets/images/bg-lines.svg');
  background-repeat: no-repeat;
  background-size: auto 70rem;
}
</style>
