<template>
  <div class="site-section site-portfolio">
    <div class="container">
      <div v-if="this.$router.currentRoute.path !=='/work'" class="row mb-5 align-items-center">
        <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
          <h2 id="works">Hey, I'm Shan Ruan</h2>
          <p class="mb-0">Frontend Developer &amp; UX Designer</p>
        </div>
        <div class="col-md-12 col-lg-6 text-left text-lg-right">
          <div class="filters">
            <a
              v-for="(val, key) in option.getFilterData"
              v-bind:key="key"
              :class="[key===filterOption? 'is-checked' : '']"
              @click="filter(key)"
            >{{key}}</a>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="col-md-12 mb-4 text-lg-center" data-aos="fade-up">
          <h2 id="works">More Works</h2>
        </div>
        <div class="col-md-12 mb-5 text-left text-lg-center" data-aos="fade-up">
          <div class="filters">
            <a
              v-for="(val, key) in option.getFilterData"
              v-bind:key="key"
              :class="[key===filterOption? 'is-checked' : '']"
              @click="filter(key)"
            >{{key}}</a>
          </div>
        </div>
      </div>
      <div>
        <isotope
          ref="cpt"
          id="portfolio-grid"
          class="row no-gutter"
          data-aos="fade-up"
          data-aos-delay="200"
          v-images-loaded:on.progress="layout"
          :item-selector="'element-item'"
          :list="list"
          :options="option"
          @filter="filterOption=arguments[0]"
        >
          <div
            v-for="(element,index) in list"
            :class="[element.category]"
            :key="index"
            class="item col-sm-6 col-md-4 col-lg-4 mb-4"
          >
            <router-link to="/work" class="item-wrap" @click.native="updateDetail(element)">
              <div class="work-info">
                <h3 class="name">{{element.name}}</h3>
                <p class="label">{{element.label}}</p>
                <span>{{element.category}}</span>
              </div>
              <img class="img-fluid" :src="require(`@/assets/img/${element.img}.png`)" />
            </router-link>
          </div>
        </isotope>
      </div>
    </div>
  </div>
</template>

<script>
import isotope from "vueisotope";
import Vue from "vue";
import VueLodash from "vue-lodash";
import lodash from "lodash";
import imagesLoaded from "vue-images-loaded";

Vue.use(VueLodash, { name: "custom", lodash: lodash });

export default {
  name: "Portfolio",
  directives: {
    imagesLoaded
  },
  components: {
    isotope
  },
  data() {
    return {
      list: [
        {
          name: "Flow & Wellness Studio",
          description:
            "This is a full-frontend SPA shopping Web App for choosing and purchasing studio classes, created with React. The development includes a landing page with featured products and services, a product page with classes listing and filtering, a product description page, a shopping cart with checkout function (Paypal or cards). Customized API and responsive design are also applied for faster and better user experience.",
          label: "React E-Commerce",
          img: "flow",
          tech: [
            "React: State & Lifecycle Management, Router DOM, Context (Provider, Consumer), React Icon, Hook (State, Effect), Event Handler, etc.",
            "HTML/CSS: Structure and Responsive Design",
            "Contentful: Content Management & Data Retrieve",
            "Paypal & Stripe: Payment Management"
          ],
          url: "https://flowandwellnessstudio.netlify.com/",
          featured: true,
          category: "Web_Dev",
          react: true
        },
        {
          name: "PlantMe",
          description:
            "PlantMe is a plant subscription box website for GTA region in Canada. Research shows that millennials really love plants, especially those who live in cities with limited space and time.",
          label: "Landing Page",
          img: "plantme",
          tech: [
            "HTML/CSS: Structure and Layout Design",
            "jQuery: Slider Animation"
          ],
          url: "https://github.com/shanruan33/plantme",
          category: "Web_Dev"
        },
        {
          name: "Wine Wiki",
          description:
            "This is a full-stack development of an informational website to search, learn and recommend wines to solve one problem: “how to choose a wine?”. This project includes a landing page, information pages of wine grape and regions, an interactive wine map, a dynamic wine search engine and a recommendation engine.",
          label: "Full Stack ",
          img: "winewiki",
          tech: [
            "PHP/SQL: Dynamic Search Query & Filter,  Recommendation Engine, Database Interaction",
            "cPanel/phpMyAdmin: User & Wine Database Management",
            "HTML/CSS: Structure,  Layout & Animation Design",
            "ZIMJS: Animation",
            "Leaflet & GeoJSON: Interactive Map",
            "Adobe XD/Illustrator/Photoshop: User Empathy Map, Interface Design, Wireframe"
          ],
          url: "https://github.com/shanruan33/winewiki",
          category: "Web_Dev"
        },
        {
          name: "Shan’s Portfolio",
          description:
            "This is my SPA portfolio website is created with Vue & Vuex and hosted on AWS. The goal is to enable employers and viewers to easily find out the information they need. All contents are well organized. The work presenting section is designed with a filter of key labels to choose from based on different interests. Animation is also added for a better user experience.",
          label: "Vue & Vuex",
          img: "jewelry-m",
          tech: [
            "Vue: Router, Instance, Binding, List & Conditional Rendering, Component Registration, Custom Event, etc.",
            "Vuex: State Management",
            "HTML/CSS: Structure and Responsive Design",
            "Bootstrap: Layout & Responsive Design",
            "jQuery: Navigation Bar Function",
            "Isotope JS: Portfolio Filter Animation",
            "AOS JS & CSS: Scroll Animation"
          ],
          url: "https://shanruan.io",
          featured: true,
          category: "Web_Dev",
          vue: true
        },

        {
          name: "Self-lightening Mirror",
          description:
            "Free your hands when doing skincare & makeup from light control. This mirror has a distance sensor and a gesture sensor. It will automatically light up when user is approaching and user can control lightness with very easy hand gestures without touching it, keeping hands clean and free when doing make-up and skincare.",
          label: "Arduino",
          img: "mirror",
          tech: [
            "C++: Programming sensing distance and gesture type to control the color and lightness of LED stripe",
            "Arduino Board",
            " Adafruit APDS9960 Gesture Sensor",
            "Ultrasonic Sensor HC-SR04"
          ],
          url: "https://github.com/shanruan33/Mirror",
          category: "UX/UI"
        },
        {
          name: "Euphoric",
          description:
            "Learn about how basic human immune system works through a simple game. This project utilizes ZIM physics library to mimic blood cell flow in the vein and antibody activities from white blood cell.",
          label: "ZIM JS",
          img: "euphoric",
          tech: [
            "ZIM JS: Game Setting (Scoring & Timing)",
            "BOX 2D & ZIM Physics: Player Control, Element Animation & Hitting Events, etc."
          ],
          url: "https://codepen.io/shanruan33/pen/OJVOMdy",
          category: "game"
        },
        {
          name: "Jewelry Mobile",
          description: "Jewelry E-Commerce Mobile App UX/UI design.  It contains all major functions of shopping apps, including product browsing by type and brand, product filtering by price, color and rating, shopping cart adding and editing, payment processing and card saving, order tracking, user information modifying and product rating, etc.",
          label: "E-Commerce Mobile",
          img: "jewelry-m",
          tech: [
            "Adobe XD & Illustrator: Interface Design, Icon Design, Interaction Design, Wireframe, Demo"
          ],
          url: "https://www.behance.net/gallery/94118227/Jewelry-Mobile-Shopping-App-UXUI-Design",
          category: "UX/UI"
        }
      ],
      selected: null,
      filterOption: "show all",
      option: {
        itemSelector: ".element-item",
        getFilterData: {
          All: function() {
            return true;
          },
          Featured: function(el) {
            return !!el.featured;
          },
          "React/Vue": function(el) {
            return !!el.react || !!el.vue;
          },
          // Vue: function(el) {
          //   return !!el.vue;
          // },
          Web_Dev: function(el) {
            return el.category === "Web_Dev";
          },
          "UX/UI": function(el) {
            return el.category === "UX/UI" || el.name === "Wine Wiki";
          },
          Game: function(el) {
            return el.category === "game";
          }
          // Other: function(el) {
          //   return el.category === "other";
          // }
        }
      }
    };
  },
  methods: {
    filter: function(key) {
      this.$refs.cpt.filter(key);
    },
    layout() {
      this.$refs.cpt.layout("masonry");
    },
    updateDetail(el) {
      this.$store.dispatch("updateAction", el);
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
</style>