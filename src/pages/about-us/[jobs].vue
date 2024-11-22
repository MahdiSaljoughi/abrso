<template>
  <div>
    <NuxtLayout name="home-layout">
      <template #home>
        <OrganismsBackgroundSection>
          <div
            class="flex flex-col gap-y-14 md:gap-y-28 mx-4 md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-[300px]"
          >
            <div class="rounded-3xl">
              <div class="w-full text-center relative">
                <NuxtImg
                  src="/image/about-us/page[].png"
                  alt="img"
                  class="w-full rounded-3xl mt-10"
                />
                <span
                  class="absolute top-1/2 inset-0 block text-white font-semibold text-2xl"
                  >{{ route.params.jobs }}</span
                >
              </div>
            </div>
            <div class="flex justify-center mb-10">
              <div
                class="dark:border dark:border-zinc-800 w-full rounded-[48px] px-6 py-8 shadow-lg backdrop-blur-md"
              >
                <div>
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-2xl font-semibold block pt-2">{{
                        route.params.jobs
                      }}</span>
                    </div>
                    <div class="hidden sm:block">
                      <button
                        class="px-10 py-2.5 rounded-full dark:bg-abr-700 bg-abr text-white font-medium"
                      >
                        ارسال رزومه
                      </button>
                    </div>
                  </div>
                  <div class="mt-8">
                    <div class="mb-6">
                      <span class="text-lg font-semibold"
                        >مشخصات موقعیت شغلی</span
                      >
                    </div>
                    <div
                      class="flex flex-col md:flex-row justify-center items-center md:gap-x-2 xl:gap-x-3 2xl:gap-x-4 gap-y-6 md:gap-y-0"
                    >
                      <div
                        class="border border-abr-500/10 dark:border-abr-500/20 px-2 py-4 md:py-8 rounded-3xl text-center w-full md:w-[200px] md:h-[170px] xl:h-full xl:w-[300px] bg-gradient-to-b from-abr-400/10 to-transparent"
                      >
                        <span class="block pb-2 md:pb-8 font-semibold"
                          >روز و ساعت کاری</span
                        >
                        <span class="block font-medium text-[15px]"
                          >از شنبه تا پنجشنبه، ۹ الی ۵</span
                        >
                      </div>
                      <div
                        class="border border-abr-500/10 dark:border-abr-500/20 px-2 py-4 md:py-8 rounded-3xl text-center w-full md:w-[200px] md:h-[170px] xl:h-full xl:w-[300px] bg-gradient-to-b from-abr-400/10 to-transparent"
                      >
                        <span class="block pb-2 md:pb-8 font-semibold"
                          >نوع کار</span
                        >
                        <span class="block font-medium text-[15px]"
                          >تمام وقت</span
                        >
                      </div>
                      <div
                        class="border border-abr-500/10 dark:border-abr-500/20 px-2 py-4 md:py-8 rounded-3xl text-center w-full md:w-[200px] md:h-[170px] xl:h-full xl:w-[300px] bg-gradient-to-b from-abr-400/10 to-transparent"
                      >
                        <span class="block pb-2 md:pb-8 font-semibold"
                          >حقوق</span
                        >
                        <span class="block font-medium text-[15px]"
                          >توافقی</span
                        >
                      </div>
                      <div
                        class="border border-abr-500/10 dark:border-abr-500/20 px-2 py-4 md:py-8 rounded-3xl text-center w-full md:w-[200px] md:h-[170px] xl:h-full xl:w-[300px] bg-gradient-to-b from-abr-400/10 to-transparent"
                      >
                        <span class="block pb-2 md:pb-8 font-semibold"
                          >مزایا و تسهیلات</span
                        >
                        <span class="block font-medium text-[15px]"
                          >پاداش -ساعت کاری منعطف</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="mb-14">
                    <div class="mt-14 mb-4">
                      <span class="font-semibold">درباره شغل</span>
                    </div>
                    <div>
                      <span class="leading-8">
                        {{
                          `ما به دنبال یک ${route.params.jobs} متخصص در تیممون هستیم. اگر تمایل به یک فرصت شغلی پویا،
                        پر از چالش و رشد هستید، اینجا جای شماست. ما به دنبال افرادی هستیم که علاقه‌مند به ایجاد ایده‌های
                        نوآورانه و پیشرفت حرفه‌ای‌ هستند.`
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="mb-14">
                    <div class="mb-4">
                      <span class="font-semibold">شرح شغل و وظایف </span>
                    </div>
                    <div>
                      <div>
                        <span class="leading-8">
                          طراح گرافیک، مسلط به نرم‌افزارهای Photoshop،
                          Illustrator و ... دارای حداقل 4 سال سابقه کاری مرتبط
                          بسیار خلاق در طراحی و ایده‌پردازی مسلط به طراحی و
                          ترکیب المان‌های تصویری برای ایجاد عکس، پوستر، بروشور
                          و... برای انواع پست‌های وبلاگ، شبکه‌های اجتماعی، درج
                          در UI و... توانمند در طراحی تصاویر حرفه‌ای در کلاس
                          جهانی توانا به تولید و ارسال سریع پروژه‌ها در زمان
                          مقتضی داشتن روحیه کار تیمی، اخلاق حرفه‌ای و
                          وظیفه‌شناسی توانایی مدیریت زمان و ارسال به‌موقع
                          پروژه‌ها داشتن انگیزه و اشتیاق یادگیری ساعت کاری
                          منعطف  حقوق و مزایا توافقی
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="mb-14">
                    <div class="mb-4">
                      <span class="font-semibold">شرایط احزار شغل</span>
                    </div>
                    <div class="relative pr-3 leading-7">
                      <span class="block toop">{{ "سن 20 - 40 سال" }}</span>
                      <span class="block toop">{{ "سطح زبان متوسط" }}</span>
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <button
                      class="px-24 sm:px-32 py-2.5 rounded-full dark:bg-abr-700 bg-abr text-white font-medium"
                    >
                      ارسال رزومه
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col items-center justify-center gap-y-10 pb-20"
            >
              <span class="text-2xl font-medium">با ما در ارتباط باشید.</span>
              <div
                class="footer-social-media flex justify-center space-x-8 space-x-reverse mb-10"
              >
                <NuxtLink
                  v-for="obj in staticData.social_media"
                  :key="obj.name"
                  :href="obj.address"
                >
                  <nuxt-img
                    :aria-label="obj.name"
                    alt="social-media"
                    :src="`/social-media/${obj.name}.svg`"
                    class="hover:scale-105 hidden dark:block"
                    width="30px"
                  />
                  <nuxt-img
                    :aria-label="obj.name"
                    alt="social-media"
                    :src="`/social-media/dark/${obj.name}.svg`"
                    class="hover:scale-105 dark:hidden"
                    width="30px"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </OrganismsBackgroundSection>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import staticData from "~/staticData.json";
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
const isOpen = ref(false);

const schema = object({
  full_name: string().required("نام و نام خانوادگی الزامی است."),
  phone: string().required("شماره تماس الزامی است."),
  email: string().email("ایمیل نامعتبر است."),
  linkedin: string(),
  upload: Object().required("آپلود رزومه الزامی است."),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  full_name: undefined,
  phone: undefined,
  email: undefined,
  linkedin: undefined,
  upload: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}

const route = useRoute();

onMounted(() => {
  useSeoMeta({
    title: `${route.params.jobs}`,
  });
});
</script>

<style scoped>
.toop::before {
  content: "";
  position: absolute;
  right: 0px;
  margin-top: 8px;
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 100%;
}

html.dark .toop::before {
  content: "";
  position: absolute;
  right: 0px;
  margin-top: 8px;
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 100%;
}
</style>
