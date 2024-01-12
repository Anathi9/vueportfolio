<template>
  <div class="container">
    <div class="spinner-border" role="status" id="spinner">
  <span class="visually-hidden">Loading...</span>
</div>

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
#spinner{
    position: absolute;
    bottom: 35%;
    left: 30%;

}
</style>