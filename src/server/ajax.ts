import axios from "axios";

const ajax = axios.create({
  timeout: 10000,
});

export { ajax };
