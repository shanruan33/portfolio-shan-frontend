<template>
  <div class="site-section">
    <div class="container">
      <div id="top" class="row align-items-center">
        <div class="col-md-9" data-aos="fade-up">
          <h2>{{updateName}}</h2>
          <p class="text">{{updateDescription}}</p>
        </div>
      </div>
    </div>

    <div class="site-section pb-0">
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-md-8" data-aos="fade-up">
            <a :href="updateUrl" target="_blank">
            <img :src="require(`@/assets/img/${updateImg}Big.png`)" alt="Image" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div class="sticky-content">
              <h3 class="h3">{{updateLabel}}</h3>
              <p class="mb-4">
                <span class="text-muted">{{updateCategory}}</span>
              </p>
              <h4 class="h4 mb-3">Technical Sheet</h4>
              <ul class="list-unstyled list-line mb-5">
                <li v-for="tech in updateTech" :key="tech" class="text">{{tech}}</li>
              </ul>

              <p>
                <a :href="updateUrl" target="_blank" class="readmore">{{updateBtn}}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Portfolio></Portfolio>
  </div>
</template>

<script>
import Portfolio from "@/components/Portfolio";
export default {
  name: "Work",
  component: {
    Portfolio
  },
  computed: {
    updateName() {
      return this.$store.getters.updateName;
    },
    updateDescription() {
      return this.$store.getters.updateDescription;
    },
    updateLabel() {
      return this.$store.getters.updateLabel;
    },
    updateImg() {
      return this.$store.getters.updateImg;
    },
    updateTech() {
      return this.$store.getters.updateTech;
    },
    updateCategory() {
      return this.$store.getters.updateCategory;
    },
    updateUrl() {
      return this.$store.getters.updateUrl;
    },
    updateBtn() {
      return this.$store.getters.updateBtn;
    }
  }
};
</script>

<style>

</style>