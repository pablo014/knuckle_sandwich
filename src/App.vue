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
          <div class="bg-gray-100 absolute top-0 bottom-0 left-0 right-0 z-10 opacity-50"></div>
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
          <div class="absolute top-40 z-10 left-10 w-80">
              <h1 class="text-5xl text-white mb-4">
                  The Better Sandwich Shop
              </h1>
              <a href="">Order Now</a>
          </div>
      </div>
      <div id="welcome" class="dark">
          <h1 class="text-4xl mb-10">Welcome to Knuckle Sandwiches!</h1>
          <div class="border-l-2 text-xl">We are not your typical sandwich shop. All of our meats are made in-house with our family recipes. We have been in the Mesa, AZ area since 2019 and have become a familiar favorite. With so many options to choose from; sandwiches, subs, salads, wraps, and more! Stop in today to order something fresh and new! </div>
      </div>
      <div id="menu"></div>
      <div id="order" class="dark"></div>
      <div id="social"></div>
      <div id="footer" class="dark"></div>
  </div>
</template>

<style scoped>
#banner {
    position: relative;
}
.dark {
    @apply bg-black text-white text-center px-60 py-20;
}
a {
    @apply rounded-full hover:bg-red-500 p-1 text-xl font-bold;
    border-color: #FF0000;
    border-width: 1px;
}
</style>