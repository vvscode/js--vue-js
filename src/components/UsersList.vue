<template>
 <div>
      <table v-if="users.length" class="ui celled table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Access Level</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
            <td>{{user.id}}</td>
            <td><img v-bind:src="userImg(user)" class="user-list-item__img" /></td>
            <td>{{user.firstName}}</td>
            <td>{{user.lastName}}</td>
            <td>{{user.accessLevel}}</td>
            <td>
              <router-link :to="{ name: 'editUser', params: { id: user.id }}" class="ui button">  <i class="icon edit"></i>Edit</router-link>
              <button type="button" class="ui button" v-on:click="removeUser(user)">
                <i class="icon remove"></i>
                Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        Empty or loading list...
      </div>
    </div>
</template>

<script>
const defaultAvatarUrl =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

export default {
  name: 'UsersList',
   props: {
    users: {
      type: Array,
      required: true,
    },
  },
   methods: {
    userLink(user) {
      return '#users/' + user.id;
    },
    userImg(user) {
      return user.picture || defaultAvatarUrl;
    },
    removeUser(user) {
      alert('Remove');
    }
  },
};
</script>