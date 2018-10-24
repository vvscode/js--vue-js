window.UserForm = {
  name: 'UserForm',
  template: '#UserForm',

  props: {
    user: {
      type: Object,
    },
  },

  computed: {
    userData: function() {
      if (!this.user) {
        return {};
      }
      return JSON.parse(JSON.stringify(this.user));
    },
  },

  methods: {
    goToList: function() {
      window.location.hash = '#';
    },
    onSubmit: function() {
      axios
        .put(`${API_URL}/users/${this.user.id}`, this.userData)
        .then(response => {
          this.$emit('user-updated', response.data);
          this.goToList();
        })
        .catch(console.error);
    },
    onReset: function() {
      this.goToList();
    },
  },
};
