<template>
  <NuxtLayout name="home-layout">
    <template #home>
      <OrganismsBackgroundSection>
        <div class="py-10 mx-4 2xl:mx-40 flex flex-col items-center justify-center gap-y-10">
          <div class="py-6">
            <h1 class="text-center text-4xl font-bold">تماس با ما</h1>
          </div>
          <div
            class="backdrop-blur-[3px] shadow-lg dark:bg-zinc-100/0 border border-sky-400/20 w-full rounded-3xl mb-10"
          >
            <div
              class="flex flex-col gap-y-10 md:gap-y-0 md:flex-row items-center justify-between xl:gap-x-10 p-6 md:p-8"
            >
              <div>
                <div class="border-b border-sky-400/20 pb-6">
                  <h2 class="text-xl">شرکت راهکار صنعت</h2>
                </div>
                <div
                  class="border-b border-sky-400/20 flex justify-between items-center gap-x-20 xl:gap-x-80 py-8"
                >
                  <div>
                    <span>شمــــــاره‌ تلفن</span>
                  </div>
                  <div>
                    <span>034-9109-0485</span>
                  </div>
                </div>
                <div
                  class="border-b border-sky-400/20 flex justify-between items-center gap-x-20 xl:gap-x-80 py-8"
                >
                  <div>
                    <span>آدرس‌ ایمیل</span>
                  </div>
                  <div>
                    <span>info@rahkarsanat.ir</span>
                  </div>
                </div>
                <div
                  class="border-b border-sky-400/20 flex justify-between items-center gap-x-20 xl:gap-x-80 py-8"
                >
                  <div>
                    <span>آدرس دفتر مرکزی</span>
                  </div>
                  <div>
                    <span>کرمان، میدان قرنی، ساختمان پدر</span>
                  </div>
                </div>
                <div class="flex justify-between items-center gap-x-8 sm:gap-x-20 xl:gap-x-80 pt-8">
                  <div>
                    <span>ساعات کاری شرکت</span>
                  </div>
                  <div>
                    <span class="block text-center w-52"
                      >شنبه تا چهارشنبه، 8 صبح تا 5 عصرپنجشنبه‌ها، ۸ الی ۱</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[400px] xl:w-[600px] 2xl:w-[800px]"
              >
                <ClientOnly>
                  <MarkerView
                    class="rounded-2xl"
                    :zoom="14"
                    :coordinates="[57.07246983674205, 30.284776482979687]"
                  />
                </ClientOnly>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center gap-y-10">
            <span class="text-2xl font-medium">با ما در ارتباط باشید.</span>
            <div class="footer-social-media flex justify-center space-x-8 space-x-reverse mb-10">
              <NuxtLink v-for="obj in staticData.social_media" :key="obj.name" :href="obj.address">
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
          <div class="flex flex-col items-center justify-center gap-y-10 pb-20 md:pb-40">
            <div>
              <span class="text-2xl">فرم درخواست تماس</span>
            </div>
            <div
              class="backdrop-blur-[3px] sm:shadow-lg dark:bg-zinc-800/10 sm:border border-sky-400/20 rounded-2xl sm:p-8 w-[280px] sm:w-[400px] md:w-[600px]"
            >
              <UForm ref="form" :schema="schema" :state="state" class="space-y-8" @submit="onSubmit">
                <UFormGroup name="full_name" label="نام و نام خانوادگی">
                  <UInput
                    v-model="state.full_name"
                    color="abr"
                    :ui="{ rounded: 'rounded-xl' }"
                    placeholder="نام و نام خانوادگی"
                    size="xl"
                    colro="primary"
                  />
                </UFormGroup>
                <UFormGroup name="email" label="ایمیل">
                  <UInput
                    v-model="state.email"
                    type="email"
                    color="abr"
                    placeholder="ایمیل ( اختیاری )"
                    size="xl"
                    :ui="{ rounded: 'rounded-xl' }"
                  />
                </UFormGroup>
                <UFormGroup name="phone" label="شماره تماس">
                  <UInput
                    v-model="state.phone"
                    placeholder="شماره تماس"
                    color="abr"
                    size="xl"
                    :ui="{ rounded: 'rounded-xl' }"
                  />
                </UFormGroup>
                <UFormGroup name="subject" label="انتخاب موضوع">
                  <USelectMenu
                    v-model="state.subject"
                    placeholder="انتخاب موضوع"
                    :options="options"
                    size="xl"
                    color="abr"
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
                <div class="flex justify-center items-center">
                  <UButton
                    type="submit"
                    :ui="{ rounded: 'rounded-full' }"
                    class="px-20 md:px-14 py-2"
                    color="abr"
                  >
                    ثبت و ادامه
                  </UButton>
                </div>
              </UForm>
            </div>
          </div>
        </div>
      </OrganismsBackgroundSection>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import staticData from '~/staticData.json'
const a = useAppConfig()

import { object, string, type InferType } from 'yup'

const options = [
  { label: 'درخواست خدمات', value: 'option-1' },
  { label: 'درخواست پشتیبانی', value: 'option-2' },
  { label: 'اطلاعات بیشتر', value: 'option-3' },
  { label: 'مشاوره خرید', value: 'option-3' },
  { label: 'سایر', value: 'option-4' },
]

const state = reactive({
  full_name: undefined,
  email: undefined,
  phone: undefined,
  subject: undefined,
  body: undefined,
})

const schema = object({
  full_name: string().required('نام و نام خانوادگی الزامی است.'),
  email: string().email('ایمیل معتبر نمی باشد.'),
  phone: string().min(11, 'باید حداقل 11 کاراکتر باشد.').required('شماره تماس الزامی است.'),
  subject: object().required('انتخاب موضوع الزامی است.'),
  body: string().required('متن پیام الزامی است.'),
})

const form = ref()

const loading = ref(false)

const toast = useToast()

async function onSubmit() {
  loading.value = true
  const dataPost = await $fetch('https://api.abrso.ir/support', {
    method: 'POST',
    body: state,
  })
    .then(() => {
      loading.value = false
      toast.add({ title: 'با موفقیت ثبت شد.', color: 'green' })
    })
    .catch(() => {
      loading.value = false
      toast.add({ title: 'لطفا مجددا تلاش کنید.', color: 'red' })
    })
  state.full_name = undefined
  state.email = undefined
  state.phone = undefined
  state.subject = undefined
  state.body = undefined
}
</script>
