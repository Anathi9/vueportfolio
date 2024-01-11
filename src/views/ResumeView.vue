<template>
    <div class="container vh-100">
        <div class="row">
            <div class="col-6"  style="width: 18rem;" v-for="Education in education " :key="Education">
                <h5 class="display-6">Education</h5>
                    <p>{{Education.place}}</p>
                    <hr>
                    <p>{{ Education.description }}</p>
                    <hr>
                    <p>{{Education.year}}</p>
            </div>
            <div class="col-6">
                <h5 class="display-5">Skills</h5>
                <div class="row">
                        <div class="row">
                            <div class="card m-5">
                                <div class="card-body">
                                    <h3 class="card-title"></h3>
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
        methods : {
            getEduca(){
                return this.$store.state.education
            },
            getSkill(){
                return this.$store.state.skills
            },

        },
        computed:{
         education(){
            console.log(this.$store.state.education);
            return this.$store.state.education
         },   
         skills(){
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

</style>