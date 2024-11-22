<script setup lang="ts">
const componentKey = useState(() => 0)
const forceRerender = () => {
  componentKey.value += 1
}
onMounted(() => {
  setTimeout(() => {
    forceRerender()
  }, 100)
})
</script>

<template>
  <NuxtLayout name="home-layout">
    <template #home>
      <OrganismsHeader />
      <MoleculesFeaturesnew />

      <OrganismsBackgroundSection>
        <div class="relative">
          <div class="circle-gradient" />
        </div>
        <MoleculesAbilities :key="componentKey" />
        <div class="h-[30rem] cursor-default relative">
          <AtomsWordAnimation :text="'BETTER WAY'" />
        </div>
      </OrganismsBackgroundSection>
      <MoleculesApplicationSection />

      <OrganismsBackgroundType2>
        <MoleculesCustomers />
      </OrganismsBackgroundType2>
      <MoleculesCaseStudy />
    </template>
  </NuxtLayout>
</template>
