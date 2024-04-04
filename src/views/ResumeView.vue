 <!-- <template>
    
    <div class="container vh-150">
        <h5 >Education</h5>
       <div class="row mx-5">
           <div class="row">
            <div class="card m-5" id="c-body2" style="width: 18rem;" v-for="Education in education " :key="Education">
      <div class="card-body">
        <img class="card-images" :src=" Education.image" alt="Profile picture" loading="lazy" width="80" height="80" id="img4">
        <h4 class="card-title">{{Education.place}}</h4>
        <h6 class="card-subtitle">{{ Education.description }}</h6>
        <span class="card-text">{{Education.year}}</span>
    
      </div>
    </div>
    </div>
       </div>
    </div>
    
    <div class="container vh-150"> 
        <h5 >Skills</h5>
       <div class="row mx-5">
           <div class="row">
            <div class="card m-5" id="c-body3" style="width: 12rem;" v-for="Skills in skills " :key="Skills">
      <div class="card-body">
        <img class="card-images" :src=" Skills.Image" alt="Profile picture" loading="lazy" width="80" height="80" id="img5">
        <h4 class="card-title">{{Skills.title}}</h4>
        <h6 class="card-subtitle">{{ Skills.description }}</h6>
    
      </div>
    </div>
    </div>
       </div>
    </div>
</template>

<script>
export default {
    methods: {
        getEduca() {
            return this.$store.state.education
        },
        getSkill() {
            return this.$store.state.skills
        },

    },
    computed: {
        education() {
            console.log(this.$store.state.education);
            return this.$store.state.education
        },
        skills() {
            console.log(this.$store.state.skills);
            return this.$store.state.skills
        }
    },
    mounted() {
        return this.$store.dispatch('fetchEducation'),
            this.$store.dispatch('fetchSkills')
    }
}
</script>

<style scoped>
</style> -->



  

  
   <!-- <template>
    <div class="bg-black py-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="text-white mb-4">Education</h2>
            <div class="education-cards">
              <div v-for="(Education, index) in education" :key="'education-' + index" class="card bg-dark text-white mb-3">
                <img :src="Education.image" alt="Profile picture" class="card-img-top card-image">
                <div class="card-body">
                  <h4 class="card-title">{{Education.place}}</h4>
                  <h6 class="card-subtitle">{{ Education.description }}</h6>
                  <span class="card-text">{{Education.year}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <h2 class="text-white mb-4">Skills</h2>
            <div class="skills-cards">
              <div v-for="(Skills, index) in skills" :key="'skills-' + index" class="card bg-dark text-white mb-3">
                <img :src="Skills.Image" alt="Profile picture" class="card-img-top card-image">
                <div class="card-body">
                  <h4 class="card-title">{{Skills.title}}</h4>
                  <h6 class="card-subtitle">{{ Skills.description }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      education() {
        return this.$store.state.education
      },
      skills() {
        return this.$store.state.skills
      }
    },
    mounted() {
      this.$store.dispatch('fetchEducation');
      this.$store.dispatch('fetchSkills');
    }
  }
  </script>
  
  <style scoped>
  .bg-black {
    background-color: #000;
  }
  .card {
    transition: transform 0.3s ease;
  }
  .card:hover {
    transform: translateY(-5px);
  }
  .card-image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  </style>   --> -->


  
  <!-- <template>
    <div class="education-skills-container" style="background-color: black;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <h2 class="section-heading">Education</h2>
            <div class="row">
              <div class="col-md-4" v-for="(edu, index) in education" :key="'edu-' + index">
                <div class="card mb-4 animated fadeInUp">
                  <div class="card-body">
                    <img :src="edu.image" class="card-img-top" alt="Education Image">
                    <h5 class="card-title">{{ edu.place }}</h5>
                    <p class="card-text">{{ edu.description }}</p>
                    <span class="card-text">{{edu.year}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <h2 class="section-heading">Skills</h2>
            <div class="row">
              <div class="col-md-4" v-for="(skill, index) in skills" :key="'skill-' + index">
                <div class="card mb-4 animated fadeInUp">
                  <div class="card-body">
                    <h5 class="card-title">{{ skill.title }}</h5>
                    <p class="card-text">{{ skill.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      education() {
        return this.$store.state.education;
      },
      skills() {
        return this.$store.state.skills;
      }
    },
    mounted() {
      this.$store.dispatch('fetchEducation');
      this.$store.dispatch('fetchSkills');
    }
  };
  </script>
  
  <style scoped>
  .education-skills-container {
    padding: 20px;
  }
  
  .section-heading {
    color: white;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .card {
    transition: transform 0.3s ease;
    background-color: #333;
    color: white;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .animated {
    animation-duration: 1s;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  
  .card-img-top {
    max-width: 70px;
    height: auto;
  }
  </style> -->
  
  
  
  
  <!-- <template>
    <div class="bg-black py-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="text-white mb-4" style="font-family: 'Orbitron', sans-serif;">Education</h2>
            <div class="education-cards">
              <div v-for="(Education, index) in education" :key="'education-' + index" class="card bg-dark text-white mb-3">
                <div class="card-body">
                  <img :src="Education.image" alt="Profile picture" class="card-img-top card-image">
                  <h4 class="card-title">{{Education.place}}</h4>
                  <h6 class="card-subtitle">{{ Education.description }}</h6>
                  <span class="card-text">{{Education.year}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <h2 class="text-white mb-4" style="font-family: 'Orbitron', sans-serif;">Skills</h2>
            <div class="skills-cards">
              <div v-for="(Skills, index) in skills" :key="'skills-' + index" class="card bg-dark text-white mb-3">
                <div class="card-body">
                  <img :src="Skills.Image" alt="Profile picture" class="card-img-top card-image">
                  <h4 class="card-title">{{Skills.title}}</h4>
                  <h6 class="card-subtitle">{{ Skills.description }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      education() {
        return this.$store.state.education
      },
      skills() {
        return this.$store.state.skills
      }
    },
    mounted() {
      this.$store.dispatch('fetchEducation');
      this.$store.dispatch('fetchSkills');
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
  
  .bg-black {
    background-color: #000;
  }
  
  .card {
    transition: transform 0.3s ease;
    overflow: hidden;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    transition: transform 0.3s ease;
  }
  
  .card:hover .card-image {
    transform: scale(1.2);
  }
  </style>
   -->


   <template>
    <div class="bg-black py-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class=" e text-white mb-4">Education</h2>
            <div class="education-cards">
              <div v-for="(Education, index) in education" :key="'education-' + index" class="card bg-dark text-white mb-3">
                <div class="card-body">
                  <img :src="Education.image" alt="Profile picture" class="card-img-top card-image">
                  <h4 class="card-title">{{Education.place}}</h4>
                  <h6 class="card-subtitle">{{ Education.description }}</h6>
                  <span class="card-text">{{Education.year}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <h2 class="s text-white mb-4">Skills</h2>
            <div class="skills-cards">
              <div v-for="(Skills, index) in skills" :key="'skills-' + index" class="card bg-dark text-white mb-3">
                <div class="card-body">
                  <img :src="Skills.Image" alt="Profile picture" class="card-img-top card-image">
                  <h4 class="card-title">{{Skills.title}}</h4>
                  <h6 class="card-subtitle">{{ Skills.description }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      education() {
        return this.$store.state.education
      },
      skills() {
        return this.$store.state.skills
      }
    },
    mounted() {
      this.$store.dispatch('fetchEducation');
      this.$store.dispatch('fetchSkills');
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
  
  body {
    
    overflow: hidden; 
  }
  
  .bg-black {
    background-color: #000;
  }
  
  .card {
    transition: transform 0.3s ease;
    overflow: hidden;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    transition: transform 0.3s ease;
  }
  
  .card:hover .card-image {
    transform: scale(1.2);
  }
  .card-title{
    font-family:'orbitron';
}
.card-subtitle{
    font-family:'orbitron';
}
.card-text{
    font-family:'orbitron';
}
.e{
    font-family:'orbitron';
    overflow-y: hidden;
}
.s{
    font-family:'orbitron';
    overflow-y: hidden;
}
  </style>
  