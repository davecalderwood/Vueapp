<template>
    <b-card  bg-variant="light" text-variant="black" v-bind:title="name">
      <p class="card-text">
        {{ desc }} | {{ price }}
      </p>
    </b-card>
</template>

<script>
export default {
  name: 'itemCard',
  props: {
    name: String,
    desc: String,
    price: String,
  }
}
</script>