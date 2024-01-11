<template>
    <div class="footer container-fluid ">
        <div class="row">
            <p class="lead">Anathi Josefu &copy;
            <span>{{ currentYear }}</span>
            <i class="bi bi-facebook mx-2"></i>
            <i class="bi bi-linkedin"></i>
            </p>

        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'FooterComp',
       data() {
        return{
            currentYear: new Date().getFullYear()
        }
       }
        
    }
</script>

<style scoped>

</style>