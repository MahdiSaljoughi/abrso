<script setup lang="ts">
import { arrow } from '~/svgs'
const runtime = defineProps<{ pagination: Pagination }>()
const route = useRoute()
const router = useRouter()
const pageNum = route.query?.page ? route.query?.page : 1

const getPagination = ({ page, pageSize, total, pageCount }: any) => {
  const prev = Math.abs(page - 1) > 0 ? Math.abs(page - 1) : 1
  const next = page + 1 < pageCount ? page + 1 : pageCount
  return {
    pageCount,
    page,
    pageSize,
    total,
    prev,
    next,
  }
}

const addToPath = (n: number) => {
  router.push({ query: { page: n } })
}

const isActive = getPagination(runtime.pagination).pageCount > 1
</script>
<template>
  <div
    v-if="isActive"
    class="pagination my-10"
  >
    <ul class="list flex items-center justify-center space-x-5 space-x-reverse">
      <a
        :class="[
          getPagination(pagination).page === getPagination(pagination).pageCount &&
            'pointer-events-none text-[#666]',
        ]"
        :href="`?page=${getPagination(pagination).next}`"
        class="inline-flex space-x-3 space-x-reverse cursor-pointer"
        @click="getPagination(pagination).next"
      >
        <div
          class="items-center inline-flex"
          :class="[
            getPagination(pagination).page === getPagination(pagination).pageCount
              ? 'stroke-[#666]'
              : 'dark:stroke-white stroke-granite-black',
          ]"
          v-html="arrow('')"
        />
        <button>بعدی</button>
      </a>

      <li class="flex cursor-pointer space-x-3 flex-row-reverse">
        <a
          v-for="n in getPagination(pagination).pageCount"
          :key="n"
          :href="`?page=${n}`"
          class="flex justify-center items-center rounded-xl w-8 h-9"
          :class="[
            Number(pageNum) === n
              ? 'bg-teal-blue text-plantium-silver'
              : 'hover:bg-teal-blue hover:text-plantium-silver',
          ]"
        >
          {{ n.toLocaleString('fa-IR') }}
        </a>
      </li>

      <a
        :class="[getPagination(pagination).page === 1 && 'pointer-events-none text-[#666]']"
        class="inline-flex space-x-3 space-x-reverse cursor-pointer"
        :href="`?page=${getPagination(pagination).prev}`"
        @click="addToPath(getPagination(pagination).prev)"
      >
        <button>قبلی</button>
        <div
          class="items-center inline-flex rotate-180"
          :class="[
            getPagination(pagination).page === 1 ? 'stroke-[#666]' : 'dark:stroke-white stroke-granite-black',
          ]"
          v-html="arrow('')"
        />
      </a>
    </ul>
  </div>
</template>
