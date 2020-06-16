<template>
  <v-layout row wrap>
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"> </stock>
  </v-layout>
</template>

<script>

import Stock from './Stock'

export default {
  components: { Stock },
  data: () => ({
    stocks: [
      { id: 1 , name: 'BMW', price: 110},
      { id: 2 , name: 'Google', price: 200},
      { id: 3 , name: 'Twiiter', price: 280},
      { id: 4 , name: 'Apple', price: 83}
    ]
  })
}
</script>

<style>

</style>
