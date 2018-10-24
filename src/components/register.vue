<template>
  <div class="centered-container">

    <div class="title">
      <div class="md-title"></div>
      Registration Form
      </div>
    <div class="content">
      <form name="contact">

        <input class="form-field" v-model="user" name="name" id="userName" placeholder="User Name" required /><br/>
        <input class="form-field" v-model="password" name="password" id="password" placeholder="Password" required /><br/>

        <input class="form-field" v-model="email" name="email" id="email" type="email" placeholder="Email Address" required /><span class="fa fa-envelope"></span><br/>
        <button @click="clickHandler">Register</button>
      </form>
      {{this.response.msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return ( {
    user: '',
    password: '',
    email: '',
    response:{msg:''},
    })
  },
  methods: {
          async clickHandler() {
            event.preventDefault()
          const myURL = `https://storeapiexpress-fpckhcjnky.now.sh/users/`
          const reqContent = {
            method: "POST",
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({username: this.user, emailaddress:this.email, password: this.password,})
          }
          let theReq = new Request(myURL, reqContent)
          await fetch(theReq) 
              .then(res => {return res.json()})
              .then ( res => {
               this.response = res})
              .catch ()

      this.user =''
      this.email =''
      this.password =''
          },
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

<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .tite {
    text-allign: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button{
      margin: 0;
    }
  }
  .form {
    margin-botom: 60px;
  }
  .background {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>