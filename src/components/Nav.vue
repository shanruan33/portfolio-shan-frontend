<template>
  <div>
    <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
      <div class="container py-2 py-md-5">
        <div class="row align-items-start">
          <div class="col-md-2">
            <ul class="custom-menu">
              <li class="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#works">Works</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 d-none d-md-block mr-auto">
            <div class="social-nav d-flex">
              <!-- <span class="icofont-twitter text-white mt-2 mr-3"></span> -->
              <a href="https://github.com/shanruan33" class="mr-3">
                <font-awesome-icon :icon="['fab', 'github']" size="1x" inverse />
              </a>
              <a href="https://codepen.io/shanruan33" class="mr-3">
                <font-awesome-icon :icon="['fab', 'codepen']" size="1x" inverse />
              </a>
              <a href="https://www.behance.net/shanruan33" class="mr-3">
                <font-awesome-icon :icon="['fab', 'behance-square']" size="2x" inverse />
              </a>
              <a href="https://www.linkedin.com/in/shanruan" class="mr-3">
                <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" inverse />
              </a>
              <!-- <div>
              <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut
                  officiis explicabo inventore. <br> <a href="#">t.co/v82jsk</a></em></p>
              </div>-->
            </div>
          </div>
          <div class="col-md-7 d-none d-md-block">
            <h3>Hire Me</h3>
            <p>
              <em>
                Open for job opportunities in Toronto and Montreal.
                <br />
                <a href="mailto:shanruan333@gmail.com?subject=hello">shanruan333@gmail.com</a>
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-light custom-navbar">
      <div class="container">
        <router-link to="/" class="navbar-brand">Shan's Portfolio</router-link>
        <a href="#" class="burger" data-toggle="collapse" data-target="#main-navbar">
          <span></span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";

export default {};
var burgerMenu = function() {
  $(".burger").click(function() {
    $(window).scrollTop(0);
    if (!$(".burger").hasClass("active")) $(".burger").addClass("active");
    else $(".burger").removeClass("active");
  });
};
burgerMenu();
</script>

<style>
</style>