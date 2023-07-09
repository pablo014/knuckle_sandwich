<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { AccordionList, AccordionItem } from 'vue3-rich-accordion'
import menuList from './assets/json/menu.json'
import MenuItem from "@/components/menu-item.vue";

const images = [
    './assets/sandwich/blatt.webp',
    './assets/sandwich/fl_veggie.webp',
    './assets/sandwich/pastrami.webp',
];

const breakfast = menuList.filter(item => item.section === 'breakfast')
const sandwich = menuList.filter(item => item.section === 'sandwich')

const scrollIntoView = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
    });
}
const isBreakfast = () => {
    return new Date().getHours() <= 10 && new Date().getHours() >= 7;
}
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
                      <img class="w-full sm:h-full" :src="slide" />
                  </template>
              </vueper-slide>
          </vueper-slides>
          <div class="absolute top-10 sm:top-40 z-10 left-10 w-80">
              <h1 class="text-5xl mb-4">
                  The Better Sandwich Shop
              </h1>
              <a @click="scrollIntoView('menu')">Order Now</a>
          </div>
      </div>
      <div id="welcome" class="dark">
          <img src="./assets/logo.webp" alt="logo" class="max-h-96" />
          <h1 class="text-4xl my-10">Welcome to Knuckle Sandwiches!</h1>
          <div class="border-l-2 text-xl p-2">We are not your typical sandwich shop. All of our meats are made in-house with our family recipes. We have been in the Mesa, AZ area since 2019 and have become a familiar favorite. With so many options to choose from; sandwiches, subs, salads, wraps, and more! Stop in today to order something fresh and new! </div>
      </div>
      <div id="menu">
          <accordion-list>
              <accordion-item :defaultOpened="isBreakfast()">
                  <template #summary>
                      <div class="menu-header">Breakfast</div>
                  </template>
                  <div v-for="item in breakfast">
                      <MenuItem :menu="item"/>
                  </div>
              </accordion-item>
              <accordion-item :defaultOpened="!isBreakfast()">
                  <template #summary>Sandwich</template>
                  <div v-for="item in sandwich">
                      <MenuItem :menu="item"/>
                  </div>
              </accordion-item>
          </accordion-list>
      </div>
      <div id="catering" class="dark">
          <h1 class="text-5xl mb-4">Our Catering</h1>
          <div class="border-l-2 text-xl p-2">
              Whether you are in charge of a corporate event, birthday or holiday party in Mesa, AZ or surrounding areas, Knuckle Sandwiches catering is the right choice every time! Our options will have everyone smiling and wanting more. We bring the taste of our family tradition to you in every bite!
          </div>
          <a class="my-10">
              ORDER CATERING
          </a>
          <div class="border-l-2 text-xl p-2">
              Please Note: All catering orders require a 48-hour advance. 50% down required at time of order and the balance the day before the event. Call now to place your order!
          </div>
      </div>
      <div id="social" class="flex flex-col items-center py-20">
          <div>LIKE, TWEET, IG, OR YELP US!</div>
          <div class="flex flex-wrap">
              <a href="https://www.facebook.com/625587264608410" class="m-5">
                  <font-awesome-icon class="icon" icon="fa-brands fa-instagram" beat-fade size="2xl" />
              </a>
              <a href="https://www.instagram.com/knuckle_sandwiches.az/?hl=en" class="m-5">
                  <font-awesome-icon class="icon" icon="fa-brands fa-facebook" beat-fade size="2xl" />
              </a>
              <a href="https://www.linkedin.com/company/knuckle-sandwiches-az/" class="m-5">
                  <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" beat-fade size="2xl" />
              </a>
              <a href="https://www.tiktok.com/@knucklesandwichesaz" class="m-5">
                  <font-awesome-icon class="icon" :icon="['fab', 'tiktok']" beat-fade size="2xl" />
              </a>
              <a href="https://www.twitter.com/knucklesmesa" class="m-5">
                  <font-awesome-icon class="icon" :icon="['fab', 'twitter']" beat-fade size="2xl" />
              </a>
              <a href="https://www.yelp.com/biz/knuckle-sandwiches-mesa" class="m-5">
                  <font-awesome-icon class="icon" :icon="['fab', 'yelp']" beat-fade size="2xl" />
              </a>
          </div>
      </div>
      <div id="footer" class="dark">
          <p>COPYRIGHT © 2023 KNUCKLE SANDWICHES - ALL RIGHTS RESERVED.</p>
          <p>PROUDLY SERVING: MESA, EAST MESA, MESA GRANDE, REED PARK, DOBSON RANCH, LEHI & ALL SURROUNDING AREAS</p>
          <p>1140 N HIGLEY RD #103 MESA, AZ</p>
          <p>(480) 630-4132</p>
          <p>Privacy Policy</p>
      </div>
  </div>
</template>

<style scoped>
#banner {
    position: relative;
}
.dark {
    @apply bg-black text-white text-center sm:px-60 py-20 flex flex-col items-center;
}
a {
    @apply rounded-full hover:bg-red-500 p-1 text-xl font-bold cursor-pointer;
    border-color: #FF0000;
    border-width: 1px;
}
.icon {
    @apply p-3;
}
.menu-header {
    @apply bg-gray-200;
}
</style>
<style>
.vueperslides__parallax-wrapper {
    height: 17rem !important;
}
</style>