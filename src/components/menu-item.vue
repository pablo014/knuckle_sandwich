<script setup lang="ts">
import { defineProps, withDefault } from 'vue'
export interface Menu {
    id: number;
    name: string;
    section: string;
    description: string;
    image: string;
}
 export interface MenuItem {
    menu: Menu;
 }

const props = defineProps<MenuItem>();
</script>

<template>
  <div class="grid grid-cols-12 gap-2">
      <div class="col-span-4 flex items-center justify-center" :class="menu.id % 2 !== 0 ? 'order-1' : 'order-2'" >
          <img :src="menu.image" :alt="menu.name"/>
      </div>
      <div class="col-span-8" :class="menu.id % 2 === 0 ? 'order-1' : 'order-2'">
          <h1 class="text-2xl font-bold">{{ menu.name }}</h1>
          <p>{{ menu.description }}</p>
      </div>
  </div>
</template>

<style scoped>

</style>