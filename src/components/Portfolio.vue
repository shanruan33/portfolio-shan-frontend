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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias illum unde pariatur, enim tempora, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias illum unde pariatur, enim tempora",
          label: "React E-Commerce Dev.",
          img: "flow",
          tech: ["React", "HTML/CSS", "Adobe XD"],
          featured: true,
          category: "Web_Dev",
          react: true
        },
        {
          name: "PlantMe",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias illum unde pariatur, enim tempora",
          label: "Landing Page Dev.",
          img: "plantme",
          tech: ["React", "HTML/CSS", "Adobe XD"],
          category: "Web_Dev"
        },
        {
          name: "Wine Wiki",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias illum unde pariatur, enim tempora",
          label: "Full-stack Dev.",
          img: "winewiki",
          tech: ["React", "HTML/CSS", "Adobe XD"],
          featured: true,
          category: "Web_Dev"
        },
        {
          name: "BIXI",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias illum unde pariatur, enim tempora",
          label: "Physical Interface Design",
          img: "bixi",
          tech: ["React", "HTML/CSS", "Adobe XD"],
          category: "UI/UX"
        },

        {
          name: "Self-lightening Mirror",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias illum unde pariatur, enim tempora",
          label: "Arduino Dev.",
          img: "mirror",
          tech: ["React", "HTML/CSS", "Adobe XD"],
          category: "other"
        },
        {
          name: "Euphoric",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias illum unde pariatur, enim tempora",
          label: "ZIM JS",
          img: "euphoric",
          tech: ["React", "HTML/CSS", "Adobe XD"],
          category: "game"
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
          React: function(el) {
            return !!el.react;
          },
          Web_Dev: function(el) {
            return el.category === "Web_Dev";
          },
          "UI/UX": function(el) {
            return el.category === "UI/UX";
          },
          Game: function(el) {
            return el.category === "game";
          },
          Other: function(el) {
            return el.category === "other";
          }
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

    updateDetail (el) {
        this.$store.dispatch('updateAction', el);
        window.scrollTo(0,0);
      }
  },
};
</script>

<style>
</style>