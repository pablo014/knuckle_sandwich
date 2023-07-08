
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { useAccordion } from "vue3-rich-accordion";
import "vue3-rich-accordion/accordion-library-styles.css";
createApp(App).use(useAccordion).mount('#app')
