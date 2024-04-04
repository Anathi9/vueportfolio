<template>
  <div class="app"> 
    <div class="row vh-100 align-items-center">
      <div class="col-md-5 set-md-2 text-md-end">
        <img src="https://i.ibb.co/GVQhPX9/DSC-0316-1.jpg" alt="" loading="lazy" width="300" id="img1">
      </div>
      <div class="col-md-6 my-5 set-md-1">
        <p class="display-5" id="msg">
          <span class="para1">Hi, I'M ANATHI JOSEFU</span>
        </p>
        <span class="lead">
          I am an aspiring full-stack developer. I aim to excel as a full-stack developer which allows me to further develop my skills.
        </span>
        <router-link to="/project" class="btn btn-primary mt-3">View my work</router-link>
      </div>
    </div>
    <Spinner /> 
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
export default {
  components: {
    Spinner
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

.app {
  background-image: url("https://i.ibb.co/K56fHDX/7067c29f2c2336c23c827cfda44e7c61.gif");
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  overflow-y: hidden; 
}

.display-5, .lead {
  font-family: 'orbitron';
  /* font-weight: bold; */
  color:  rgb(104, 186, 236);
  overflow-y: hidden;
}

.btn {
  margin: 100px;
  font-family:'orbitron'
}
</style>
