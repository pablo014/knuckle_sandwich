<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const images = [
    './src/assets/sandwich/blatt.webp',
    './src/assets/sandwich/fl_veggie.webp',
    './src/assets/sandwich/pastrami.webp',
];
</script>

<template>
  <div>
      <div id="banner">
          <vueper-slides autoplay :touchable="false" :arrows="false" :bullets="false">
              <vueper-slide
                      v-for="(slide, i) in images"
                      :key="i"
                      >
                  <template #content>
                      <img class="w-full h-full" :src="slide" />
                  </template>
              </vueper-slide>
          </vueper-slides>
      </div>
  </div>
</template>

<style scoped>
</style>
