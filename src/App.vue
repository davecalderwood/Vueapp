<template>
  <div>
    <md-toolbar class="md-accent" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Title</h3>
      <md-button>Refresh</md-button>
      <md-button component={router-link} to="/test" class="md-primary none">test</md-button>
    </md-toolbar>
    <router-view/>
        <div class="phone-viewport">
      <md-bottom-bar md-type="shift" :md-theme="'bottom-bar-' + theme">
        <md-bottom-bar-item md-label="Home" @click="theme = 'teal'">Home</md-bottom-bar-item>
        <md-bottom-bar-item md-label="Pages" @click="theme = 'orange'">About</md-bottom-bar-item>
        <md-bottom-bar-item md-label="Posts" @click="theme = 'blue'">Contact</md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<style lang="scss" >
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }
  .none { 
    color: #77ccfc;
  }
</style>
<script>
export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
