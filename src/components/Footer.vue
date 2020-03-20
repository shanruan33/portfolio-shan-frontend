<template>
  <div>
    <div class="site-section">
      <div class="container">
        <div class="row justify-content-center text-center mb-4">
          <div class="col-5">
            <h3 id="contact" class="h3 heading contact">Contact Me</h3>
            <p>
              Email:
              <a href="mailto:shanruan333@gmail.com?subject=hello" id="contact-email">shanruan333@gmail.com</a>
              <br />Mobile: +1 438 6309212
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="holder"></div>
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 mb-2">
            <p class="mb-1">PORTFOLIO OF SHAN RUAN, FEB 2020.</p>
            <div class="credits">
              <!-- <a href="about.html">ABOUT ME</a> / -->
              <a href="mailto:shanruan333@gmail.com?subject=hello">CONTACT ME</a>
            </div>
          </div>
          <div class="col-md-6 social text-md-right mb-2">
            <a href="https://github.com/shanruan33" class="mr-2">
              <font-awesome-icon :icon="['fab', 'github']" size="1x" color="black" />
            </a>
            <a href="https://codepen.io/shanruan33" class="mr-2">
              <font-awesome-icon :icon="['fab', 'codepen']" size="1x" color="black" />
            </a>
            <a href="https://www.behance.net/shanruan33" class="mr-2">
              <font-awesome-icon :icon="['fab', 'behance']" size="1x" color="black" />
            </a>
            <a href="https://www.linkedin.com/in/shanruan" class="mr-2">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" size="1x" color="black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

require('../../node_modules/@danzen/createjs');
import "../assets/js/zim/bubble";

export default {
  name: 'Footer'
};
</script>

<style>
</style>