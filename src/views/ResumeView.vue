<template>
    
    <div class="container vh-150">
        <h5 >Education</h5>
       <div class="row">
           <div class="row">
            <div class="card m-5" id="c-body2" style="width: 18rem;" v-for="Education in education " :key="Education">
      <div class="card-body">
        <img class="card-images" :src=" Education.image" alt="Profile picture" loading="lazy" width="100" height="100">
        <h3 class="card-title">{{Education.place}}</h3>
        <h4 class="card-subtitle">{{ Education.description }}</h4>
        <span class="card-text">{{Education.year}}</span>
    
      </div>
    </div>
    </div>
       </div>
    </div>
    
    <div class="container vh-150">
        <h5 >Skills</h5>
       <div class="row">
           <div class="row">
            <div class="card m-5" id="c-body3" style="width: 12rem;" v-for="Skills in skills " :key="Skills">
      <div class="card-body">
        <img class="card-images" :src=" Skills.Image" alt="Profile picture" loading="lazy" width="100" height="100">
        <h3 class="card-title">{{Skills.title}}</h3>
        <h4 class="card-subtitle">{{ Skills.description }}</h4>
    
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