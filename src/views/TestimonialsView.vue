<template>
     <div class="container vh-150">
        <h2 >Testimonials</h2>
       <div class="row mx-5">
           <div class="row">
            <div class="card m-5" id="c-body4" style="width: 18rem;" v-for="Testimonials in testimonials " :key="Testimonials">
      <div class="card-body">
        <img class="card-images" :src=" Testimonials.profile" alt="Profile picture" loading="lazy" width="100" height="100" id="imgC">
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