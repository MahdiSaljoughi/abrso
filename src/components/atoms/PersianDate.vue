<script setup lang="ts">
import { format } from 'date-fns-jalali'
defineProps(['date', 'fontSize', 'fontColor'])
</script>

<template>
  <div class="date flex items-center">
    <div :style="{ 'font-size': fontSize, color: fontColor }">
      {{ Number(format(new Date(date), 'd')).toLocaleString('fa-IR') }}
      {{ format(new Date(date), 'MMMM') }}
      {{ Number(format(new Date(date), 'yyyy')).toLocaleString('fa-IR', { useGrouping: false }) }}
    </div>
  </div>
</template>

<style scoped></style>
