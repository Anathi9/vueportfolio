<template>
    <div class="contacts"  id="contactMe">
        <div class="container  vh-100 ">
        <div class="row text-center" >
      <div class="header py-5">
        <h2 class="display-5 text-info">Let's get in touch</h2>
      </div>
    </div>
    <form action="https://formspree.io/f/xrgwdqen" method="post" class="row g-3">
      <div class="col-md-6">
        <label for="inputname" class="form-label text-info">Full Name</label>
        <input type="name" name="FULL_NAME" class="form-control" id="inputname" required>
      </div>
      <div class="col-md-6">
        <label for="Email" class="form-label text-info">Email</label>
        <input type="Email" name="EMAIL" class="form-control" id="Email" required>
      </div>
      <div class="col-12">
        <label for="inputAYour message" class="form-label text-info">Your message</label>
        <input type="text" name="message" class="form-control message p-3" required id="inputYourmessage" placeholder="enter your message">
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-dark text-info">Send</button>
      </div>
    </form>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>