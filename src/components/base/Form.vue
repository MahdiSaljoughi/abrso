<script setup lang="ts">
import staticData from '~/staticData.json'
type props = {
  title?: string
  submitButton?: string
  successMessage: string
  type: string
  input: {
    id: number
    placeholder: string
    pattern: string
    value: string
    required: boolean
    type: string
  }[]
}
const runtime = defineProps<{ metaData: props }>()

// submit form
const loading = ref(false)
const submitMessage = ref('')
const formFields = ref<{ [k in string]: string }>({})

async function createForm(e: any) {
  e.preventDefault()
  loading.value = true

  const dataBody = { ...formFields.value, type: runtime.metaData.type }

  const bodyData = {
    data: dataBody,
  }

  const res = await $fetch(`${useRuntimeConfig().public.strapiURL}/api/customers`, {
    method: 'POST',
    body: bodyData,
  })
  if (res) {
    submitMessage.value = runtime.metaData.successMessage
  } else {
    submitMessage.value = staticData.form.errorMessage
  }
  loading.value = false
  formFields.value = {}
}
</script>
<template>
  <form
    class="flex flex-col bg-gradient-gray dark:bg-gradient-card shadow-lg-light p-8"
    action=""
    @submit.prevent="createForm"
  >
    <p class="text-3xl font-semibold mb-2">
      {{ metaData.title }}
    </p>
    <input
      v-for="field in metaData.input"
      :key="field.id"
      v-model="formFields[field.value]"
      class="bg-inherit rounded-none py-4 outline-0 border-b dark:border-gray-600 border-gray-400"
      :placeholder="field.placeholder"
      :name="field.value"
      :type="field.type"
      :pattern="field.pattern"
      :required="field.required"
    >
    <div class="border-blue-gradient-parent dark:bg-gradient-border-blue my-8">
      <button
        type="submit"
        class="inline-flex justify-center border-blue-gradient dark:bg-blackPallete-300 hover:dark:bg-black hover:bg-bluePallete-100 bg-teal-blue py-2 text-plantium-silver w-full"
      >
        {{ metaData.submitButton }}
        <svg
          v-if="loading"
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-plantium-silver"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </button>
    </div>
    <span>{{ submitMessage }}</span>
  </form>
</template>
