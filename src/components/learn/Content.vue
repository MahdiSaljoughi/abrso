<template>
  <div v-if="content">
    <!-- header -->
    <div class="flex flex-col items-center justify-center">
      <div class="mx-auto xl:w-[1230px] mb-4">
        <span
          class="block mb-6 text-center text-xl font-semibold"
          :class="route.params.path === 'tracker-setup' ? '' : 'hidden md:block'"
          >{{ content.title }}</span
        >
        <span
          v-if="content.body.header"
          class="font-medium block mb-6 leading-7 text-center md:text-right mx-4 md:mx-0"
          >{{ content.body.header }}</span
        >
      </div>
    </div>
    <!-- body -->
    <div class="w-full h-full">
      <div class="h_iframe-aparat_embed_frame mx-4 md:mx-0" v-if="content.body.banner?.iframe">
        <span style="display: block; padding-top: 57%"></span>
        <iframe
          :src="content.body.banner?.iframe"
          style="border-radius: 24px"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>
      <div class="xl:w-[1230px] shadow-lg mx-4 rounded-3xl" v-if="content.body.banner?.src">
        <NuxtImg :src="content.body.banner?.src" :alt="content.body.banner?.alt" class="w-full" />
      </div>
      <div
        v-if="content.body.steps?.length"
        class="mx-4 border border-[#008AAE]/30 dark:border-[#008AAE]/40 rounded-3xl pt-10 pr-8 pl-4 md:px-16 sm:mx-auto xl:w-[1230px] bg-gradient-to-t dark:from-[#008AAE]/20 to-transparent shadow-lg backdrop-blur-md"
        :class="content.body.isStepNumric === true ? 'py-10' : ''"
      >
        <div class="flex flex-col-reverse gap-y-10 lg:flex-row items-center justify-between gap-x-20">
          <ul>
            <li
              v-for="(step, index) in content.body.steps"
              :key="index"
              :class="content.body.isStepNumric === false ? 'toop pb-10' : 'pb-10'"
            >
              <span v-if="content.body.isStepNumric === false" class="block mb-4 leading-7">{{
                step.title
              }}</span>
              <span
                v-if="content.body.isStepNumric === true && carouselEl"
                class="cursor-pointer block leading-7 w-[500px]"
                @click="carouselEl.select(index + 1)"
                :class="index === carouselEl.page - 1 ? 'font-bold' : ''"
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
          <LearnCarousel v-if="hasCarousel" v-model:carousel-ref="carouselEl" :items="content.body.steps" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { LearnPageContent } from '~/interface/learn.types'

const props = defineProps<{ content?: LearnPageContent }>()
const route = useRoute()
const hasCarousel = computed(() => Boolean(props.content?.body.steps?.some((i) => Boolean(i.src))))

const carouselEl = ref<undefined | { page: number; select: (n: number) => void }>()
watch(
  () => props.content?.title,
  () => carouselEl.value?.select(1),
)
</script>

<style scoped>
.h_iframe-aparat_embed_frame {
  position: relative;
}
.h_iframe-aparat_embed_frame .ratio {
  display: block;
  width: 100%;
  height: auto;
}
.h_iframe-aparat_embed_frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.toop::before {
  content: '';
  position: absolute;
  margin-right: -20px;
  margin-top: 8px;
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 100%;
}

html.dark .toop::before {
  content: '';
  position: absolute;
  margin-right: -20px;
  margin-top: 8px;
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 100%;
}
</style>
