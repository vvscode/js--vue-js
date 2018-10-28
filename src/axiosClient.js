import axios from "axios";
const API_URL = "https://vue-course-json-server-nirvyctvmd.now.sh";

export default axios.create({
  baseURL: API_URL
});
