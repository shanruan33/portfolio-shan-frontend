<template>
  <div id="home">
    <main id="main">
      <Portfolio></Portfolio>
      <Skills></Skills>
      <About></About> 
      <!-- <Contact></Contact> -->
    </main>
  </div>
</template>

<script>
import Skills from '@/components/Skills';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
// import Contact from '@/components/Contact';

export default {
  name: "Home",
  components: {
    Skills,
    About,
    Portfolio,
    // Contact
  }
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
@import "../assets/css/style.css"; */

</style>