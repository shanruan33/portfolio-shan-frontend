import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AOS from 'aos';
import '@/assets/vendor/aos/aos.css';
import Vuex from 'vuex'
import { store } from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodepen, faGithub, faBehance, faLinkedinIn, faLinkedin, faBehanceSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { faLaptopCode, faCube, faServer } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
require('@danzen/createjs');


//import router from './router'

library.add(
  faCodepen,
  faGithub,
  faBehance,
  faLinkedinIn,
  faLinkedin,
  faBehanceSquare,
  faLaptopCode,
  faCube,
  faServer,
  faUser
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

// Globally register your component
Vue.component('Portfolio', Portfolio);
Vue.component('Footer', Footer);
Vue.component('Nav', Nav);

Vue.config.productionTip = false
Vue.use(Vuex)
new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
  store
}).$mount('#app')
