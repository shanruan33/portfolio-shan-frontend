<template>
  <div class="site-section">
    <div class="container">
      <div id="top" class="row align-items-center">
        <div class="col-md-7" data-aos="fade-up">
          <h2>{{updateName}}</h2>
          <p>{{updateDescription}} </p>
        </div>
      </div>
    </div>

    <div class="site-section pb-0">
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-md-8" data-aos="fade-up">
            <img src="../assets/img/web_1.png" alt="Image" class="img-fluid" />
          </div>
          <div class="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div class="sticky-content" >
              <h3 class="h3">{{updateLabel}}</h3>
              <p class="mb-4">
                <span class="text-muted">{{updateCategory}}</span>
              </p>
              <h4 class="h4 mb-3">Technical Sheet</h4>
              <ul class="list-unstyled list-line mb-5">
                <li v-for="tech in updateTech" :key="tech">{{tech}}</li>
                <li></li>
                <li>CMS</li>
                <li>Logo</li>
              </ul>

              <p>
                <a href="#" class="readmore">View Demo / More Details</a>
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
    }
  }
};
</script>

<style>
</style>