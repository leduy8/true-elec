import http from "./httpServices";

const getLaptops = () => http.get("http://localhost:3001/api/laptops");

export default {
  get: getLaptops,
};
