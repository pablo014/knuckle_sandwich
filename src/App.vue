<script setup lang="ts">
import VueDisplacementSlideshow from "vue-displacement-slideshow";
const images: Array<string> = [];
</script>

<template>
  <div>
      <div id="banner">
          <VueDisplacementSlideshow
                  :images="images"
                  ref="slideshow"

          />
      </div>
  </div>
</template>

<style scoped>
</style>
