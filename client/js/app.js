var API_URL = 'https://vue-course-json-server-nirvyctvmd.now.sh';
window.app = new Vue({
  el: '#root',

  components: {
    'users-list': UsersList,
    'user-form': UserForm,
  },

  data: function() {
    return {
      userId: null,
      currentRoute: '',
      users: [],
    };
  },

  mounted: function() {
    window.addEventListener(
      'hashchange',
      this.recalculateCurrentRoute.bind(this),
    );
    this.recalculateCurrentRoute();
    this.loadUsers();
  },

  methods: {
    loadUsers: function() {
      axios
        .get(API_URL + '/users')
        .then(response => (this.users = response.data));
    },
    recalculateCurrentRoute: function() {
      var match = window.location.hash.match(/user=(\d+)/);
      if (!match) {
        this.currentRoute = 'list';
      } else {
        this.currentRoute = 'form';
        this.userId = +match.pop();
      }
    },
    updateUser: function(userData) {
      const userIndex = this.users.findIndex(el => el.id === userData.id);
      const user = this.users[userIndex];

      axios
        .put(`${API_URL}/users/${this.user.id}`, userData)
        .then(response => {
          this.$set(
            this.users,
            userIndex,
            Object.assign({}, user, response.data),
          );
          this.closeForm();
        })
        .catch(console.error);
    },

    closeForm: function() {
      window.location.href = '#';
    },
  },

  computed: {
    user: function() {
      return this.users.find(el => el.id === this.userId);
    },
    showUserForm: function() {
      return this.currentRoute === 'form';
    },
    showUsersList: function() {
      return this.currentRoute === 'list';
    },
  },
});
