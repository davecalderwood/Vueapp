<template>
<div>
        <h1>{{msg}}</h1>
        <md-table>
      <md-table-row>
        <md-table-head md-numeric>Name</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Price</md-table-head>
      </md-table-row>
            <md-table-row v-for="(item, index) in cart" v-bind:key="index">
        <md-table-cell >{{item.name}}</md-table-cell>
        <md-table-cell>{{item.desc}}</md-table-cell>
        <md-table-cell>{{item.price}}</md-table-cell>
      </md-table-row>
        </md-table>
        <md-button class="md-raised" v-on:click="checkOut">Checkout</md-button>
</div>
    
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'cart',
    computed: {
        ...mapState(['cart'])
    },
    methods: {
        ...mapActions(['removeAll']),
        checkOut() {
            this.removeAll().then(() => {
                this.msg="Your packages have been sent, don't worry we know where you live!"
            })
        }
    }
    
}
</script>

