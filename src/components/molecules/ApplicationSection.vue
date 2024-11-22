<template>
  <div class="bg-gardient-application dark:bg-black md:h-96 mt-28 md:mt-0 overflow-hidden">
    <section class="md:px-8 flex flex-col mx-auto max-w-full md:max-w-7xl sm:max-w-xl relative h-[27rem]">
      <div class="absolute md:top-10 flex md:flex-row flex-col space-y-5">
        <Swiper
          class="swiper-application md:order-none order-last"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          :speed="2000"
          :touch-release-on-edges="true"
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
          :direction="'vertical'"
          :slides-per-view="1"
          :pagination="{
            clickable: true,
          }"
        >
          <SwiperSlide
            v-for="(obj, index) in staticData.application"
            :key="index"
            class="swiperSlideVetical cursor-default flex items-center"
            :index="index"
          >
            <div class="mx-2 md:mx-0">
              <div class="mt-9 mr-8 md:mt-0">
                <span> ۰{{ (index + 1).toLocaleString('fa-IR') }}</span>
                <span
                  class="font-black horizental-line before:dark:bg-white before:bg-black relative text-xl md:mb-4 mr-4 inline-block"
                >
                  {{ obj.mainTitle }}
                </span>
              </div>
              <div class="space-right md:justify-start grid grid-cols-2 gap-4 pt-8 md:pt-0 mr-5 md:mr-0">
                <div
                  v-for="(item, index) in obj.items"
                  :key="index"
                  class="flex md:flex-row hover:scale-105"
                >
                  <div class="flex items-center h-full">
                    <UIcon :name="item.icon" dynamic class="md:mb-0 mb-3 w-[30px] h-[30px] text-sky-600" loading="lazy" />
                  </div>
                  <div class="mr-2 text-right">
                    <span class="tracking-wide text-sm font-extrabold block">
                      {{ item.title }}
                    </span>
                    <span class="tracking-wide subtitle-size block">
                      {{ item.subTitle }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="flex items-center justify-center w-full h-36 md:h-auto md:pr-10 gap-x-4 xl:gap-x-10">
        <NuxtImg
          alt="اپلیکیشن ابرسو"
          format="webp"
          class="rounded-lg w-12 lg:w-14 xl:w-20"
          src="/image/home/map-mobile.png"
        />
        <NuxtImg
          alt="اپلیکیشن ابرسو"
          format="webp"
          class="rounded-lg w-60 md:w-[300px] lg:w-[270px] xl:w-[450px]"
          src="/image/home/map.png"
        />
        </div>
      </div>
      <div class="circle-gradient-2" />
    </section>
  </div>
</template>

<script setup lang="ts">
import staticData from '~/staticData.json'
</script>

<style scoped>
.bg-gardient-application {
  box-shadow: 0px 21px 103px rgba(0, 0, 0, 0.13);
  backdrop-filter: blur(6.5px);
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(
    -0.25turn,
    rgba(128, 128, 128, 0.397),
    rgb(128 128 128 / 6%),
    rgba(56, 2, 155, 0)
  );
  border-image-slice: 1;
  width: 100%;
}

.swiper-application {
  height: 17rem !important;
}

@media (min-width: 768px) {
  .space-right {
    padding-right: 80px;
  }
}

.horizental-line {
  padding-right: 60px;
  word-spacing: 3px;
}

.horizental-line:before {
  content: '';
  display: block;
  width: 50px;
  height: 1px;
  right: 0;
  top: 50%;
  position: absolute;
}

.subtitle-size {
  font-size: 10px;
}
</style>
