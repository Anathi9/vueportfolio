
<template>
    <div class="projects-container bg-black">
      <h2 class=" p text-white">Projects</h2>
      <div class="row mx-3">
        <div class="col-md-4 col-sm-6" v-for="project in projects" :key="project.name">
          <div class="card m-3 bg-dark text-white" @mouseover="toggleHover" @mouseleave="toggleHover">
            <div class="card-body">
              <img class="card-images" :src="project.image" alt="Project image" loading="lazy" width="150" height="80">
              <h6 class="card-title">{{ project.name }}</h6>
              <h6 class="card-subtitle">{{ project.description }}</h6>
              <button class="btn btn-info m-2 "><a :href="project.gitHub" target="_blank" class="text-white">GitHub</a></button>
              <button class="btn btn-info m-2 "><a :href="project.netlify" target="_blank" class="text-white">Netlify</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      projects() {
        return this.$store.state.projects;
      }
    },
    methods: {
      toggleHover(event) {
        event.currentTarget.classList.toggle('hovered');
      }
    },
    mounted() {
      this.$store.dispatch('fetchProjects');
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
  .projects-container {
    padding: 25px;
    overflow-y: auto;
  }

  
  .bg-black {
    background-color: black;
  }
  
  .text-white {
    color: white;
  }
  
  .bg-dark {
    background-color: #333;
  }
  
  .card {
    transition: transform 0.3s ease-in-out;
    overflow-y: hidden;
  }
  
  .hovered .card {
    transform: scale(1.05);
    overflow-y: hidden;
  }
  
  @media (max-width: 768px) {
    .card {
      width: 100%;
    }
    .projects-container{
        margin-left: -8%;
    }
  }

  
.projects-container {
  padding: 25px;
}

.bg-black {
  background-color: black;
}

.text-white {
  color: white;
}

.bg-dark {
  background-color: #333;
}

.card {
  transition: transform 0.3s ease-in-out;
  overflow-y: hidden;
}

.card:hover {
  transform: translateY(-5px); 
  overflow-y: hidden;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    overflow-y: hidden;
  }
}
.card-title{
    font-family:'orbitron';
}
.card-subtitle{
    font-family:'orbitron';
}
.p{
    font-family:'orbitron';
    overflow-y: hidden;
}
.btn{
    font-family: 'orbotron';
}
</style>


  







   

