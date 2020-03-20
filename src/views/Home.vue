<template>
  <div id="home">
    <main id="main">
      <Portfolio></Portfolio>
      <Skills></Skills>
      <About></About> 
    </main>
  </div>
</template>

<script>
import Skills from '@/components/Skills';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';

export default {
  name: "Home",
  components: {
    Skills,
    About,
    Portfolio
  }
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
@import "../assets/css/style.css"; */

</style>