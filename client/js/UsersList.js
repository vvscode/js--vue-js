window.UsersList = {
  name: 'UsersList',
  template: '#UsersList',

  props: {
    users: {
      type: Array,
      required: true,
    },
  },

  methods: {
    userLink(user) {
      return '#user=' + user.id;
    },
  },
};
