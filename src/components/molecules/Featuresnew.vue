<script setup lang="ts">
import staticData from '~/staticData.json'
const selectedEl = useState('active item ll', () => 1)
const chooseItem = (index: number) => {
  selectedEl.value = index
}
</script>
<template>
  <!-- D A R K -->
  <div class="hidden dark:md:block text-center mt-10 mb-40">
    <h2 class="text-white text-3xl font-semibold">قابلیت های ردیاب ابرسو</h2>
  </div>
  <div class="features-light hidden dark:md:flex bg-img-dark flex-row w-full items-center">
    <section class="md:px-0 px-9 mx-auto md:max-w-6xl sm:max-w-xl w-full h-[600px] flex flex-col">
      <!-- title -->
      <div>
        <div class="space-y-5 md:space-y-0 flex flex-col items-start md:flex-row md:justify-between">
          <div
            v-for="obj in staticData.features_new"
            :key="obj.id"
            class="w-full md:w-auto rounded-2xl"
            :index="obj.id"
            :class="{
              '': obj.id === selectedEl,
            }"
            @click.prevent="chooseItem(obj.id)"
          >
            <div
              class="w-full px-8 py-3 text-xl rounded-t-2xl rounded-b-sm"
              :class="{
                'font-medium  border-[#008AAE]/50 border-r border-t border-l text-[#008AAE]':
                  obj.id === selectedEl,
              }"
            >
              <h2 class="cursor-pointer">{{ obj.title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mb-4 w-full h-[2.2px] bg-gradient-to-r from-[#008AAE]/30 via-[#008AAE] to-[#008AAE]/30 rounded-full"
      ></div>
      <!-- title -->
      <!-- content -->
      <div
        v-for="con in staticData.features_new"
        :key="con.id"
        class="px-4 selected-item-light-parent flex flex-wrap justify-evenly gap-y-6"
      >
        <div
          v-show="con.id === selectedEl"
          v-for="item in con.contents"
          :key="item.id"
          class="py-5 px-4 selected-item-light w-1/3 border-x border-dashed border-[#008AAE]/20"
        >
          <div class="flex flex-col items-center gap-y-4 text-center">
            <UIcon :name="item.icon" dynamic class="w-7 h-7" />
            <h2 class="block text-xl">
              {{ item.title }}
            </h2>
          </div>
        </div>
      </div>
      <!-- content -->
    </section>
  </div>
  <!-- L I G H T -->
  <div class="hidden md:block dark:hidden text-center mt-10 mb-40">
    <h2 class="text-black text-3xl font-semibold">قابلیت های ردیاب ابرسو</h2>
  </div>
  <div class="features-light hidden md:flex dark:hidden bg-img-light flex-row w-full items-center">
    <section class="md:px-0 px-9 mx-auto md:max-w-6xl sm:max-w-xl w-full h-[600px] flex flex-col">
      <!-- title -->
      <div>
        <div class="space-y-5 md:space-y-0 flex flex-col items-start md:flex-row md:justify-between">
          <div
            v-for="obj in staticData.features_new"
            :key="obj.id"
            class="w-full md:w-auto rounded-2xl"
            :index="obj.id"
            :class="{
              '': obj.id === selectedEl,
            }"
            @click.prevent="chooseItem(obj.id)"
          >
            <div
              class="w-full px-8 py-3 text-xl rounded-t-2xl rounded-b-sm"
              :class="{
                'font-medium  border-[#008AAE]/60 border-r border-t border-l text-[#008AAE]':
                  obj.id === selectedEl,
              }"
            >
              <h2 class="cursor-pointer">{{ obj.title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mb-4 w-full h-[2.2px] bg-gradient-to-r from-[#008AAE]/20 via-[#008AAE]/50 to-[#008AAE]/20 rounded-full"
      ></div>
      <!-- title -->
      <!-- content -->
      <div
        v-for="con in staticData.features_new"
        :key="con.id"
        class="px-4 selected-item-light-parent flex flex-wrap justify-evenly gap-y-6"
      >
        <div
          v-show="con.id === selectedEl"
          v-for="item in con.contents"
          :key="item.id"
          class="py-5 px-4 selected-item-light w-1/3 border-x border-dashed border-[#008AAE]/20"
        >
          <div class="flex flex-col items-center gap-y-4 text-center">
            <UIcon :name="item.icon" dynamic class="w-7 h-7" />
            <h2 class="block text-xl">
              {{ item.title }}
            </h2>
          </div>
        </div>
      </div>
      <!-- content -->
    </section>
  </div>
  <!-- mobile -->
  <!-- D A R K -->
  <div class="hidden dark:block dark:md:hidden text-center mt-40 mb-10">
    <h2 class="text-2xl font-semibold">قابلیت های ردیاب ابرسو</h2>
  </div>
  <div class="hidden dark:flex dark:md:hidden md:hidden bg-img-dark w-full items-center">
    <section class="px-4 mx-auto max-w-xl max-h-[630px] flex flex-col">
      <!-- title -->
      <div>
        <div class="grid grid-cols-2 gap-y-4">
          <div
            v-for="obj in staticData.features_new"
            :key="obj.id"
            class="rounded-2xl"
            :index="obj.id"
            :class="{
              '': obj.id === selectedEl,
            }"
            @click.prevent="chooseItem(obj.id)"
          >
            <div
              class="rounded-2xl py-2 text-center"
              :class="{
                'border-sky-400 border': obj.id === selectedEl,
              }"
            >
              <h2>{{ obj.title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        class="my-4 w-full h-[2px] bg-gradient-to-r from-sky-400/20 via-sky-400 to-sky-400/20 rounded-full"
      ></div>
      <!-- title -->
      <!-- content -->
      <div
        v-for="con in staticData.features_new"
        :key="con.id"
        class="selected-item-light-parent flex flex-wrap justify-evenly gap-y-6"
      >
        <div
          v-show="con.id === selectedEl"
          v-for="item in con.contents"
          :key="item.id"
          class="p-2 w-1/2 border-x border-dashed border-sky-500/30"
        >
          <div class="flex flex-col items-center gap-y-4 text-center">
            <UIcon :name="item.icon" dynamic class="w-6 h-6" />
            <h2 class="block">
              {{ item.title }}
            </h2>
          </div>
        </div>
      </div>
      <!-- content -->
    </section>
  </div>
  <!-- mobile -->
  <!-- L I G H T -->
  <div class="block md:hidden dark:hidden text-center mt-40 mb-10">
    <h2 class="text-2xl font-semibold">قابلیت های ردیاب ابرسو</h2>
  </div>
  <div class="md:hidden dark:hidden bg-img-light w-full items-center">
    <section class="px-4 mx-auto max-w-xl max-h-[630px] flex flex-col">
      <!-- title -->
      <div>
        <div class="grid grid-cols-2 gap-y-4">
          <div
            v-for="obj in staticData.features_new"
            :key="obj.id"
            class="rounded-2xl"
            :index="obj.id"
            :class="{
              '': obj.id === selectedEl,
            }"
            @click.prevent="chooseItem(obj.id)"
          >
            <div
              class="rounded-2xl py-2 text-center"
              :class="{
                'border-sky-400 border': obj.id === selectedEl,
              }"
            >
              <h2>{{ obj.title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        class="my-4 w-full h-[2px] bg-gradient-to-r from-sky-400/20 via-sky-400 to-sky-400/20 rounded-full"
      ></div>
      <!-- title -->
      <!-- content -->
      <div
        v-for="con in staticData.features_new"
        :key="con.id"
        class="selected-item-light-parent flex flex-wrap justify-evenly gap-y-6"
      >
        <div
          v-show="con.id === selectedEl"
          v-for="item in con.contents"
          :key="item.id"
          class="p-2 w-1/2 border-x border-dashed border-sky-500/30"
        >
          <div class="flex flex-col items-center gap-y-4 text-center">
            <UIcon :name="item.icon" dynamic class="w-6 h-6" />
            <h2 class="block">
              {{ item.title }}
            </h2>
          </div>
        </div>
      </div>
      <!-- content -->
    </section>
  </div>
</template>

<style scoped>
.selected-bg-item-light {
  background: rgba(15, 15, 15, 0.03);
}

.bg-img-dark {
  height: 40vh;
  background-image: linear-gradient(0.5turn, #000000cc, rgb(105 105 105 / 0%), #000000cc),
    url('~/assets/images/neuron-dark.png');
}

@media (min-width: 768px) {
  .dark-theme-feature {
    display: none !important;
  }
}

.bg-img-light {
  height: 40vh;
  background-image: linear-gradient(0.5turn, #fff, rgba(255, 255, 255, 0), #fff),
    url('~/assets/images/neuron-light.png');
}

.bg-gradient-text {
  border-radius: 10px;
}

.bg-item {
  align-items: center;
  position: relative;
  box-sizing: border-box;
  background: linear-gradient(125.15deg, rgba(14, 14, 14) 29.34%, rgba(14, 14, 14) 148.76%);
  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 10px;
}

.bg-item::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -1px;
  border-radius: inherit;
  background: linear-gradient(to right, #ffffff3b, transparent);
}

@media (max-width: 768px) {
  .bg-img-light,
  .bg-img-dark {
    height: 100%;
  }

  .bg-item__mobile-light {
    padding: 20px;
    position: relative;
    box-sizing: border-box;
    background-clip: padding-box;
    border: solid 1px transparent;
    border-radius: 10px;
    background: white;
    box-shadow: 0px 21px 103px rgba(0, 0, 0, 0.13);
  }

  .bg-item__mobile {
    padding: 10px;
    position: relative;
    box-sizing: border-box;
    background: linear-gradient(125.15deg, rgba(14, 14, 14) 29.34%, rgba(14, 14, 14) 148.76%);
    background-clip: padding-box;
    border: solid 1px transparent;
    border-radius: 10px;
  }

  .bg-item__mobile::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(to right, #ffffff3b, transparent);
  }

  .bg-gradient-text__mobile {
    border-radius: 10px;
  }
}

@media (min-width: 768px) {
  .selected-item-light-parent {
    position: relative;
  }
}

.selected-bg-item-parent {
  position: relative;
}

.selected-bg-item {
  box-shadow: inset 0px 2px 26px rgba(255, 255, 255, 0.15);
}

.selected-item-light-parent {
  position: relative;
  padding: 1px;
}
</style>
