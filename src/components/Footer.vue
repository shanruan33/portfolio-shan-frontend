<template>
  <div>
    <Contact></Contact>
    <div id="holder"></div>
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 mb-2">
            <p class="mb-1">PORTFOLIO OF SHAN RUAN, APR 2020.</p>
            <div class="credits">
              <a id="contact_me" href="mailto:shanruan333@gmail.com?subject=hello">CONTACT ME</a>
            </div>
          </div>
          <div class="col-md-6 social text-md-right mb-2">
            <a href="https://github.com/shanruan33" target="_blank" class="mr-2">
              <font-awesome-icon :icon="['fab', 'github']" size="1x" color="black" />
            </a>
            <a href="https://codepen.io/shanruan33" target="_blank" class="mr-2">
              <font-awesome-icon :icon="['fab', 'codepen']" size="1x" color="black" />
            </a>
            <a href="https://www.behance.net/shanruan33" target="_blank" class="mr-2">
              <font-awesome-icon :icon="['fab', 'behance']" size="1x" color="black" />
            </a>
            <a href="https://www.linkedin.com/in/shanruan" target="_blank" class="mr-2">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" size="1x" color="black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Contact from "./Contact";

export default {
  name: "Footer",
  components: { Contact }
};
</script>

<style>
</style>
