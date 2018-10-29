<template>
    <div class="ui container">
      <h2 class="ui center aligned header">User Form #{{ userData.id }} </h2>
      <a href="#">Back to List</a>
      <form v-on:submit.prevent="saveUser" class="ui form">
        <div class="fieldt"><label>First Name: <input v-model.trim="userData.firstName" /></label></div>
        <div class="field"><label>Last Name: <input v-model.trim="userData.lastName" /></label></div>
        <div class="field"><label>Company: <input v-model.trim="userData.company" /></label></div>
        <div class="field"><label>Email: <input v-model.trim="userData.email" type="email" /></label></div>
        <div class="field"><label>Picture: <input v-model.trim="userData.picture" /></label></div>
        <div class="field">
          <button type="button" v-on:click="closeForm" class="ui basic button">Reset</button>
          <button type="submit" class="ui basic button primary">Save</button>
        </div>
    </form>
    </div>
</template>

<script>
export default {
  name: 'UserForm',
   props: {
    user: {
      type: Object,
      default: Object,
    },
  },
   computed: {
    userData: function() {
      return Object.assign({}, this.user);
    },
  },
   methods: {
    saveUser: function() {
      this.$emit('save-user', this.userData);
    },
    closeForm: function() {
      this.$emit('close-form');
    },
  },
};
</script>