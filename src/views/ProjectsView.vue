<template>
    <div class="container vh-150">
       <h5 >Projects</h5>
      <div class="row">
          <div class="row mx-5">
           <div class="card m-5" id="c-body1" style="width: 18rem;" v-for="Projects in projects " :key="Projects">
     <div class="card-body">
       <img class="card-images" :src=" Projects.image" alt="Profile picture" loading="lazy" width="80" height="80" id="img3">
       <h6 class="card-title">{{Projects.name}}</h6>
       <h6 class="card-subtitle">{{ Projects.description }}</h6>
       <!-- < :href=""> -->
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

</style>