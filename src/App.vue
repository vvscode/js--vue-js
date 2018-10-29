<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/list">Users List</router-link>
      <router-link to="/create">Create User</router-link>
      <button v-on:click="toggleLoggedIn">{{toggleButtonText}}</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import auth from '@/auth';

export default {
  data: function() {
    return {
      isLoggedIn: auth.isLoggedIn()
    }
  },
  computed: {
    toggleButtonText() {
      return this.isLoggedIn ? 'Log out' : 'Log in';
    }
  },
  methods: {
    toggleLoggedIn() {
      if (this.isLoggedIn) {
        auth.logout();
        this.isLoggedIn = false;
      } else {
        auth.login();
        this.isLoggedIn = true;
      }
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
