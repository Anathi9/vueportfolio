
<template>
  <div class="contacts bg-dark py-5">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="card bg-light text-dark p-3">
            <div class="card-body">
              <h2 class="c card-title text-center text-dark mb-4">Let's get in touch</h2>
              <form action="https://formspree.io/f/xrgwdqen" method="post">
                <div class="mb-3">
                  <label for="inputname" class="form-label text-dark N orbitron-font">Full Name</label>
                  <input type="text" name="FULL_NAME" class="form-control orbitron-font" id="inputname" required>
                </div>
                <div class="mb-3">
                  <label for="Email" class="form-label text-dark E orbitron-font">Email</label>
                  <input type="email" name="EMAIL" class="form-control orbitron-font" id="Email" required>
                </div>
                <div class="mb-3">
                  <label for="inputYourmessage" class="form-label text-dark orbitron-font">Your message</label>
                  <textarea name="message" class="form-control message" required id="inputYourmessage" placeholder="Enter your message"></textarea>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-dark orbitron-font">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="deta">
            <div>
              <h2 class="t card-title text-center text-dark mb-4">Personal Details</h2>
              <p class="N orbitron-font"><b>Name:</b> Anathi Josefu</p>
              <p class="E orbitron-font"><b>Email:</b> anathijosefu@gmail.com</p>
              <p class="P orbitron-font"><b>Phone:</b> 083 27 8 2711</p>
              <p class="A orbitron-font"><b>Address:</b> Makhaza , Khayelitsha, Cape Town</p>
              <div class="social-icons text-center mt-4">
                <a target="_blank" href="https://www.linkedin.com/in/anathi-josefu-00b354262/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <img class="social" src="https://i.ibb.co/cD8SNvV/5305157-connection-linkedin-network-linkedin-logo-icon.png" alt="LinkedIn" width="30px">
                </a>
                <a target="_blank" href="https://github.com/Anathi9">
                  <img class="social1" src="https://i.ibb.co/HHJ4P0P/t-500x300.jpg" alt="Github" width="30px">
                </a>
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
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');

.message {
  min-height: 100px;
  color: black;
  overflow-y: hidden;
  font-family: 'Orbitron', sans-serif;
  font-size: large;
}

.social-icons a {
  font-size: 24px;
  overflow-y: hidden;
}

.deta {
  color: white;
  margin-top: 100px;
  overflow-y: hidden;
}

.social1 {
  margin: 10px;
  overflow-y: hidden;
}

.c {
  overflow-y: hidden;
  font-family: 'Orbitron', sans-serif;
  font-size: large;
}

.t {
  overflow-y: hidden;
}

.N, .E, .P, .A {
  font-family: 'Orbitron', sans-serif;
  font-size: large;
}

.btn {
  font-family: 'Orbitron', sans-serif;
  font-size: large;
}

.orbitron-font {
  font-family: 'Orbitron', sans-serif;
  font-size: large;
}
</style>
