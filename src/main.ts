
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import "vue3-rich-accordion/accordion-library-styles.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faTwitter, faFacebook, faStackOverflow, faGithub, faInstagram, faLinkedin, faTiktok, faYelp } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTwitter, faFacebook, faStackOverflow, faGithub, faInstagram, faLinkedin, faTiktok, faYelp)
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
