<template>
  <div class="list">
    <h1>User List</h1>
    <UsersList v-bind:users="users"></UsersList>
  </div>
</template>

<script>
import UsersList from "@/components/UsersList.vue";
import axiosClient from "@/axiosClient.js";

export default {
  name: "list",
  data: function() {
    return {
      users: []
    }
  },
    mounted: function() {
    this.loadUsers();
  },
  components: {
    UsersList
  },
  methods: {
    loadUsers: function() {
      axiosClient
        .get('/users')
        .then(response => (this.users = response.data))
        .catch(console.error);
    },
  }
};
</script>