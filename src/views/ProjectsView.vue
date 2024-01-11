<template>
    <div class="container vh-150">
       <h5 class="display-5">Projects</h5>
      <div class="row">
          <div class="row">
           <div class="card m-5" id="" style="width: 18rem;" v-for="Projects in projects " :key="Projects">
     <div class="card-body">
       <img class="card-images" :src=" Projects.image" alt="Profile picture" width="80" height="80">
       <h6 class="card-title">{{Projects.name}}</h6>
       <h6 class="card-subtitle">{{ Projects.description }}</h6>
       <span class="card-text">{{Projects.gitHub}}</span>
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

</style>