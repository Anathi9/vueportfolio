<template>
    <div class="spinner">
<spinner v-if="loading"/>
    </div>
</template>

<script>
    export default {
       name: 'SpinnerComp',
       data() {
        return{
            loading:true,
        };
       },
    };
</script>

<style scoped>

</style>