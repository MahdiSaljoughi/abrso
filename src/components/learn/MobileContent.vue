<template>
  <LearnSubjectMenu :pages="learnPages" v-model:selected-index="selectedIndex" v-model:is-open="isOpen" />
  <div>
    <UModal
      v-model="isOpen"
      fullscreen
      :ui="{ overlay: { background: 'bg-white dark:bg-black' }, background: 'bg-white dark:bg-black' }"
      class="md:hidden"
    >
      <div class="bg-white dark:bg-black pt-5 pr-5">
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          @click="isOpen = false"
          size="xl"
        />
      </div>
      <MobileModalContent :content="pageContent" />
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { learnPages } from '~/interface/learn-pages'
import type { LearnPageContent } from '~/interface/learn.types'
import MobileModalContent from './MobileModalContent.vue'

const route = useRoute()
const page = computed(() => learnPages.find((i) => i.path === route.params.path))

const selectedIndex = ref(0)
const pageContent = computed(() => page.value?.contents[selectedIndex.value])

const props = defineProps<{ content?: LearnPageContent }>()
const hasCarousel = computed(() => Boolean(props.content?.body.steps?.some((i) => Boolean(i.src))))

const carouselEl = ref<undefined | { page: number; select: (n: number) => void }>()
watch(
  () => props.content?.title,
  () => carouselEl.value?.select(1),
)

const isOpen = ref()
</script>
