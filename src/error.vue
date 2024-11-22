<script lang="ts" setup>
import { arrowLeft } from './svgs'
const { data } = (await useGlobalData()) as any

type ErrorProps = {
  url: string
  statusCode: string | number
  statusMessage: string
  message: string
  description: string
  data?: any
}

const error = useError() // as Ref<ErrorProps | undefined | null | >
const errorProps: ErrorProps | null = (error.value as any)?.statusCode ? (error.value as any) : null

//seo
useServerSeoMeta({
  title: () => `${errorProps?.statusCode} - ${data.value.siteName}`,
})
</script>

<template>
  <div class="absolute top-1/2 left-1/2 center flex flex-col items-center text-center space-y-8">
    <span class="text-8xl">{{ errorProps?.statusCode }} </span>
    <span class="md:text-6xl text-2xl">{{ errorProps?.message }}</span>
    <a
      v-if="errorProps?.statusCode === 404"
      href="/"
      class="flex hover-child"
    >
      <span class="text-sm sm:text-xl text-right ml-1">برگشت به صفحه اصلی</span>
      <div
        class="inline-flex items-center animate-bounce-x"
        v-html="arrowLeft('black')"
      />
    </a>
  </div>
</template>

<style scoped>
.center {
  transform: translate(-50%, -50%);
}

.hover-child .animate-bounce-x {
  animation: bounce 2.5s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateX(0%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: translateX(-80%);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
}
</style>
