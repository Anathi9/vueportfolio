<template>
    <div class="container vh-100">
        <h5 class="display-5">Education</h5>
       <div class="row">
           <div class="row">
            <div class="card m-5" style="width: 18rem;" v-for="Education in education " :key="Education">
      <div class="card-body">
        <h5 class="card-title">{{Education.place}}</h5>
        <p class="card-text">{{ Education.description }}</p>
        <span class="btn btn-primary">{{Education.year}}</span>
      </div>
    </div>
    </div>
       </div>
    </div>


</template>

<script>
    export default {
        methods : {
            getEduca(){
                return this.$store.state.education
            }
        },
        computed:{
         education(){
            console.log(this.$store.state.education);
            return this.$store.state.education
         }   
        },
        mounted() {
           return this.$store.dispatch('fetchEducation') 
        }
    }
</script>

<style scoped>

</style>