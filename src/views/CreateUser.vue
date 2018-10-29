<template>
  <div class="create">
    <h1>Create user</h1>
    <user-form v-on:save-user="createUser" v-on:close-form="closeForm"></user-form>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import router from '@/router.js';
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
    UserForm
  },
  methods: {
    createUser: function(data) {
      axiosClient
        .post('/users', data)
        .then(response => this.closeForm())
        .catch(console.error);
    },

    closeForm: function() {
      router.push('list');
    }
  }
};
</script>