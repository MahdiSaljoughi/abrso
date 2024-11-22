<template>
  <NuxtLayout name="home-layout">
    <template #home>
      <BackgroundSection>
        <div class="flex flex-col items-center justify-center gap-y-14 py-20">
          <h1 class="text-3xl font-bold text-center">راهنمای نصب و استفاده از ردیاب ابرسو</h1>
          <div :class="{ 'hidden md:block': pageContent?.body.isStepNumric === true }">
            <LearnSubjectMenu :pages="learnPages" v-model:selected-index="selectedIndex" />
          </div>
          <div :class="{ 'hidden md:block': pageContent?.body.isStepNumric === true }">
            <LearnContent :content="pageContent" />
          </div>
          <div v-if="pageContent?.body.isStepNumric === true" class="block md:hidden">
            <LearnMobileContent :content="pageContent" />
          </div>
        </div>
      </BackgroundSection>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import BackgroundSection from '~/components/organisms/BackgroundSection.vue'

import { learnPages } from '~/interface/learn-pages'
const route = useRoute()
const page = computed(() => learnPages.find((i) => i.path === route.params.path))

const selectedIndex = ref(0)
const pageContent = computed(() => page.value?.contents[selectedIndex.value])
</script>
