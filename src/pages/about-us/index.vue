<template>
  <div>
    <NuxtLayout name="sub-pages">
      <template #container>
        <div>
          <div>
            <NuxtImg
              src="/image/about-us/about-us.svg"
              alt="درباره ما"
              class="rounded-3xl w-full"
            />
          </div>
          <div
            class="flex items-center justify-center my-6 md:my-16 gap-x-2 md:gap-x-5"
          >
            <div
              class="w-12 md:w-52 h-0.5 bg-gradient-to-l from-transparent to-abr rounded-full"
            ></div>
            <h1 class="text-3xl md:text-4xl font-semibold text-center">
              {{ page?.title }}
            </h1>
            <div
              class="w-12 md:w-52 h-0.5 bg-gradient-to-r from-transparent to-abr rounded-full"
            ></div>
          </div>
          <div class="pb-20">
            <span class="block text-center leading-8 font-medium">
              شرکت ابرسو، با بهره‌گیری از دانش روز و فناوری‌های پیشرفته، در سال
              ۱۴۰۰ با هدف هوشمندسازی و افزایش امنیت در حوزه حمل و نقل تأسیس شد.
              ابرسو از تیمی متشکل از افراد هوشمند و خلاق تشکیل شده است که همواره
              به دنبال ارائه بهترین راهکارها برای مشتریان هستند. محصولات ما بر
              اساس فناوری‌های GPS و GSM طراحی شده‌اند تا امکان رصد و مدیریت
              آنلاین خودروها را فراهم کنند. این سامانه‌ها به مشتریان خانگی و
              کسب‌وکارها این امکان را می‌دهند که به صورت بهینه و کارآمد ناوگان
              خود را مدیریت کرده و از ایمنی و بهره‌وری بالاتری برخوردار شوند. ما
              معتقدیم که ارزش ما فراتر از فروش یک محصول است؛ با تحلیل و استفاده
              از داده‌های جمع‌آوری شده، ما به شما کمک می‌کنیم تا کیفیت و
              بهره‌وری خدمات خود را بهبود بخشید.
            </span>
          </div>
          <!-- <div>
            <div>
              <span class="block text-center text-xl sm:text-2xl font-semibold">به ما بپیوندید!</span>
            </div>
            <div class="my-10">
              <div class="flex justify-center items-center gap-x-8 sm:gap-x-16 py-5 pb-8 sm:pb-10">
                <div v-for="item in staticData.about.titleJobs" :key="item.id">
                  <div class="cursor-pointer" @click="indexRef = item.id">
                    <span
                      class="sm:text-xl sm:px-4 font-medium"
                      :class="{
                        'text-abr border-b border-abr pb-1.5 sm:rounded-md': indexRef === item.id,
                      }"
                      >{{ item.title }}</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="w-full h-[1px] bg-gradient-to-r from-transparent via-abr to-transparent rounded-full"
              ></div>
            </div>
            <div class="mt-10 mb-40">
              <div v-show="indexRef === item.id" v-for="item in staticData.about.titleJobs" :key="item.id">
                <div class="flex flex-wrap justify-center sm:gap-x-10 gap-y-8">
                  <div v-for="(job, index) in item.jobs" :key="index">
                    <div
                      class="flex justify-between items-center font-medium sm:text-xl border dark:border-zinc-700 rounded-full pr-4 sm:pr-8 p-4 sm:pl-6 py-2 sm:py-4 w-[310px] sm:w-[460px]"
                    >
                      <div class="flex flex-col gap-y-2">
                        <span class="block">
                          {{ job.title }}
                        </span>
                        <span class="block font-light">کرمان، تمام وقت</span>
                      </div>
                      <div>
                        <NuxtLink
                          :to="`/about-us/${job.title}`"
                          class="bg-abr/10 dark:bg-abr/30 active:bg-abr-500/30 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full border border-abr/50 font-light text-[14px] sm:text-[18px]"
                        >
                          بررسی بیشتر</NuxtLink
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <div class="flex flex-col items-center justify-center gap-y-10">
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
        <!-- <div
          class="flex flex-col md:flex-row md:space-x-6 md:space-x-reverse space-y-6 md:space-y-0 space-y-reverse justify-center"
        >
          <div class="order-1 md:order-none">
            <nuxt-img
              class="rounded-lg mx-auto md:m-0"
              width="300"
              height="400"
              :src="getStrapiMedia(page.blocks[0].image.data.attributes.url)"
            />
          </div>

          <div class="flex items-center">
            <div class="lg:w-[25rem] sm:text-justify space-y-2">
              <div
                class="md:text-right text-center text-xl leading-tight"
                v-html="page.blocks[0].paragraph"
              />
            </div>
          </div>
        </div>
        <ContentParagraph :class="`mt-10`" :meta-data="components[1]" /> -->
      </template>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import staticData from "~/staticData.json";

const route = useRoute() as any;

///
const { strapiComponents, getAllStrapiComponents } = useStrapiComponent();
await getAllStrapiComponents();
///
const { fetchPageBySlug } = await usePage();
const page = (await fetchPageBySlug(route.name)).value as any;

//page blocks
const componentsPage = page.blocks;
const components = useComponents(componentsPage, strapiComponents.value);
///

const indexRef = ref(1);
</script>

<style scoped></style>
