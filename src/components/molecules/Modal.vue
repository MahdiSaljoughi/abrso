<script setup lang="ts">
defineProps(['classes'])
const emit = defineEmits(['close-modal'])
const modalClose = () => {
  emit('close-modal')
  document.body.classList.remove('scroll-none-body')
}
</script>

<template>
  <div
    class="relative z-50"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    :class="`${classes}`"
  >
    <div class="fixed bg-lines-complete inset-0 dark:bg-black bg-white" />

    <div class="fixed inset-0 z-10">
      <div class="relative">
        <!-- this circule shadow has bug that each item in it can not choose -->
        <!-- <div class="circle-gradient dark:bg-circle-blue bg-circle-gray "></div> -->
      </div>
      <div class="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="main-container p-6 relative shadow-xl sm:w-full sm:max-w-6xl">
          <div
            class="cursor-pointer h-12 w-12 sm:mx-0 sm:h-10 sm:w-10"
            @click="modalClose"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-lines-complete {
  height: auto;
  background-image: url('~/assets/images/bg-complete.png');
  background-repeat: no-repeat;
  background-size: 80% 70rem;
  background-position-y: -150px;
  background-position-x: -15rem;
}
</style>
