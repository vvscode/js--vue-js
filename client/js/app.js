var API_URL = 'https://vue-course-json-server-pqhuiiuqja.now.sh';
window.app = new Vue({
  el: '#root',

  components: {
    'users-list': UsersList,
    'user-form': UserForm,
  },

  data: function() {
    return {
      user: null,
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
        this.user = { id: +match.pop() };
      }
    },
  },

  computed: {
    showUserForm: function() {
      return this.currentRoute === 'form';
    },
    showUsersList: function() {
      return this.currentRoute === 'list';
    },
  },
});
