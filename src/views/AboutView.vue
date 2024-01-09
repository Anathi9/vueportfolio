<template>
  <div class="about">
    <div class="container" >
      <div class="row vh-100 align-content-center">
        <div class="col">
          <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYT3TIXG15XCOtLGzgZxHDTU-Fx95dqBEvzoVG4t6oyv_4q9F0j_6c80GTPozp40bYmgzt0v3DRMpWDnfu6BP99iUH6qRQ=w1960-h4196" alt="" loading="lazy" width="250">
          <div class="col">
            <p>I am Anathi Josefu am an aspiring full-stack Developer.
 I am eager to leverage my kowledge  and experience as an aspiring full-stack developer with a strong focus on reliability,communication and willigness to take any challenges.
 I aim to excel as a full-stack developer which allows me to further develop  my skills and actively contribute to the organisation objective.
            </p>
         
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      computed: {
        about() {
          return this.$store.state.about;
        }
      },
      mounted()  {
        this.$store.dispatch.about;
      }
    }
</script>

<style scoped>

</style>-