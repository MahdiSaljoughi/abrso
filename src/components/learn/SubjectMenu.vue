<template>
  <div class="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-6">
    <!-- linkPage  -->
    <div class="flex flex-col items-center justify-center gap-y-6 md:gap-y-10 gap-x-4">
      <div
        v-for="(item, index) in pages"
        :key="index"
        class="flex flex-col items-center justify-center gap-y-6 md:gap-y-10 gap-x-4"
      >
        <NuxtLink
          :to="item.path"
          class="border border-zinc-800/10 dark:border-zinc-800 rounded-2xl bg-zinc-50 dark:bg-zinc-800/30 py-3 md:py-2 w-72 md:w-48 text-center backdrop-blur-sm"
          :class="route.params.path === item.path ? 'select-btn' : ''"
        >
          <div>{{ item.title }}</div>
        </NuxtLink>
      </div>
    </div>
    <!-- contents -->
    <div
      class="w-72 md:w-full xl:w-[1000px] lg:h-[256px] backdrop-blur-sm border border-[#008AAE]/30 dark:border-[#008AAE]/40 bg-sky-200/10 dark:bg-sky-900/10 rounded-3xl px-10 py-6 md:p-10 flex gap-y-5 md:gap-y-0 items-center justify-center flex-wrap"
    >
      <div class="md:border-x border-dashed border-[#008AAE]/50" v-for="(content, i) in contents" :key="i">
        <button
          class="pb-2 rounded-lg font-medium mx-4 w-64"
          :class="{
            'text-[#008AAE] bg-gradient-to-t from-[#008AAE]/10 to-transparent': selected === i,
          }"
          @click="selected = i , isOpen = true"
        >
          {{ content.title }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { LearnPage } from '~/interface/learn.types'

const route = useRoute()
const selected = defineModel<number>('selectedIndex')
const props = defineProps<{ pages: LearnPage[] }>()
const contents = computed(() => props.pages.find((i) => route.params.path === i.path)?.contents)

const isOpen = defineModel<Boolean>('isOpen')

</script>

<style scoped>
.select-btn {
  background-color: rgb(186 230 253 / 0.1);
  border-color: rgb(0 138 174 / 0.3);
}
html.dark .select-btn {
  border-color: rgb(0 138 174 / 0.4);
  background-color: rgb(12 74 110 / 0.1);
}
</style>
