// Lesson Starts at 01:05

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h3>{{ heading }}</h3>
    <div class="button-container">
      <button @click="hideWallets">Hide Wallets</button>
      <button @click="showWallets">Show Wallets</button>
    </div>
    <div class='container'>
      <div class="card" :key="wallet.id" v-for="wallet in wallets">
        <div class="card-header">
          <h3>{{ wallet.address }}</h3>
          <p>{{ wallet.balance }} BTC</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wallets from './wallets.json'
export default {
  name: 'App',
  components: {},
  data: () => ({
    wallets: null,
    heading: 'Money Bags Transactions'
  }),
  methods: {
    showWallets(){
      console.log("This is firing")
      this.wallets = wallets
    },
    hideWallets(){
      this.wallets = null
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
button {
  padding: 0.6em 1em;
  margin: 0 1em;
  border: none;
  background-color: #41b883;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
}

.card {
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin: 1em;
  min-width: 400px;
  background: #2c3e50;
  color: #fff;
}
</style>