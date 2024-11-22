<template>
  <div v-if="content">
    <div class="w-full h-full">
      <div v-if="content.body.steps?.length" class="px-4 dark:bg-black bg-white">
        <div class="flex flex-col gap-y-5 lg:flex-row items-center justify-between gap-x-20">
          <LearnCarousel v-if="hasCarousel" v-model:carousel-ref="carouselEl" :items="content.body.steps" />
          <ul>
            <li v-for="(step, index) in content.body.steps" :key="index">
              <span
                v-if="content.body.isStepNumric === true && carouselEl"
                class="cursor-pointer text-wrap block text-center leading-7"
                @click="carouselEl.select(index + 1)"
                :class="index === carouselEl.page - 1 ? 'block' : 'hidden'"
                >{{ step.title }}
                <span
                  v-if="step.description"
                  @click.stop=""
                  class="block text-[#008AAE] text-sm mt-2 mb-3 cursor-default mr-4"
                  :class="index === carouselEl.page - 1 ? 'block' : 'hidden'"
                  >{{ step.description }}</span
                >
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { LearnPageContent } from '~/interface/learn.types'

const props = defineProps<{ content?: LearnPageContent }>()
const hasCarousel = computed(() => Boolean(props.content?.body.steps?.some((i) => Boolean(i.src))))

const carouselEl = ref<undefined | { page: number; select: (n: number) => void }>()
watch(
  () => props.content?.title,
  () => carouselEl.value?.select(1),
)
</script>
