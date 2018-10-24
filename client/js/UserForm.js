window.UserForm = {
  name: 'UserForm',
  template: '#UserForm',

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
