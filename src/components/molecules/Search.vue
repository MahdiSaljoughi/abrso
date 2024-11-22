<script lang="ts" setup>
defineProps(['classes'])
const route = useRoute()
const router = useRouter()
const searchWord = ref('')

watch(searchWord, (searchWord, previous) => {
  router.push({
    query: { search: searchWord },
  })
})
</script>

<template>
  <!-- {{ data.data[0].attributes.title }} -->
  <!-- <input type="search" class="border p-5  outline-none" v-model="searchWord" placeholder="search" />

    <a :href="route.fullPath + `?search=` + searchWord">
        <button>click on search</button>
    </a> -->

  <div class="flex items-center space-x-reverse text-base">
    <div
      class="w-full"
      dir="ltr"
    >
      <div
        :class="`searchBox w-full pl-2 pr-4 flex items-center justify-between  border-plantium-silver border ${classes} `"
      >
        <button
          class="searchButton rounded-full w-[28px] h-[28px]"
          href="#"
        >
          <img
            class="hidden dark:block"
            src="~/assets/icons/search.svg"
          >
          <img
            class="block dark:hidden"
            src="~/assets/icons/light/search.svg"
          >
        </button>
        <input
          dir="rtl"
          class="searchInput text-right text-sm dark:text-plantium-silver text-granite-black"
          type="text"
          name=""
          placeholder="جستجو"
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.searchBox {
  height: 41px;
}

.searchBox > .searchInput {
}

.searchButton {
  float: right;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4sws;
}

.searchInput {
  border: none;
  background: none;
  outline: none;
  float: left;
  font-size: 16px;
  transition: 0.4s;
}
</style>
