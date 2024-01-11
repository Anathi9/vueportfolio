<template>

  <main class="container-fluid">
  <NavBar />
  
    <router-view/>
    <Spinner />
    <Footer/>
  </main>


</template>


<script>

import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {

    NavBar,
    Footer
  }
}
</script>

<style src="@/assets/css/style.css">


</style>

