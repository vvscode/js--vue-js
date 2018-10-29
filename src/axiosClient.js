import axios from "axios";
import auth from "@/auth";
const API_URL = "https://vue-course-json-server-nirvyctvmd.now.sh";

export default axios.create({
  baseURL: API_URL,
  transformRequest: [
    function(data, headers) {
      const key = auth.getKey();
      if (key) {
        headers.common.Authorization = key;
      }

      return data;
    }
  ]
});
