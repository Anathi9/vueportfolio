    <!-- <template>
    <div class="container vh-150">
       <h2 >Projects</h2>
      <div class="row">
          <div class="row mx-5">
           <div class="card m-5" id="c-body1" style="width: 18rem;" v-for="Projects in projects " :key="Projects">
     <div class="card-body">
       <img class="card-images" :src=" Projects.image" alt="Profile picture" loading="lazy" width="150" height="80" id="img3">
       <h6 class="card-title">{{Projects.name}}</h6>
       <h6 class="card-subtitle">{{ Projects.description }}</h6>
       
       <button class="btn btn-info m-4" ><a :href="Projects.gitHub" target="_blank">github</a></button>
       <button class="btn btn-info"><a :href="Projects.netlify" target="_blank">netlify</a></button>
       
       
     </div>
   </div>
   </div>
      </div>
   </div>
</template>

<script>
    export default {
        methods : {
            getProj(){
                return this.$store.state.projects
            }
        },
        computed:{
         projects(){
            console.log(this.$store.state.projects);
            return this.$store.state.projects
         }   
        },
        mounted() {
           return this.$store.dispatch('fetchProjects') 
        }
    }
    
</script>

<style scoped>

</style> -->

<template>
    <div class="projects-container bg-black">
      <h2 class="text-white">Projects</h2>
      <div class="row mx-3">
        <div class="col-md-4 col-sm-6" v-for="project in projects" :key="project.name">
          <div class="card m-3 bg-dark text-white" @mouseover="toggleHover" @mouseleave="toggleHover">
            <div class="card-body">
              <img class="card-images" :src="project.image" alt="Project image" loading="lazy" width="150" height="80">
              <h6 class="card-title">{{ project.name }}</h6>
              <h6 class="card-subtitle">{{ project.description }}</h6>
              <button class="btn btn-info m-2"><a :href="project.gitHub" target="_blank" class="text-white">GitHub</a></button>
              <button class="btn btn-info m-2"><a :href="project.netlify" target="_blank" class="text-white">Netlify</a></button>
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
  }
  
  .hovered .card {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    .card {
      width: 100%;
    }
  }
  </style>
  