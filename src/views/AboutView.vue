 <!-- <template>
  <div class="about">
    <div class="container" >
      <h5 >About</h5>
      <div class="row align-content-center">
        <div class="col">
          <img src ="https://i.ibb.co/GVQhPX9/DSC-0316-1.jpg" alt="profile"  loading="lazy" width="250" id="img2">
          <div class="col p-4">
            <p class="lead"> Greetings!I am Anathi Josefu am an aspiring full-stack Developer.
                I am eager to leverage my kowledge and experience as an aspiring full-stack developer with a strong focus on reliability,communication and willigness to take any challenges.
                I aim to excel as a full-stack developer which allows me to further develop my skills and actively contribute to the organisation objective.I am young woman who is passionate and driven about being a full-stack developer,I want to apply my skills and knowledge so that I can make people's job more easier and productive.
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
        try{
          this.$store.dispatch.about;
        }catch(fault){
        console.Console.fault("Fault in store dispatch:", );
        }

      },
    };
</script>

<style scoped>

</style> -->

 


<template>
  <div class="about">
    <h5>About</h5>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img src="https://i.ibb.co/GVQhPX9/DSC-0316-1.jpg" alt="profile" loading="lazy" width="250" id="img2">
        </div>
        <div class="col-md-8">
          <div class="p-4">
            <p class="lead about-text">
              <span>Name:</span> Anathi <br>
              <span>Surname:</span> Josefu<br>
              <span>Age:</span> 25<br>
              <span>Email:</span> anathijosefu@gmail.com
            </p>
            <p class="lead about-text">
              Greetings! I am Anathi Josefu, an aspiring full-stack Developer. I am eager to leverage my knowledge and experience as an aspiring full-stack developer with a strong focus on reliability, communication, and willingness to take on any challenges. I aim to excel as a full-stack developer, which allows me to further develop my skills and actively contribute to the organization's objectives. I am a young woman who is passionate and driven about being a full-stack developer. I want to apply my skills and knowledge so that I can make people's jobs easier and more productive.
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
  mounted() {
    try {
      this.$store.dispatch.about;
    } catch (fault) {
      console.Console.fault("Fault in store dispatch:", );
    }
  },
};
</script>

<style scoped>
.about {
  background-color: #000;
  background-size: cover;
  color: #fff;
  padding-top: 50px;
  padding-bottom: 50px;
}
.about img {
  display: block;
  margin: 0 auto;
}
.about-text {
  text-align: justify;
}
.about-text:hover {
  color: #ffcc00; 
}
.about span {
  font-weight: bold;
}
</style>





