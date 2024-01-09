<template>
    <nav class="navbar navbar-expand">
  <div class="container-fluid">
    <RouterLink to="/">
     <img class="img-fluid" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYSFmSh3aXu-LYQEnPHAogE38xKlm4t03HEBZ9DNNC2ZVaM2EWgJDq35S1Xx38tCngtVFKHBpOW7URStJXmC51GwDXe9=w600-h1284" width="60">
    </RouterLink>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active text-white">
           Home
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active text-white" to="/about">
            About
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active text-white" to="/resume">
            Resume
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active text-white" to="/project">
            Projects
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active text-white" to="/testimonials">
            Testimonials
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active text-white" to="/contact">
            Contacts
          </RouterLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name : 'NavBarComp'
    }  
    
    
</script>

<style scoped>

</style>