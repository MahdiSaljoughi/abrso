<template>
  <NuxtLayout name="sub-pages">
    <template #container>
      <!-- <div class="border-gradient-gray w-full mx-auto md:w-96">
        <div class="space-y-7">
          <component :is="comp.name" v-for="comp in components" :key="comp" :meta-data="comp" />
        </div>
      </div> -->
      <div class="flex flex-col gap-y-10 items-center justify-center">
        <h1 class="text-3xl font-bold text-center">دریافت نمایندگی</h1>
        <UForm
          ref="form"
          :schema="schema"
          :state="state"
          @submit="onSubmit"
          class="flex flex-col items-center justify-center gap-y-10"
        >
          <div
            class="flex flex-col items-center justify-center gap-y-8 backdrop-blur-[3px] sm:shadow-lg dark:bg-zinc-800/10 sm:border border-sky-400/20 rounded-2xl sm:p-8"
          >
            <div class="flex flex-col sm:flex-row items-center gap-y-8 sm:gap-y-0 sm:gap-x-5">
              <UFormGroup name="full_name" label="نام و نام خانوادگی">
                <UInput
                  color="abr"
                  v-model="state.full_name"
                  placeholder="نام و نام خانوادگی"
                  size="xl"
                  :ui="{ rounded: 'rounded-xl' }"
                  class="w-72 sm:w-48 md:w-[300px] lg:w-[450px] xl:w-[500px]"
                />
              </UFormGroup>
              <UFormGroup name="phone" label="شماره تماس">
                <UInput
                  color="abr"
                  v-model="state.phone"
                  placeholder="شماره تماس"
                  size="xl"
                  :ui="{ rounded: 'rounded-xl' }"
                  class="w-72 sm:w-48 md:w-[300px] lg:w-[450px] xl:w-[500px]"
                />
              </UFormGroup>
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-y-8 sm:gap-y-0 sm:gap-x-5">
              <UFormGroup name="address" label="آدرس">
                <UInput
                  color="abr"
                  v-model="state.address"
                  placeholder="آدرس"
                  size="xl"
                  :ui="{ rounded: 'rounded-xl' }"
                  class="w-72 sm:w-48 md:w-[300px] lg:w-[450px] xl:w-[500px]"
                />
              </UFormGroup>
              <UFormGroup name="email" label="ایمیل">
                <UInput
                  color="abr"
                  v-model="state.email"
                  placeholder="ایمیل  ( اختیاری )"
                  size="xl"
                  :ui="{ rounded: 'rounded-xl' }"
                  class="w-72 sm:w-48 md:w-[300px] lg:w-[450px] xl:w-[500px]"
                />
              </UFormGroup>
            </div>
          </div>
          <div
            class="flex flex-col items-center xl:items-start justify-center gap-y-8 backdrop-blur-md sm:shadow-lg dark:bg-zinc-800/10 sm:border border-sky-400/20 rounded-2xl sm:p-8"
          >
            <UFormGroup name="service_area" label="منطقه خدماتی">
              <UInput
                color="abr"
                v-model="state.service_area"
                placeholder="منطقه خدماتی"
                size="xl"
                :ui="{ rounded: 'rounded-xl' }"
                class="w-72 sm:w-[420px] md:w-[620px] lg:w-[910px] xl:w-[1020px]"
              />
            </UFormGroup>
            <p class="-mt-2 xl:-mt-4 text-sm text-zinc-500">
              ( مناطق جغرافیایی که می‌توانید در آن‌ها خدمات نصب را ارائه دهید )
            </p>
            <UFormGroup name="experience" label="تجربه و سابقه‌کاری">
              <UInput
                color="abr"
                v-model="state.experience"
                placeholder="تجربه و سابقه‌کاری"
                size="xl"
                :ui="{ rounded: 'rounded-xl' }"
                class="w-72 sm:w-[420px] md:w-[620px] lg:w-[910px] xl:w-[1020px]"
              />
            </UFormGroup>
            <UFormGroup name="tools" label="تجهیزات و امکانات">
              <UInput
                color="abr"
                v-model="state.tools"
                placeholder="تجهیزات و امکانات ( اختیاری )"
                size="xl"
                :ui="{ rounded: 'rounded-xl' }"
                class="w-72 sm:w-[420px] md:w-[620px] lg:w-[910px] xl:w-[1020px]"
              />
            </UFormGroup>
            <UFormGroup name="certificates" label="گواهی‌نامه‌ها و مجوزها">
              <UInput
                color="abr"
                v-model="state.certificates"
                placeholder="گواهی‌نامه‌ها و مجوزها ( اختیاری )"
                size="xl"
                :ui="{ rounded: 'rounded-xl' }"
                class="w-72 sm:w-[420px] md:w-[620px] lg:w-[910px] xl:w-[1020px]"
              />
            </UFormGroup>
            <p class="mb-4 md:mb-0 -mt-2 xl:-mt-4 text-sm text-zinc-500">
              ( هرگونه گواهینامه یا مجوز رسمی مرتبط با نصب و تعمیرات سیستم‌های الکترونیکی خودرو )
            </p>
          </div>
          <div class="flex justify-center items-center">
            <UButton
              :loading="loading"
              type="submit"
              :ui="{ rounded: 'rounded-full' }"
              color="abr"
              class="px-20 md:px-14 py-2"
              >ثبت و ادامه</UButton
            >
          </div>
        </UForm>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
// const route = useRoute() as any
///
// const { strapiComponents, getAllStrapiComponents } = useStrapiComponent()
// await getAllStrapiComponents()
///
// const { fetchPageBySlug } = await usePage()
// const page = (await fetchPageBySlug(route.name)).value as any

//page blocks
// const componentsPage = page.blocks
// const components = useComponents(componentsPage, strapiComponents.value)

import { object, string, type InferType } from 'yup'

const options = [
  { label: 'درخواست خدمات', value: 'option-1' },
  { label: 'درخواست پشتیبانی', value: 'option-2' },
  { label: 'اطلاعات بیشتر', value: 'option-3' },
  { label: 'سایر', value: 'option-3' },
]

const state = reactive({
  full_name: undefined,
  phone: undefined,
  address: undefined,
  email: undefined,
  experience: undefined,
  tools: undefined,
  service_area: undefined,
  certificates: undefined,
})

const schema = object({
  full_name: string().required('نام و نام خانوادگی الزامی است.'),
  phone: string().min(11, 'باید حداقل 11 کاراکتر باشد.').required('شماره تماس الزامی است.'),
  address: string().required('آدرس الزامی است.'),
  email: string().email('ایمیل معتبر می باشد.'),
  experience: string().required('تجربه و سابقه کاری الزامی است.'),
  tools: string(),
  service_area: string().required('منطقه خدماتی الزامی است.'),
  certificates: string(),
})

// type Schema = InferType<typeof schema>

const form = ref()

const loading = ref(false)

const toast = useToast()

async function onSubmit() {
  loading.value = true
  const dataPost = await $fetch('https://api.abrso.ir/agency', {
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
  state.address = undefined
  state.certificates = undefined
  state.email = undefined
  state.experience = undefined
  state.full_name = undefined
  state.phone = undefined
  state.service_area = undefined
  state.tools = undefined
}
</script>
