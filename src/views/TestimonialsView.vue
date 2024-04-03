<!-- <template>
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

</style> -->


  
  
<template>
    <div class="testimonials-container bg-black">
      <h2 class="text-white text-center">Testimonials</h2>
      <div class="row mx-auto">
        <div class="col-lg-4 col-md-6 col-sm-12" v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="card m-3 bg-dark text-white testimonial-card">
            <div class="card-body">
              <img class="card-images" :src="testimonial.profile" alt="Profile picture" loading="lazy" width="80" height="80">
              <h3 class="card-title">{{ testimonial.name }}</h3>
              <h4 class="card-subtitle">{{ testimonial.surname }}</h4>
              <span class="card-text">{{ testimonial.quotes }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      testimonials() {
        return this.$store.state.testimonials;
      }
    },
    mounted() {
      this.$store.dispatch('fetchTestimonials');
    }
  };
  </script>
  
  <style scoped>
  .testimonials-container {
    background-color: black;
    padding: 25px;
  }
  
  .text-white {
    color: white;
  }
  
  .bg-dark {
    background-color: #333;
  }
  
  .testimonial-card {
    transition: transform 0.3s;
  }
  
  .testimonial-card:hover {
    transform: scale(1.05);
  }
  
  .card-body {
    padding: 8px;
  }
  
  .card-images {
    display: block;
    margin: 0 auto;
  }
  
  .card-title,
  .card-subtitle {
    text-align: center;
  }
  
  .card-text {
    text-align: justify;
  }
  </style>
  
  