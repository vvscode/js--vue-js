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
