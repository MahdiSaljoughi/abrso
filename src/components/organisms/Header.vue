<template>
  <div class="z-10">
    <AtomsVerticalSocialMedia />
    <header class="mx-auto max-w-screen-xl h-full">
      <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between h-full">
        <div class="block sm:hidden mt-40">
          <NuxtImg src="/image/home/radiyab-baner.png" alt="ردیاب" format="webp" class="w-52" />
        </div>
        <div class="pr-0 sm:pr-10 xl:pr-0">
          <div class="flex flex-col gap-y-8 sm:gap-y-12 -mt-20 items-center">
            <div class="tracking-[1px]">
              <h2 class="text-[36px] md:text-[40px] text-abr flex items-center gap-x-4 font-[750] md:mb-2">
                ابرســـــو
                <span
                  class="hidden sm:block w-[106px] h-0.5 dark:bg-zinc-500 bg-zinc-600 rounded-xl mt-1"
                ></span>
              </h2>
              <h1 class="text-[36px] md:text-[40px]">ردیــــاب خــــودرو</h1>
            </div>
            <div class="flex items-center gap-x-4">
              <NuxtLink to="/products/car-tracker" class="text-[18px] font-semibold text-abr"
                >بــررســی بیشتر</NuxtLink
              >
              <span>|</span>
              <NuxtLink
                to="https://app.abrso.ir"
                class="px-10 py-1 hover:scale-105 rounded-2xl border border-sky-500 text-white tracking-[1px] ease-in transition-colors kharid backdrop-blur-3xl duration-200"
                >ورود</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="hidden sm:block mb-[-80px] mt-20">
          <NuxtImg src="/image/home/radiyab-baner.png" alt="ردیاب" class="w-80 h-[622.8px]" format="webp" />
        </div>
        <div></div>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
defineProps(['image'])
</script>

<style scoped>
.bg-img-header {
  background-image: url('/image/baaner.jpg');
  background-size: 1920px;
  background-position: center;
  padding-bottom: 250px;
  background-repeat: no-repeat;
  margin-top: 0px;
  margin-bottom: 0px;
}

@media (max-width: 1024px) {
  .bg-img-header {
    background-image: url('/image/baaner.jpg');
    background-size: 1123px;
    background-repeat: no-repeat;
    margin-top: -190px;
    margin-bottom: -195px;
  }
  header {
    height: 70vh;
  }
}

@media (max-width: 600px) {
  .bg-img-header {
    background-image: url('/image/baner-mobile.jpg');
    background-size: 580px;
    background-repeat: no-repeat;
    margin-top: -180px;
    margin-bottom: 0px;
  }
  header {
    height: 70vh;
  }
}

.word-space {
  word-spacing: 4px;
}

.kharid {
  background: linear-gradient(256.72deg, rgba(0, 138, 174, 0.9) 45.36%, rgba(0, 0, 0, 0.72) 252.08%);
}
.kharid:hover {
  background: linear-gradient(256.72deg, rgba(0, 138, 174, 0.9) 30%, rgba(0, 0, 0, 0.72) 200%);
}
</style>
