<!-- <template>
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

</style> -->



<!-- <template>
  <div class="container">
    <div class="contact-form">
      <h1>Reach Me</h1>
      <form action="https://formspree.io/f/xrgwdqen" class="form" method="post" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" v-model="formData.name" required class="form-control">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="formData.email" required class="form-control">
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" v-model="formData.message" required class="form-control"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-info">Submit</button>
        </div>
      </form>
    </div>
    <div class="personal-details">
      <h2>Personal Details</h2>
      <p><b>Name:</b> Anathi Josefu</p>
      <p><b>Email:</b> anathijosefu@gmail.com</p>
      <p><b>Phone:</b> 083 27 8 2711</p>
      <p><b>Address:</b> Makhaza , Cape Town, South Africa</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted with data:', this.formData);
    }
  }
};
</script>

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted with data:', this.formData);
    }
  }
};

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.contact-form {
  width: 50%;
  margin-right: 20px;
  font-family: 'Lobster', cursive;
}
.personal-details {
  width: 50%;
  font-family: 'Lobster', cursive;
}
.personal-details h2 {
  margin-bottom: 65px;
}
.form-group {
  margin-bottom: 50px;
}
.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.btn-primary {
  background-color: #949596;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.btn-primary:hover {
  background-color: #9A9B9C;
}
</style> -->



<template>
  <div class="container">
    <div class="contact-form">
      <h1>Reach Me</h1>
      <form action="https://formspree.io/f/xrgwdqen" class="form" method="post" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" v-model="formData.name" required class="form-control">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="formData.email" required class="form-control">
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" v-model="formData.message" required class="form-control"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-info">Submit</button>
        </div>
      </form>
    </div>
    <div class="personal-details">
      <h2>Personal Details</h2>
      <p><b>Name:</b> Anathi Josefu</p>
      <p><b>Email:</b> anathijosefu@gmail.com</p>
      <p><b>Phone:</b> 083 27 8 2711</p>
      <p><b>Address:</b> Makhaza , Cape Town, South Africa</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted with data:', this.formData);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
 
  background-size: cover;
  background-position: top;
}
.contact-form {
  width: 50%;
  margin-right: 20px;
  font-family: 'Lobster', cursive;
}
.personal-details {
  width: 50%;
  font-family: 'Lobster', cursive;
}
.personal-details h2 {
  margin-bottom: 65px;
}
.form-group {
  margin-bottom: 50px;
}
.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.btn-primary {
  background-color: #949596;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.btn-primary:hover {
  background-color: #9A9B9C;
}
p {
  font-family: 'Your Google Font', sans-serif; /* Replace 'Your Google Font' with the name of the Google Font you want to use */
}
</style>
