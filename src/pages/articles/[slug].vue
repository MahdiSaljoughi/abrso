<script setup lang="ts">
import { H3Error, createError } from 'h3'
///
const { strapiComponents, getAllStrapiComponents } = useStrapiComponent()
await getAllStrapiComponents()
///
const route = useRoute() as any
const { fetchPostsBySlug, postBySlug, fetchAllPosts, allPosts } = await usePost()
await fetchPostsBySlug(route.params.slug)
await fetchAllPosts()

const post = postBySlug.value as Post
const allposts = allPosts.value as any

if (post == null) {
  const paramNotFound = new H3Error()
  paramNotFound.statusCode = 404
  throw createError({ statusCode: 404, message: 'Page Not Found' })
}

// get categories of this post
const postcaregories = post.categories.data.map((c) => {
  return c.attributes.title
})

const postsByCat = allposts.filter((post: Post) =>
  postcaregories.includes(post.categories.data[0] && post.categories.data[0].attributes.title),
)
const limitedPostsByCat = postsByCat?.splice(0, 3)

//posts blocks
const componentsPage = post.postTemplate
const components = useComponents(componentsPage, strapiComponents.value)

useServerSeoMeta({
  ogType: () => 'article',
})
</script>

<template>
  <NuxtLayout name="sub-pages">
    <template #container>
      <div class="w-full md:flex space-x-11 space-x-reverse">
        <div class="md:w-9/12">
          <div
            class="card dark:bg-blackPallete-800 p-4 md:px-10 md:py-5 shadow-blog-card bg-white rounded-2xl"
          >
            <div class="flex flex-col md:flex-row md:justify-between md:items-center pb-5">
              <h1 class="text-2xl font-extrabold">
                {{ post?.title }}
              </h1>
              <div
                v-for="cat in post?.categories.data"
                :key="cat?.id"
                class="card-categories"
              >
                <span class="border px-2 rounded-md text-[12px]"> {{ cat?.attributes.title }}</span>
              </div>
            </div>

            <div
              v-if="post.header?.image?.data?.attributes"
              class="card__header-img"
            >
              <nuxt-img
                :src="getStrapiMedia(post.header.image.data.attributes.url)"
                :alt="post.header.image.data.attributes.alternativeText"
                class="rounded-2xl w-full md:h-[420px] object-cover mb-7"
                width="600"
                height="420"
                format="webp"
              />
            </div>
            <div class="card__content space-y-12">
              <div class="card__body space-y-7">
                <component
                  :is="comp.name"
                  v-for="comp in components"
                  :key="comp"
                  :meta-data="comp"
                />
              </div>

              <div class="card__footer">
                <div class="author">
                  <p
                    v-for="author in post?.authors.data"
                    :key="author.id"
                    class="text-[12px] font-medium"
                  >
                    {{ author.attributes.name }}
                  </p>
                </div>
                <AtomsPersianDate
                  :font-size="`12px`"
                  :date="post?.createdAt"
                />
              </div>
            </div>
          </div>
          <!-- <MoleculesComment /> -->
        </div>

        <!-- other posts by same category -->
        <div class="w-3/12 hidden md:flex flex-col space-y-5">
          <MoleculesPostCard
            v-for="(p, index) in limitedPostsByCat"
            :key="index"
            :index="index"
            :post="p"
          />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
