<template>
    
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

<style scoped></style>