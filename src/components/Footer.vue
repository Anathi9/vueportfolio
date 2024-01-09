<template>
    <div class="footer container-">
        <div class="row">
            <p class="lead">Anathi Josefu &copy;
            <span>{{ currentYear }}</span>
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