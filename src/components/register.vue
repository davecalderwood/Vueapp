<template>
<div class="container" id="app">
    <h1 class="title">
      Registration Form
    </h1>
    <div class="content">
      <form name="contact">

        <input class="form-field" v-model="userName" name="name" id="userName" placeholder="User Name" required /><br/>
        <input class="form-field" v-model="password" name="password" id="password" placeholder="Password" required /><br/>

        <input class="form-field" v-model="email" name="email" id="email" type="email" placeholder="Email Address" required /><span class="fa fa-envelope"></span><br/>
        <input class="form-field" name="name" id="name" placeholder="Greatest Fears" required /><br/>
        <button type="submit" @click="checkForm">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: {
    userName: '',
    password: '',
    email: '',
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];
      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
      
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>