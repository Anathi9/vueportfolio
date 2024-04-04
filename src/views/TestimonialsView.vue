

  <template>
    <div class="testimonials-container bg-black py-5">
    
      <div class="row mx-auto">
        <div class="col-lg-4 col-md-4 col-sm-6 mb-4" v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="card bg-dark text-white testimonial-card">
            <div class="card-body d-flex flex-column align-items-center">
              <img class="card-images mb-3" :src="testimonial.profile" alt="Profile picture" loading="lazy" width="120" height="120">
              <h3 class="card-title mb-2">{{ testimonial.name }}</h3>
              <h4 class="card-subtitle mb-3">{{ testimonial.surname }}</h4>
              <span class="card-text text-center">{{ testimonial.quotes }}</span>
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
  }
  
  .text-white {
    color: white;
  }
  
  .bg-dark {
    background-color: #333;
  }
  
  .testimonial-card {
    transition: transform 0.3s;
    height: 100%;
    overflow-y: hidden;
  }
  
  .testimonial-card:hover {
    transform: scale(1.05);
    overflow-y: hidden;
  }
  
  .card-body {
    padding: 8px;
    overflow-y: hidden;
  }
  
  .card-images {
    display: block;
    margin: 0 auto;
    overflow-y: hidden;
  }
  
  .card-title,
  .card-subtitle {
    text-align: center;
    overflow-y: hidden;
  }
  
  .card-text {
    text-align: justify;
    overflow-y: hidden;
  }

  .mb-4 {
    margin-bottom: 20px;
    overflow-y: hidden;
  }
  
  
  .py-5 {
    padding-bottom: 20px;
    overflow-y: hidden;
  }
  </style>
  
