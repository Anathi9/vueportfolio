<template>
     <div class="container vh-150">
        <h5 class="display-5">Testimonials</h5>
       <div class="row">
           <div class="row">
            <div class="card m-5" style="width: 18rem;" v-for="Testimonials in testimonials " :key="Testimonials">
      <div class="card-body">
        <img class="card-images" :src=" Testimonials.profile" alt="Profile picture" width="200" height="200">
        <h3 class="card-title">{{Testimonials.name}}</h3>
        <h4 class="card-subtitle">{{ Testimonials.surname }}</h4>
        <span class="card-text">{{Testimonials.quotes}}</span>
      </div>
    </div>
    </div>
       </div>
    </div>
</template>

<script>
     export default {
        methods : {
            getTest(){
                return this.$store.state.testimonials
            }
        },
        computed:{
         testimonials(){
            console.log(this.$store.state.testimonials);
            return this.$store.state.testimonials
         }   
        },
        mounted() {
           return this.$store.dispatch('fetchTestimonials') 
        }
    }
</script>

<style scoped>

</style>