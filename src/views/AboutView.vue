<!-- 
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
              <span>Date of birth:</span> 27-08-1999<br>
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
  padding-bottom: 150px;

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
</style> -->




 <template>
  <div class="about">
    <h5>About</h5>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img src="https://i.ibb.co/GVQhPX9/DSC-0316-1.jpg" alt="profile" loading="lazy" width="250" id="img2" class="profile-img">
        </div>
        <div class="col-md-8">
          <div class="p-4 animate-text">
            <p class="lead about-text">
              <span>Name:</span> Anathi <br>
              <span>Surname:</span> Josefu<br>
              <span>Date of birth:</span> 27-08-1999<br>
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
  
};
</script>

<style scoped>
.about {
  background-color: #000;
  background-size: cover;
  color: #fff;
  padding-top: 50px;
  padding-bottom: 150px;
}

.profile-img {
  transition: transform 0.3s ease-in-out;
}

.profile-img:hover {
  transform: rotate(360deg);
}

.about-text {
  text-align: left;
  margin: 0; 
}

.about-text span {
  font-weight: bold;
}

.animate-text {
  animation: slideIn 1s ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-50px); 
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.about-text:hover {
  color: #ffcc00; 
}
.about{
  text-align: center;
}
.lead {
  margin:20px;
}
</style>
