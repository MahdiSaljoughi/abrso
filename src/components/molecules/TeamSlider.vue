<script setup lang="ts">
import staticData from '~/staticData.json'
const isOpen = useState('modal person', () => false)
const selectedId = useState('modal id', () => 0)

const { data: members } = await useAsyncData(() =>
  $fetch(`${useRuntimeConfig().public.strapiURL}/api/aboutus?populate[teamMember][populate]=%2A`, {
    method: 'GET',
  }),
)

const modalOpen = (id: number) => {
  selectedId.value = id
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    document.body.classList.add('scroll-none-body')
  } else {
    document.body.classList.remove('scroll-none-body')
  }
}
</script>

<template>
  <section :class="`pb-12 md:pb-16`">
    <Swiper
      class="swiper-team"
      :modules="[SwiperNavigation]"
      :centered-slides="true"
      :slides-per-view="1"
      :loop-additional-slides="30"
      :loop="true"
      :round-lengths="true"
      :space-between="20"
      :navigation="{
        nextEl: '.swiper-button-next-customer',
        prevEl: '.swiper-button-prev-customer',
      }"
      :breakpoints="{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }"
    >
      <SwiperSlide
        v-for="(obj, index) in members.data.attributes.teamMember"
        :key="index"
        class=""
        :index="index"
      >
        <button
          class="cursor-pointer"
          @click.prevent="modalOpen(obj.id)"
        >
          <div class="flex-col flex items-center justify-start">
            <img
              class="rounded-lg mb-3 active-slide"
              :alt="obj.name"
              src=""
            >

            <p class="text-base dark:text-plantium-silver text-granite-black">
              {{ obj.name }}
            </p>

            <p class="text-xs dark:text-blackPallete-100 text-granite-black">
              {{ obj.field }}
            </p>
          </div>
        </button>
      </SwiperSlide>

      <div class="mt-20">
        <div class="is-circle swiper-button-next swiper-button-next-customer">
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

        <div class="is-circle swiper-button-prev swiper-button-prev-customer">
          <svg
            class="fill-black-tl dark:fill-arrow rotate-180"
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
    </Swiper>
  </section>

  <MoleculesModal
    :classes="
      isOpen
        ? ` 
                        visible
                        `
        : `invisible`
    "
    @close-modal="isOpen = false"
  >
    <MoleculesTeamMember :team="staticData.team[selectedId]" />
  </MoleculesModal>
</template>

<style scoped>
.active-slide {
  height: 356px;
  width: 260px;
}
</style>
