
 <template>
    <div class="bg-black py-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="e text-white mb-4">Education</h2>
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
        <div class="row mt-5">
          <div class="col">
            <h2 class="w text-white mb-4">Work Experience</h2>
            <div class="work-experience-cards">
              Add work experience cards here 
              <p><b>company:</b> Life Choices  Academy</p>
                 <p><b>Position:</b>LC intern</p>
                 <p><b>year:</b>2024</p>
    
            </div>
            <div class="work-experience-cards">
              
              <p><b>company:</b> Noxolo Xauka primary school</p>
                 <p><b>Position:</b>Education Assistant</p>
                 <p><b>year:</b>2020-2022</p>
    
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
  
  .card-title,
  .card-subtitle,
  .card-text {
    font-family: 'Orbitron', sans-serif;
  }
  
  .e,
  .s,
  .w {
    font-family: 'Orbitron', sans-serif;
    overflow-y: hidden;
  }
  .work-experience-cards{ 
    color:white;
    font-family: 'Orbitron', sans-serif;
  }
  </style>  

  
