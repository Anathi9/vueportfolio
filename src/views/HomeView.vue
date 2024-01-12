<template>
  <div class="container">
    <div class="row vh-100 align-items-center">
      <div class="col-md-5 set-md-2 text-md-end">
        <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYT3TIXG15XCOtLGzgZxHDTU-Fx95dqBEvzoVG4t6oyv_4q9F0j_6c80GTPozp40bYmgzt0v3DRMpWDnfu6BP99iUH6qRQ=w1960-h4196" alt="" loading="lazy" width="300" id="img1">
      </div>
      <div class="col-md-6 my-5 set-md-1">
        <p class="display-5" id="msg">
          Hi, I am <span class="para1">ANATHI JOSEFU</span>
        </p>
        <span class="lead">
          I am an aspiring full-stack developer. I aim to excel as a full-stack developer which allows me to further develop my skills.
        </span>
      </div>
    </div>
  <Spinner  />
  </div>
</template>


<script>
import Spinner from '@/components/Spinner.vue';
export default {
components:{
  Spinner
}
}
</script>

<style scoped></style>
