<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Nav from './components/Nav'
export default {
  component:{
    Footer,
    Nav
  }
}
</script>>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
@import "assets/css/style.css";
@import "assets/vendor/bootstrap/css/bootstrap.min.css";
#app {
  font-family: "Inconsolata", monosapce;
  color: #0d1e2d;
}
</style>
