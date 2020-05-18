<template>
  <div class="site-section">
    <div class="container">
      <div class="row justify-content-center text-center mb-4">
        <div class="col-7">
          <h3 id="skills" class="h3 heading">My Skills</h3>
          <p class="text">Full stack development capability with strong background in design</p>
        </div>
      </div>
      <div class="row" data-aos="fade-up" data-aos-once="true">
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <font-awesome-icon :icon="['fas', 'laptop-code']" size="2x" class="mb-3" />
          <h4 class="h6 mb-2">Web Front-end Devolopment</h4>
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p> -->
          <ul class="list-unstyled list-line text">
            <li>
              Language:
              <br />JavaScript, HTML5, CSS, ES6, JSX, JSON, SCSS;
            </li>
            <li>
              Framework:
              <br />Vue, Vuex, React, Redux, jQuery, ThreeJS, Leaflet, CanvasJS, ZIMJS, Pure, Bootstrap, Foundation;
            </li>
            <li>
              Tool & technique:
              <br />Webpack, NPM, NPV, Netlify, Wordpress, Sass, Isotope, AOS;
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <font-awesome-icon :icon="['fas', 'server']" size="2x" class="mb-3" />
          <!-- <span class="las la-server 48px" ></span> -->
          <h4 class="h6 mb-2">Web Back-end Development</h4>
          <ul class="list-unstyled list-line text">
            <li>
              Language:
              <br />NodeJS, PHP, SQL, Java, XML;
            </li>
            <li>
              Framework:
              <br />ExpressJS, Spring Boot;
            </li>
            <li>
              Tool & technique:
              <br />MongoDB, cPanel, XAMPP, Mongoose, AJAX, Axios, Stripe, Swagger, REST API, Contentful, Heroku, MAVEN, H2 Database Engine
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <font-awesome-icon :icon="['far', 'user']" size="2x" class="mb-3"/>
          <h4 class="h6 mb-2">UX / UI Design</h4>
          <ul class="list-unstyled list-line text">
            <li>User research</li>
            <li>Interaction design</li>
            <li>Information architecture</li>
            <li>Interface design</li>
            <li>Navigation design</li>
            <li>Information design</li>
            <li>Wireframes</li>
            <li>User testing</li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <font-awesome-icon :icon="['fas', 'cube']" size="2x" class="mb-3" />
          <h4 class="h6 mb-2">Software</h4>
          <ul class="list-unstyled list-line text">
            <li>
              Programming:
              <br />VS Code, Github, Terminal, GitBash, Postman, IntelliJ
            </li>
            <li>
              Graphic &amp; Interface:
              <br />Adobe Illustrator, Adobe Photoshop, Adobe XD, InVision
            </li>
            <li>
              Video &amp; Animation:
              <br />Adobe After Effects, Adobe Premiere Pro, Adobe Animate
            </li>
            <li>
              3D Model &amp; AR:
              <br />Spark AR, AutoDesk 3ds Max
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>