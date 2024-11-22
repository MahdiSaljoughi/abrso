<script setup lang="ts">
import staticData from '~/staticData.json'
</script>
<template>
  <section class="pt-3 mt-20 px-9 md:px-0 w-full mx-auto md:max-w-7xl sm:max-w-xl">
    <Swiper
      class="swiper-ability"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
      :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCreative]"
      :navigation="{
        prevEl: '.swiper-button-prev-ability',
        nextEl: '.swiper-button-next-ability',
      }"
      :slides-per-view="1"
      :space-between="10"
      :breakpoints="{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
      }"
    >
      <div class="is-circle swiper-button-prev swiper-button-prev-ability size-navigation-btn">
        <div class="rotate-180">
          <svg
            class="fill-black-tl dark:fill-arrow"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1274 6.67405C1.03442 6.58167 0.960622 6.47182 0.910265 6.35082C0.859909 6.22981 0.833984 6.10004 0.833984 5.96897C0.833984 5.83791 0.859909 5.70814 0.910265 5.58713C0.960622 5.46612 1.03442 5.35627 1.1274 5.2639L5.75929 0.652929C5.94814 0.474872 6.19901 0.377523 6.45853 0.381589C6.71806 0.385654 6.96576 0.490813 7.14894 0.674699C7.33212 0.858584 7.43633 1.10668 7.4394 1.36622C7.44247 1.62576 7.34416 1.87625 7.16538 2.06442L3.24127 5.96897L7.16336 9.87285C7.26157 9.96375 7.34046 10.0735 7.39531 10.1956C7.45015 10.3176 7.47984 10.4495 7.48259 10.5833C7.48533 10.7171 7.46109 10.8501 7.4113 10.9743C7.36151 11.0985 7.2872 11.2114 7.1928 11.3062C7.0984 11.4011 6.98585 11.4759 6.86188 11.5263C6.73791 11.5767 6.60505 11.6016 6.47125 11.5995C6.33745 11.5974 6.20544 11.5683 6.08311 11.5141C5.96079 11.4598 5.85065 11.3814 5.75929 11.2837L1.1274 6.67405Z"
            />
          </svg>
        </div>
      </div>
      <div class="is-circle swiper-button-next swiper-button-next-ability size-navigation-btn">
        <div>
          <svg
            class="fill-black-tl dark:fill-arrow"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1274 6.67405C1.03442 6.58167 0.960622 6.47182 0.910265 6.35082C0.859909 6.22981 0.833984 6.10004 0.833984 5.96897C0.833984 5.83791 0.859909 5.70814 0.910265 5.58713C0.960622 5.46612 1.03442 5.35627 1.1274 5.2639L5.75929 0.652929C5.94814 0.474872 6.19901 0.377523 6.45853 0.381589C6.71806 0.385654 6.96576 0.490813 7.14894 0.674699C7.33212 0.858584 7.43633 1.10668 7.4394 1.36622C7.44247 1.62576 7.34416 1.87625 7.16538 2.06442L3.24127 5.96897L7.16336 9.87285C7.26157 9.96375 7.34046 10.0735 7.39531 10.1956C7.45015 10.3176 7.47984 10.4495 7.48259 10.5833C7.48533 10.7171 7.46109 10.8501 7.4113 10.9743C7.36151 11.0985 7.2872 11.2114 7.1928 11.3062C7.0984 11.4011 6.98585 11.4759 6.86188 11.5263C6.73791 11.5767 6.60505 11.6016 6.47125 11.5995C6.33745 11.5974 6.20544 11.5683 6.08311 11.5141C5.96079 11.4598 5.85065 11.3814 5.75929 11.2837L1.1274 6.67405Z"
            />
          </svg>
        </div>
      </div>

      <SwiperSlide
        v-for="(obj, index) in staticData.abilities"
        :key="index"
        class="flex flex-col space-y-6 justify-center cursor-default p-2"
        :index="index"
      >
        <div
          class="bg-item shadow-light bg-white dark:bg-gradient-bg-1 dark:bg-[#2646779e] pr-4 pl-1 py-4 inline-flex w-11/12 mx-auto"
        >
          <nuxt-img
            alt=""
            class="hidden dark:block"
            :src="'/abilities' + obj[0].icon"
            width="24px"
            height="24px"
            loading="lazy"
            format="webp"
          />
          <nuxt-img
            alt=""
            class="dark:hidden block"
            :src="'/abilities/dark' + obj[0].icon"
            width="24px"
            height="24px"
          />
          <span class="text-base mr-3">{{ obj[0].title }}</span>
        </div>
        <div
          class="bg-item shadow-light bg-white dark:bg-gradient-bg-1 dark:bg-[#2646779e] pr-4 pl-1 py-4 inline-flex w-11/12 mx-auto"
        >
          <nuxt-img
            alt=""
            class="hidden dark:block"
            :src="'/abilities' + obj[1].icon"
            width="24"
            height="24"
          />
          <nuxt-img
            alt=""
            class="dark:hidden block"
            :src="'/abilities/dark' + obj[1].icon"
            width="24"
            height="24"
          />
          <span class="text-base mr-3">{{ obj[1].title }}</span>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.bg-item {
  align-items: center;
  position: relative;
  box-sizing: border-box;
  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 100px;
  box-shadow: inset 0px 4px 39px rgba(255, 255, 255, 0.03);
}

.shadow-light {
  box-shadow: 0px 1px 9px 3px rgba(0, 0, 0, 0.1);
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
  background: linear-gradient(90deg, rgba(22, 174, 205, 0.7) 0%, rgba(11, 146, 174, 0) 95.5%);
}

.swiper-ability {
  height: 15rem;
}

.size-navigation-btn {
  width: 48px !important;
  height: 48px !important;
}
</style>
