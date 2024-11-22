<template>
  <NuxtLayout name="home-layout">
    <template #home>
      <OrganismsBackgroundSection>
        <AtomsVerticalSocialMedia class="hidden xl:block" />
        <UContainer>
          <div class="flex flex-col gap-y-16 md:gap-y-28 items-center justify-center mt-10 md:mx-16">
            <div>
              <UCarousel
                ref="carouselRef"
                dir="ltr"
                :items="image"
                :ui="{
                  item: 'basis-full',
                  container: 'rounded',
                }"
                arrows
                class="relative"
              >
                <template #default="{ item }">
                  <div class="mx-4 md:mx-auto">
                    <NuxtImg :src="item" class="w-full" :alt="item" />
                  </div>
                </template>
                <template #prev="{ onClick, disabled }">
                  <div
                    :disabled="disabled"
                    @click="onClick"
                    class="absolute top-[43%] sm:top-[47%] -left-3 md:-left-5 cursor-pointer flex justify-center items-center"
                    :class="carouselRef?.page === 1 ? 'hidden' : ''"
                  >
                    <UIcon name="i-heroicons-chevron-left-solid" class="size-6" />
                  </div>
                </template>

                <template #next="{ onClick, disabled }">
                  <div
                    :disabled="disabled"
                    @click="onClick"
                    class="absolute top-[43%] sm:top-[47%] -right-3 md:-right-5 cursor-pointer flex justify-center items-center"
                    :class="carouselRef?.page === carouselRef?.pages ? 'hidden' : ''"
                  >
                    <UIcon name="i-heroicons-chevron-right-solid" class="size-6" />
                  </div>
                </template>
              </UCarousel>
            </div>
            <div
              class="flex items-center justify-between border border-abr-600/50 bg-abr/10 backdrop-blur-sm rounded-3xl w-full px-4 py-6 md:p-10"
            >
              <div class="flex flex-col gap-y-4 md:gap-y-6 items-center justify-center">
                <span class="text-xl font-bold block text-wrap">ردیــاب ابرســو STS300</span>
                <!-- <div class="flex items-center justify-center gap-x-2 text-sm font-medium">
                  <UIcon name="i-heroicons-star-solid" class="text-abr size-6 mb-1" />
                  <span class="inline md:hidden">۰ امتیاز</span>
                  <span class="hidden md:inline">۰ امتیاز (از ۰ رای)</span>
                  <span>|</span>
                  <span>۰ نظر</span>
                </div> -->
              </div>
              <div class="flex flex-col items-center justify-center gap-y-6">
                <div class="flex items-center gap-x-2">
                  <span class="text-2xl font-semibold">۳,۲۰۰,۰۰۰</span>
                  <span class="text-sm font-medium">تومان</span>
                </div>
                <div>
                  <button
                    class="px-4 text-sm md:text-base md:px-10 bg-abr-600 dark:bg-abr/50 py-2 rounded-full border border-sky-600/50 hover:scale-105 font-medium text-white"
                  >
                    خرید با یک کلیک
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center gap-y-10 w-full md:backdrop-blur-sm">
              <h2 class="text-xl font-semibold">مشخصات نرم‌افزار اختصاصی</h2>
              <div class="flex flex-col gap-y-20 w-full">
                <template v-for="(item, index1) in data.car_tracker_software" :key="item.id">
                  <div v-show="select === index1" class="flex items-center justify-center gap-x-10 w-full">
                    <NuxtImg
                      :src="item.src_mobile"
                      :alt="item.alt"
                      class="w-[170px] shadow-md rounded-[32px]"
                    />
                    <NuxtImg
                      :src="item.src"
                      :alt="item.alt"
                      class="w-[800px] rounded-[32px] shadow-md hidden md:block"
                    />
                  </div>
                </template>
                <div class="w-full md:h-72">
                  <div>
                    <div class="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-20">
                      <div v-for="(item, index) in data.car_tracker_software" :key="item.id">
                        <button
                          @click="select = index"
                          class="border-abr-600/80 rounded-lg px-4 md:px-6 py-2 font-semibold w-32 md:w-auto"
                          :class="select === index ? 'border-b-2' : ''"
                        >
                          {{ item.title }}
                        </button>
                      </div>
                    </div>
                    <div
                      class="my-4 w-full h-[1.6px] bg-gradient-to-r from-transparent via-[#008AAE] to-trafrom-transparent rounded-full"
                    ></div>
                    <div v-for="(item, index) in data.car_tracker_software" :key="item.id">
                      <div
                        v-show="select === index"
                        class="flex flex-wrap items-center justify-center w-full gap-y-10 py-4"
                      >
                        <div v-for="contents in item.content" :key="contents.id">
                          <div
                            class="border-dashed border-x border-abr-600 dark:border-abr-600/80 flex flex-col justify-center items-center gap-y-2 w-32 px-4 h-20 md:w-80"
                          >
                            <UIcon dynamic :name="contents.icon" class="size-5 md:size-6" />
                            <span class="block font-medium text-center text-sm md:text-base">
                              {{ contents.title }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center gap-y-10 w-full bg-img-dark md:mt-16">
              <h2 class="text-xl font-semibold">مشخصات سخت‌افزار اختصاصی</h2>
              <div class="flex flex-col md:flex-row gap-x-10 items-center justify-between w-full">
                <div v-for="content in data.car_tracker_hardware" :key="content.id" class="w-full">
                  <div v-for="item in content.contents" :key="item.id">
                    <div
                      class="flex justify-between px-10 py-4 rounded-xl"
                      :class="item.id === 1 || item.id === 3 ? 'bg-abr/10 dark:bg-zinc-400/10' : ''"
                    >
                      <span class="font-bold">
                        {{ item.title }}
                      </span>
                      <span class="font-medium">
                        {{ item.description }}
                      </span>
                    </div>
                    <div
                      class="w-full h-[1px] bg-gradient-to-r from-transparent via-[#008AAE] to-trafrom-transparent rounded-full"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col md:flex-row gap-y-10 w-full items-center justify-center gap-x-10 md:gap-x-96"
            >
              <div class="flex items-center justify-center flex-col">
                <NuxtImg src="/image/car-tracker/garanti.png" alt="گارانتی۱۲ ماهه" class="w-52" />
                <span class="text-lg font-semibold block text-center">گارانتی۱۲ ماهه</span>
              </div>
              <div class="flex items-center justify-center flex-col">
                <NuxtImg src="/image/car-tracker/24h.png" alt="پشتیبانی ۲۴ ساعته" class="w-32 pb-10" />
                <span class="text-lg font-semibold block text-center">پشتیبانی ۲۴ ساعته</span>
              </div>
            </div>
            <div class="w-full">
              <span class="block text-center font-semibold text-xl mb-6 md:mb-10"
                >ویـدیـو برســی ردیـاب ابرســو</span
              >
              <div class="h_iframe-aparat_embed_frame">
                <span style="display: block; padding-top: 57%"></span>
                <iframe
                  src="https://www.aparat.com/video/video/embed/videohash/xgtlpy2/vt/frame"
                  style="border-radius: 24px"
                  allowFullScreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                ></iframe>
              </div>
            </div>
            <div
              class="flex flex-col gap-y-10 lg:flex-row items-center justify-between border border-sky-600/50 bg-abr/10 backdrop-blur-sm rounded-3xl w-full px-4 py-6 md:p-10"
            >
              <div class="block lg:hidden">
                <span class="text-xl font-bold block">ردیــاب ابرســو STS300</span>
                <!-- <div class="flex items-center justify-center gap-x-2 text-sm font-medium mt-4">
                  <UIcon name="i-heroicons-star-solid" class="text-abr size-6 mb-1" />
                  <span>۰ امتیاز (از ۰ رای)</span>
                  <span>|</span>
                  <span>۰ نظر</span>
                </div> -->
              </div>
              <div class="wfull">
                <span class="font-semibold block mb-10 leading-7">
                  ردیاب خودرو ابرسو مدل STS300 با فناوری‌های پیشرفته و ویژگی‌های کاربردی، راه‌حلی کامل و قابل
                  اعتماد برای حفاظت از وسایل نقلیه‌ی شماست. ردیاب ابرسو به راحتی بر روی انواع خودروهای داخلی و
                  خارجی قابل نصب است و با قابلیت‌ها پیشرفته‌ای مانند ردیابی هوشمند لحظه‌ای، نمایش موقعیت و
                  وضعیت خودرو خاموش کردن از راه دور، ارسال‌هشدار‌های امنیتی و ... وسیله‌ی نقلیه شما را از خطر
                  سرقت مصون می‌دارد. همچنین نرم‌افزار اختصاصی ابرسو برای دستگاه‌های اندروید، iOS و وب اپلیکیشن
                  در دسترس است. در امان باشید.
                </span>
                <span class="block font-semibold toop pr-6">یک ســــــال اشتــــــراک رایگــــــــان</span>
                <span class="block font-semibold toop pr-6">نصب آسان بر روی انواع خودرو</span>
                <span class="block font-semibold toop pr-6">ذخیره‌ســــازی آفلایــــــن تا ۱۵ روز</span>
                <span class="block font-semibold toop pr-6">پشتیبانی ۲۴ ساعته ۷ روز هفته</span>
                <span class="block font-semibold toop pr-6">گارانتی ۱۲ ماهــه سخــــــت‌افــــــزار</span>
                <span class="block font-semibold toop pr-6"
                  >دارای نرم‌افزار اختصاصی اندروید، iOS و وب اپلیکیشن</span
                >
              </div>
              <div class="flex flex-col gap-y-4 items-center lg:hidden w-full">
                <div
                  class="w-full h-[1px] bg-gradient-to-r from-transparent via-[#008AAE] to-trafrom-transparent rounded-full"
                ></div>
                <div class="flex flex-col items-center justify-center gap-y-4">
                  <div class="flex items-center gap-x-2">
                    <span class="text-2xl font-semibold">۳,۲۰۰,۰۰۰</span>
                    <span class="text-sm font-medium">تومان</span>
                  </div>
                  <div>
                    <button
                      class="px-6 md:px-10 bg-abr-600 dark:bg-abr/50 py-2 rounded-full border border-sky-600/50 hover:scale-105 font-medium text-white"
                    >
                      خرید با یک کلیک
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden lg:flex flex-col items-center gap-y-32 mr-20 w-[1200px] xl:w-full">
                <div>
                  <span class="text-xl font-bold block">ردیــاب ابرســو STS300</span>
                  <div
                    class="w-full my-4 h-[1px] bg-gradient-to-r from-transparent via-[#008AAE] to-trafrom-transparent rounded-full"
                  ></div>
                  <!-- <div class="flex items-center justify-center gap-x-2 text-sm font-medium">
                    <UIcon name="i-heroicons-star-solid" class="text-abr size-6 mb-1" />
                    <span>۰ امتیاز (از ۰ رای)</span>
                    <span>|</span>
                    <span>۰ نظر</span>
                  </div> -->
                </div>
                <div class="flex flex-col items-center justify-center gap-y-6">
                  <div class="flex items-center gap-x-2">
                    <span class="text-2xl font-semibold">۳,۲۰۰,۰۰۰</span>
                    <span class="text-sm font-medium">تومان</span>
                  </div>
                  <div>
                    <button
                      class="px-6 md:px-10 bg-abr-600 dark:bg-abr/50 py-2 rounded-full border border-sky-600/50 hover:scale-105 font-medium text-white"
                    >
                      خرید با یک کلیک
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="flex flex-col-reverse md:flex-row items-center justify-center gap-x-10">
              <div
                class="flex items-center justify-center flex-col gap-y-4 border border-abr-600/50 bg-abr/10 backdrop-blur-sm rounded-3xl w-full px-12 py-8"
              >
                <div class="flex items-center justify-center gap-x-2">
                  <UIcon name="i-heroicons-star-solid" class="text-abr size-6 mb-1" />
                  <span class="font-medium">{{ '0 امتیاز از 0' }}</span>
                </div>
                <div class="flex items-center gap-x-2">
                  <UIcon name="i-heroicons-star-solid" class="dark:text-abr-50 size-5 mb-1" />
                  <UIcon name="i-heroicons-star-solid" class="dark:text-abr-50 size-5 mb-1" />
                  <UIcon name="i-heroicons-star-solid" class="dark:text-abr-50 size-5 mb-1" />
                  <UIcon name="i-heroicons-star-solid" class="dark:text-abr-50 size-5 mb-1" />
                  <UIcon name="i-heroicons-star-solid" class="dark:text-abr-50 size-5 mb-1" />
                </div>
                <button
                  class="px-10 py-2 bg-abr dark:bg-abr/50 text-white border border-abr-600 rounded-full"
                  @click="isOpen = true"
                >
                  ثبت نظر و امتیاز
                </button>
              </div>
              <div class="flex flex-col items-center gap-y-4 justify-center mb-6">
                <span class="font-medium md:text-lg">نظرات و دیدگاه‌ها</span>
                <div
                  class="flex justify-between gap-x-20 items-center border border-abr rounded-full px-4 py-2 dark:bg-zinc-800"
                >
                  <div class="flex flex-col">
                    <span>{{ 'name' }}</span>
                    <span>{{ 'coment' }}</span>
                  </div>
                  <div>{{ 'star' }}</div>
                </div>
              </div>
            </div>
            <UModal v-model="isOpen">
              <div class="px-6 py-10">
                <span class="block text-2xl font-semibold mb-2">نظر و امتیاز من</span>
                <span class="block font-medium text-sm mb-10 mr-2"
                  >دیدگاه خود را درباره‌ی ردیاب ابرسو ثبت کنید.</span
                >
                <div class="flex flex-col justify-center items-center">
                  <span class="text-sm"> میانگین امتیازدهی کاربران: امتیاز ۰ از ۵ از میان ۰رای</span>
                  <Rate v-model="rate" />
                </div>
                <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                  <UFormGroup label="نام و نام خانوادگی" name="full_name">
                    <UInput
                      v-model="state.full_name"
                      type="text"
                      size="xl"
                      color="abr"
                      placeholder="نام و نام خانوادگی"
                      :ui="{ rounded: 'rounded-xl' }"
                    />
                  </UFormGroup>
                  <UFormGroup label="شماره تماس" name="phone">
                    <UInput
                      v-model="state.phone"
                      type="text"
                      size="xl"
                      color="abr"
                      placeholder="شماره تماس"
                      :ui="{ rounded: 'rounded-xl' }"
                    />
                  </UFormGroup>
                  <UFormGroup name="body" label="متن پیام">
                    <UTextarea
                      v-model="state.body"
                      placeholder="متن پیام"
                      size="xl"
                      color="abr"
                      :ui="{ rounded: 'rounded-xl' }"
                    />
                  </UFormGroup>
                  <div class="flex items-center justify-center">
                    <UButton type="submit" color="abr" class="rounded-full px-16 text-lg font-medium"
                      >ثبت</UButton
                    >
                  </div>
                </UForm>
              </div>
            </UModal> -->
            <div class="w-full h-[30rem] cursor-default relative">
              <AtomsWordAnimation :text="'BETTER WAY'" />
            </div>
          </div>
        </UContainer>
      </OrganismsBackgroundSection>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import data from '~/staticData.json'
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const select = ref(0)

const rate = ref(0)

const image = [
  '/image/car-tracker/02.png',
  '/image/car-tracker/01.png',
  '/image/car-tracker/03.png',
  '/image/car-tracker/04.png',
  '/image/car-tracker/05.png',
  '/image/car-tracker/06.png',
  '/image/car-tracker/07.png',
  '/image/car-tracker/08.png',
]
const carouselRef = ref()

const isOpen = ref(false)

const schema = object({
  full_name: string().required('نام و نام خانوادگی اجباری است.'),
  phone: string().required('شماره تماس اجباری است.'),
  body: string().required('متن پیام اجباری است.'),
})

type Schema = InferType<typeof schema>

const state = reactive({
  full_name: undefined,
  phone: undefined,
  body: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

<style scoped>
.h_iframe-aparat_embed_frame {
  position: relative;
}
.h_iframe-aparat_embed_frame .ratio {
  display: block;
  width: 100%;
  height: auto;
}
.h_iframe-aparat_embed_frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.toop::before {
  content: '';
  position: absolute;
  margin-right: -20px;
  margin-top: 8px;
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 100%;
}

html.dark .toop::before {
  content: '';
  position: absolute;
  margin-right: -20px;
  margin-top: 8px;
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 100%;
}
</style>
