<template>
  <section :class="`w-full px-4 md:px-10 pb-20 md:pb-32`">
    <span class="text-2xl md:text-3xl font-semibold flex justify-center py-10 md:pt-32 md:pb-16"
      >تجارب موفق ردیاب</span
    >
    <Swiper
      class="swiper-customer"
      :modules="[SwiperNavigation, SwiperAutoplay, SwiperEffectCreative]"
      :centered-slides="true"
      :slides-per-view="1"
      :loop-additional-slides="30"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :round-lengths="true"
      :navigation="{
        prevEl: '.swiper-button-next-customer',
        nextEl: '.swiper-button-prev-customer',
      }"
      :breakpoints="{
        100: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 2,
        },
        1600: {
          slidesPerView: 3,
        },
      }"
    >
      <SwiperSlide v-for="fild in staticData.case_study" :key="fild.id">
        <div
          class="dark:hidden backgrond border border-abr-200 rounded-[48px] p-4 pb-10 w-full md:w-auto md:h-[250px] md:mx-10"
        >
          <div class="flex items-center gap-x-5 mb-5">
            <NuxtImg :src="fild.image" width="80" alt="پروفایل" class="rounded-full" />
            <span class="text-xl">{{ fild.title }}</span>
          </div>
          <div>
            <span class="leading-7">{{ fild.matn }}</span>
          </div>
        </div>
        <div
          class="hidden dark:block backgrond-dark border border-abr-950 rounded-[48px] p-4 pb-10 w-full md:w-auto md:h-[250px] md:mx-10"
        >
          <div class="flex items-center gap-x-5 mb-5">
            <NuxtImg :src="fild.image" width="80" alt="پروفایل" class="rounded-full" />
            <span class="text-xl">{{ fild.title }}</span>
          </div>
          <div>
            <span class="leading-7">{{ fild.matn }}</span>
          </div>
        </div>
      </SwiperSlide>
      <div class="mt-20 h-1 relative">
        <div class="is-circle swiper-button-next swiper-button-next-customer">
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
        <div class="is-circle swiper-button-prev swiper-button-prev-customer">
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
      </div>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import staticData from '~/staticData.json'
</script>

<style scoped>
.swiper-customer {
  height: 100%;
}

@media (max-width: 768px) {
  .swiper-customer {
    height: 100%;
  }
}

.backgrond {
  background: rgb(0, 138, 174);
  background: linear-gradient(
    90deg,
    rgba(0, 138, 174, 0) 0%,
    rgba(0, 138, 174, 0) 40%,
    rgba(0, 138, 174, 0.1) 100%
  );
}
.backgrond-dark {
  background: rgb(38, 71, 119);
  background: linear-gradient(90deg, rgba(38, 71, 119, 0.3) 0%, rgba(0, 0, 0, 1) 100%);
}
</style>
