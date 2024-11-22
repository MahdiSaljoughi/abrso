<script setup lang="ts">
const { fetchAllPages } = await usePage()
const pagesData = (await fetchAllPages()).value

const isOpen = useState('mobileMenu', () => false)
const router = useRoute()
const pageRoute = router.name

const theme = useState('dark')

const _router = useRouter()
_router.afterEach(() => {
  isOpen.value = false
  document.body.classList.remove('scroll-none-body')
})

onMounted(() => {
  if (!localStorage.theme || localStorage.theme === 'dark') {
    theme.value = true
  } else {
    theme.value = false
  }
})

const changeTheme = (theme: boolean) => {
  if (theme) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.getElementsByTagName('html')[0].setAttribute('class', 'dark')
  } else {
    document.getElementsByTagName('html')[0].classList.remove('dark')
  }
}
const menuBtnClick = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    document.body.classList.add('scroll-none-body')
  } else {
    document.body.classList.remove('scroll-none-body')
  }
}
</script>

<template>
  <nav
    class="sticky top-0 w-full z-50 h-20 bg-nav-gradient bg-white dark:bg-black"
    :class="[isOpen ? '' : 'shadow-navbar-light']"
  >
    <div class="mx-auto max-w-screen-xl px-4 h-full">
      <div class="relative flex items-center justify-between h-full">
        <!-- right side mobile  -->
        <div
          class="absolute inset-y-0 right-0 flex items-center lg:hidden pr-2 lg:static lg:inset-auto lg:pr-0"
        >
          <button
            :class="[isOpen ? 'bg-gray-700' : '']"
            class="btn-menu inline-flex items-center justify-center rounded-md p-1"
            @click.prevent="menuBtnClick"
          >
            <span class="sr-only">Open main menu</span>

            <!-- open -->
            <svg
              class="dark:stroke-white stroke-none"
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
              :class="[isOpen ? 'hidden' : 'block']"
            >
              <rect width="25" height="1" rx="0.5" fill="#302E2E" />
              <rect x="9" y="7" width="16" height="1" rx="0.5" fill="#302E2E" />
              <rect y="14" width="25" height="1" rx="0.5" fill="#302E2E" />
            </svg>

            <!-- close -->
            <svg
              class="h-6 w-6"
              :class="[isOpen ? 'block' : 'hidden']"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- center mobile -->
        <div class="w-full justify-center flex lg:hidden">
          <NuxtLink to="/">
            <nuxt-img alt="ابرسو" src="/icons/icon-abrso-sky.png" width="39" />
          </NuxtLink>
        </div>

        <!-- right side desktop -->
        <div class="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
          <NuxtLink
            to="/"
            class="flex-shrink-0 items-center lg:ml-2 xl:ml-10 flex-row-reverse hidden lg:flex"
          >
            <nuxt-img alt="ابرسو" src="/icons/icon-abrso-sky.png" width="39" />
          </NuxtLink>

          <div class="hidden lg:block mx-4">
            <div class="flex items-center gap-x-3 space-x-reverse">
              <!-- <NuxtLink
                v-for="obj in pagesData"
                :key="obj.title"
                :aria-label="obj.title"
                :class="[
                  obj.slug === pageRoute && 'font-bold  text-teal-blue ',
                  obj.slug === '-' && pageRoute === 'index' && 'text-teal-blue font-bold ',
                ]"
                :active-class="`text-teal-blue font-semibold`"
                :to="obj.slug === '-' ? '/' : `/${obj.slug}`"
                class="text-sm px-1 lg:px-3 py-2 hover:text-teal-blue transition ease-in-out duration-200"
              >
                <h5>{{ obj.title }}</h5>
              </NuxtLink> -->
              <NuxtLink
                to="/"
                class="text-sm px-1 lg:px-3 py-2 hover:text-teal-blue transition ease-in-out duration-200"
                >خانه</NuxtLink
              >
              <NuxtLink
                to="/about-us"
                class="text-sm px-1 lg:px-3 py-2 hover:text-teal-blue transition ease-in-out duration-200"
                >درباره ما</NuxtLink
              >
              <NuxtLink
                to="/faq"
                class="text-sm px-1 lg:px-3 py-2 hover:text-teal-blue transition ease-in-out duration-200"
                >سوالات متداول</NuxtLink
              >
              <NuxtLink
                to="/articles"
                class="text-sm px-1 lg:px-3 py-2 hover:text-teal-blue transition ease-in-out duration-200"
                >مقالات</NuxtLink
              >
              <NuxtLink
                to="/learn-app/"
                class="text-sm px-1 lg:px-3 py-2 hover:text-teal-blue transition ease-in-out duration-200"
                >آموزش</NuxtLink
              >

              <button @click="changeTheme((theme = !theme))" class="flex items-center justify-center">
                <UIcon name="i-heroicons-moon-solid" class="dark:hidden text-xl" />
                <UIcon name="i-heroicons-sun-solid" class="hidden dark:block text-2xl" />
              </button>
            </div>
          </div>
        </div>

        <!-- left side mobile -->
        <div class="absolute inset-y-0 left-0 flex items-center lg:hidden pl-2">
          <div class="flex gap-x-4 flex-shrink-0 items-center lg:ml-14 flex-row-reverse">
            <div class="flex items-center justify-center" @click="changeTheme((theme = !theme))">
              <UIcon name="i-heroicons-moon-solid" class="dark:hidden text-xl" />
              <UIcon name="i-heroicons-sun-solid" class="hidden dark:block text-2xl" />
            </div>
          </div>
        </div>

        <!-- left side desktop -->
        <div class="absolute left-2">
          <div class="backdrop-blur-xs hidden lg:block">
            <!-- fixed enter button -->
            <div class="flex items-center gap-x-5">
              <!-- <NuxtLink to="https://app.abrso.ir/">
                <div class="block bg-item button-rounded px-6 py-1 text-center text-white bg-[#008AAE] hover:bg-[#008baeca] dark:bg-slate-900 dark:hover:bg-slate-950 transition-colors">
                  <span>مشترکین سازمانی</span>
                </div>
              </NuxtLink> -->
              <NuxtLink to="https://app.abrso.ir/">
                <div
                  class="block bg-item button-rounded px-6 py-1 text-center text-white bg-[#008AAE] hover:bg-[#008baeca] dark:bg-slate-900 dark:hover:bg-slate-950 transition-colors"
                >
                  <span>ورود به نرم افزار</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- menu -->
  <MoleculesNavbarMenuMobile :classes="isOpen ? 'bg-menu-visible' : 'bg-menu-unvisible'" />
</template>

<style scoped>
.bg-item {
  position: relative;
  box-sizing: border-box;
  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 10px;
}

.bg-item::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -1px;
  border-radius: inherit;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.3), transparent);
}
</style>
