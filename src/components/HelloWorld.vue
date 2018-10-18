
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> api.org/{{msg}}</h2>
    <input type="text" v-model="msg">
    <li>
      <router-link to="/test">Test</router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Hell'
    }
  }
} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, div {
  text-align: center;
  font-weight: normal;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
