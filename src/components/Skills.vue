<template>
  <div class="site-section">
    <div class="container">
      <div class="row justify-content-center text-center mb-4">
        <div class="col-5">
          <h3 id="skills" class="h3 heading">My Skills</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <font-awesome-icon :icon="['fas', 'laptop-code']" size="2x" class="mb-3" />
          <h4 class="h6 mb-2">Web Front-end Devolopment</h4>
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p> -->
          <ul class="list-unstyled list-line">
            <li>
              Language:
              <br />JavaScript, HTML5, CSS, ES6, JSX, JSON, SCSS;
            </li>
            <li>
              Framework:
              <br />jQuery, React, Redux, ThreeJS, Angular, Leaflet, CanvasJS, ZIM, Pure, Bootstrap, Foundation;
            </li>
            <li>
              Tool & technique:
              <br />Webpack, NPM, NPV, Github, Netlify, Wordpress, Sass,;
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <font-awesome-icon :icon="['fas', 'server']" size="2x" class="mb-3" />
          <!-- <span class="las la-server 48px" ></span> -->
          <h4 class="h6 mb-2">Web Back-end Development</h4>
          <ul class="list-unstyled list-line">
            <li>
              Language:
              <br />NodeJS, PHP, SQL;
            </li>
            <!-- <li>Framework: <br>
                jQuery, React, Redux, ThreeJS, Angular, Leaflet, CanvasJS, ZIM, Pure, Bootstrap, Foundation;
            </li>-->
            <li>
              Tool & technique:
              <br />MongoDB, cPanel, XAMPP, REST API, GitBash, AJAX, Axios, Stripe, Swagger, REST API
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <font-awesome-icon :icon="['far', 'user']" size="2x" class="mb-3"/>
          <h4 class="h6 mb-2">UX / UI Design</h4>
          <ul class="list-unstyled list-line">
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
          <ul class="list-unstyled list-line">
            <li>
              Graphic:
              <br />Adobe Illustrator, Adobe Photoshop
            </li>
            <li>
              Interface:
              <br />Adobe XD, InVision
            </li>
            <li>
              Video &amp; Animation:
              <br />Adobe After Effects, Adobe Premiere Pro, Adobe Animate
            </li>
            <li>
              3D &amp; AR:
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