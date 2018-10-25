var defaultAvatarUrl =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

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
    userImg(user) {
      return user.picture || defaultAvatarUrl;
    },
  },
};
