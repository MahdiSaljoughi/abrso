import { ofetch } from 'ofetch'
// import { useAuthStore } from '~/store/auth'

export default defineNuxtPlugin((_nuxtApp) => {
  globalThis.$fetch = ofetch.create({
    // onRequest ({ _request, options }) {
    //   const authStore = useAuthStore()
    //   if (authStore.isAuthenticated) {
    //     options.headers = { Authorization: `Bearer ${authStore.token}` }
    //     console.log(options)
    //   } else {
    //     console.log('Not authenticated')
    //   }
    // },
    onRequestError ({ error }) {
      console.error(error)
    }
  })
})