<template>
<div>
        <md-table>
      <md-table-row>
        <md-table-head md-numeric>Name</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Price</md-table-head>
        <md-table-head>Date of Purchase</md-table-head>
      </md-table-row>
            <md-table-row v-for="(item, index) in orders" v-bind:key="index">
        <md-table-cell >{{item.name}}</md-table-cell>
        <md-table-cell>{{item.desc}}</md-table-cell>
        <md-table-cell>{{item.price}}</md-table-cell>
        <md-table-cell>{{item.CheckoutTime}}</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
        </md-table>
</div>
    
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'orders',
    computed: {
        ...mapState(['orders'])
    }   
}
</script> 