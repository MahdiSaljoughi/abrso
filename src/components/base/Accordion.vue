<script lang="ts" setup>
type props = {
  accordion: {
    title: string
    description: string
  }[]
}

const runtime = defineProps<{ metaData: props }>()
const content = useState(() => runtime.metaData.accordion)

const contents = useState(() =>
  content.value.map((_, i) => {
    return {
      title: content.value[i].title,
      description: content.value[i].description,
      expanded: false,
    }
  })
)
</script>
<template>
  <div :class="`space-y-4`">
    <div
      v-for="c of contents"
      :key="c.title"
      class="space-y-2"
    >
      <div
        class="title cursor-pointer text-base py-3 px-4 dark:text-blackPallete-100 dark:bg-gradient-blue dark:bg-black bg-white"
        @click="c.expanded = !c.expanded"
      >
        <div class="flex justify-between items-center">
          <div>
            <strong>{{ c.title }}</strong>
          </div>
          <div>
            <span v-if="c.expanded">
              <svg
                width="9"
                height="4"
                viewBox="0 0 9 4"
                fill="none"
                class="rotate-180 fill-black dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.347977C9 0.436427 8.96366 0.524876 8.8858 0.594704L5.50123 3.62991C4.95097 4.12336 4.04773 4.12336 3.49748 3.62991L0.112905 0.594705C-0.0376353 0.459703 -0.0376353 0.236253 0.112905 0.101251C0.263446 -0.0337501 0.512617 -0.0337501 0.663158 0.101251L4.04773 3.13646C4.2969 3.35991 4.7018 3.35991 4.95097 3.13646L8.33554 0.101251C8.48608 -0.0337504 8.73526 -0.0337504 8.8858 0.101251C8.95847 0.171079 9 0.259528 9 0.347977Z"
                  fill=""
                  fill-opacity="0.62"
                />
              </svg>
            </span>

            <span v-else><svg
              class="fill-black dark:fill-white"
              width="9"
              height="4"
              viewBox="0 0 9 4"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0.347977C9 0.436427 8.96366 0.524876 8.8858 0.594704L5.50123 3.62991C4.95097 4.12336 4.04773 4.12336 3.49748 3.62991L0.112905 0.594705C-0.0376353 0.459703 -0.0376353 0.236253 0.112905 0.101251C0.263446 -0.0337501 0.512617 -0.0337501 0.663158 0.101251L4.04773 3.13646C4.2969 3.35991 4.7018 3.35991 4.95097 3.13646L8.33554 0.101251C8.48608 -0.0337504 8.73526 -0.0337504 8.8858 0.101251C8.95847 0.171079 9 0.259528 9 0.347977Z"
                fill=""
                fill-opacity="0.62"
              />
            </svg>
            </span>
          </div>
        </div>
      </div>

      <div
        v-if="c.expanded"
        class="description shadow-sm py-3 px-4 text-granite-black dark:text-blackPallete-100 dark:bg-black bg-[#e4e4e4]"
      >
        {{ c.description }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  box-shadow: 0px 21px 103px rgba(0, 0, 0, 0.13);
}

.title,
.description {
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 10px;
}
</style>
