<script setup lang="ts">
type props = {
  numberPerRow: number
  itemsHasNumber: boolean
  theme: string | 'card-photo' | 'card' | 'list-item'
  gridItems: {
    id: number
    title: string
    description: string
    paragraph: string
    tag: string
    image: Image
  }[]
}
const runtime = defineProps<{ metaData: props }>()
</script>

<template>
  <div>
    <MoleculesCardPhoto
      v-if="metaData.theme === 'card-photo'"
      :meta-data="metaData"
    />
    <MoleculesListItem
      v-else-if="metaData.theme === 'list-item'"
      :meta-data="metaData"
    />
    <div
      v-else
      class="grid grid-cols-1 gap-y-4 gap-x-10 lg:gap-x-20 md:gap-y-4 md:w-11/12 mx-auto"
      :class="[metaData.numberPerRow === 4 && 'md:grid-cols-4', `md:grid-cols-${metaData.numberPerRow}`]"
    >
      <div
        v-for="(item, index) in metaData.gridItems"
        :key="index"
        class="grid-items relative"
        :index="index"
        :class="[metaData.theme === 'card' ? ' pt-10 ' : '', metaData.numberPerRow === 2 && 'md:grid-cols-2']"
      >
        <div
          v-if="metaData.itemsHasNumber"
          class="absolute center-element h-[64px] w-[64px] bg-silver-sand rounded-full mt-10"
          style="top: 0"
        >
          <div
            class="absolute w-[48px] h-[48px] center-element text-xl bg-[#00000033] text-granite-black flex justify-center items-center rounded-full"
          >
            <span class="">{{ (index + 1).toLocaleString('fa-IR') }}</span>
          </div>
        </div>

        <div
          class="rounded-[15px] space-y-4 space-y-reverse h-full"
          :class="[metaData.theme === 'card' ? 'bg-silver-sand pt-10 pb-5 px-10' : '']"
        >
          <component
            :is="item.tag"
            v-if="item.title"
            class="grid-title dark:bg-plantium-silver shadow-title dark:text-granite-black text-teal-blue text-center rounded-md text-sm mb-2 font-semibold relative justify-center flex px-1 py-[6px]"
          >
            {{ item.title }}
          </component>
          <p
            class="text-sm pargraph-post-typography-style"
            :class="[metaData.theme === 'card' ? 'text-granite-black ' : ' ']"
          >
            {{ item.description }}
          </p>
          <div
            v-if="!item.description"
            class="text-sm leading-[33px] word-space"
            v-html="item.paragraph"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.word-space {
  word-spacing: 1px;
}
.shadow-title {
  box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.2);
}

@media (min-width: 768px) {
  .grid-items:last-child:not(:nth-child(even)) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .grid-items:last-child:not(:nth-child(even)) .grid-title {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
