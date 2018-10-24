<template>
  <div id="productlist">
      <form>
<input v-model="valfriend"/>
<button v-on:click="Clicked">Search</button>
</form>
    <div class="md-layout">
      <productcard class="md-layout-item" v-for="(item, index) in productLine" v-bind:key="index" v-bind:name="item"/>
    </div>
  </div>
</template>

<script>
import productcard from '@/components/card.vue'
import {mapMutations,mapActions} from 'vuex'
export default {
  name: 'products',
  components: {
    productcard
  },
  data() {
   return { productLine: [], valfriend:""}
  },
  methods: {
      ...mapActions(['addItem']),
    Clicked (e) {
        e.preventDefault();
        const myURL = `https://storeapiexpress-fpckhcjnky.now.sh/products/${this.valfriend}`
        fetch(myURL) 
            .then(res => {return res.json()})
            .then ( res => {
                this.productLine = res
            })
            .catch (this.productLine = [])
    },
  },
  mounted () {
    const myURL = `https://storeapiexpress-fpckhcjnky.now.sh/products `
    fetch(myURL) 
        .then(res => {return res.json()})
        .then ( res => {
            this.productLine = res
            console.log(this.productLine)
        })
        .catch ();
  }
}
</script>
<style lang="scss" scoped>
  .md-icon-button  {
    overflow-x:auto;
    border: 1px solid black 
  }
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    padding-bottom: 1em;
  }
</style>
