<script lang="ts" setup>
import staticData from '~/staticData.json'
defineProps(['team'])
</script>

<template>
  <div class="">
    <div class="flex flex-col md:flex-row items-center overflow-auto md:overflow-hidden h-[80vh] md:h-auto">
      <img
        class="rounded-lg absolute md:relative w-auto h-[300px] md:h-[390px] md:w-[440px] z-50 hidden md:block"
        src=""
      >

      <div class="mt-20 md:mt-0 bg-gradient-gray dark:bg-gradinet-glass pb-7 px-8 text-right lg:h-[350px]">
        <div class="">
          <img
            class="rounded-lg mx-auto md:relative -mt-16 w-auto h-[300px] md:h-[390px] md:w-[440px] z-50 md:hidden"
            src=""
          >

          <div class="space-y-3 md:space-y-0 md:pt-0 w-full mt-6">
            <p class="text-2xl text-blackPallete-100 dark:text-plantium-silver font-bold">
              {{ team.name }}
            </p>
            <p class="dark:text-blackPallete-100 text-granite-black text-sm">
              {{ team.description }}
            </p>

            <div class="pt-5 space-y-4">
              <div class="md:grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                <div
                  v-for="(info, index) in staticData.team[0].details"
                  :key="index"
                  class=""
                >
                  <div class="space-y-1">
                    <p class="text-teal-blue base-18 font-extrabold">
                      {{ info.faName }}
                    </p>
                    <p
                      v-for="item in info.content"
                      :key="item"
                      class="text-sm"
                    >
                      {{ item }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="space-y-1">
                  <p class="text-teal-blue base-18 font-extrabold block">
                    {{ staticData.team[0].skill?.faName }}
                  </p>
                  <div class="grid grid-rows-2 grid-flow-col-dense w-auto space-y-1">
                    <p
                      v-for="item in staticData.team[0].skill?.content"
                      :key="item"
                      class="text-sm"
                    >
                      {{ item }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
