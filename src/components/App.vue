<template>
  <div>
    <md-toolbar class="md-accent" md-elevation="1">
      <h3 component={router-link} to="/" class="md-title, none" style="flex: 1">Ryley Inc.</h3>
      <md-button component={router-link} to="/register" class="none">Register</md-button>
      <md-button component={router-link} to="/login" class="none">Log in</md-button>
      <md-button component={router-link} to="/products" class="none" >Products</md-button>
      <md-button component={router-link} to="/orders" class="none" >Past Orders</md-button>
      <md-button component={router-link} to="/cart" class="none"><md-icon>shopping_cart</md-icon></md-button>
    </md-toolbar>
    <div class="blueboi">
    <router-view/>
    </div>
        <div class="phone-viewport, bottom, space">
      <md-bottom-bar class="none" md-type="fixed-bottom">
        <md-bottom-bar-item class="none" component={router-link} to="/" md-label="Home" @click="theme = 'teal'">Home</md-bottom-bar-item>
        <md-bottom-bar-item class="none" component={router-link} to="/about" md-label="Pages" @click="theme = 'orange'">About</md-bottom-bar-item>
        <md-bottom-bar-item class="none" component={router-link} to="/name" md-label="Posts" @click="theme = 'blue'">Contact</md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import store from '../store'

export default {
  name: 'App',
  computed: {
    ...mapState(['isLoggedIn'])
  },
}
</script>


<style lang="scss" >
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }

  .none { 
    color: #77ccfc;
    text-shadow: .05em .05em #dbdbdb
  }
  .bottom {
    position: absolute;
    bottom: 1em;
    width: 100%;
  }
  .space{
padding-top: 10px;
  }
</style>
