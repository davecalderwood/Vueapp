
<template class ="blueboi">
  <div class="hello, blueboi">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Ryley inc.'
    }
  }
} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blueboi{
    background-image: url("https://i.imgur.com/4QaiZXd.png");
    background-repeat:no-repeat;
    background-size: cover;
    border-style: none;
    margin: 5em  10em;
    height: 31.5em;
}
h1, h2, div {
  text-shadow: .07em .07em #bdbdbd;
  opacity: 1;
  padding: 5.5em;
  text-align: center;
  color: #ffffff;
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
