export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/lp-b2c') {
    return navigateTo('/')
  }
})
