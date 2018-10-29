const KEY = "AUTH_KEY";

const getUid = Array.from({ length: 30 })
  .map(_ => String.fromCharCode(Math.floor(Math.random() * 26) + 26))
  .join("");

export default {
  login() {
    localStorage.setItem(KEY, getUid());
  },
  logout() {
    localStorage.removeItem(KEY);
  },
  isLoggedIn() {
    return !!localStorage.getItem(KEY);
  }
};
