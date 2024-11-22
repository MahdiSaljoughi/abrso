<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

defineProps(['text'])
const animation = gsap.timeline({
  scrollTrigger: {
    trigger: '#slogan',
  },
})

const slogan = ref(null)
onMounted(() => {
  animation.to(slogan.value, { y: '-18rem', opacity: 1, duration: 3 })
})
</script>

<template>
  <div
    id="slogan"
    ref="slogan"
    class="absolute -bottom-20 w-full flex justify-center"
  >
    <span class="text-center text-style">{{ text }}</span>
  </div>
</template>

<style scoped>
.text-style {
  font-weight: 400;
  font-size: 60px;
  letter-spacing: 0.4em;
  background-image: -webkit-linear-gradient(270deg, #bfbfbf 0%, #686e6b 39%, #555357 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
  .text-style {
    font-size: 2rem;
  }
}
</style>
