import http from "./httpServices";

import config from "./../config.json";

const getLaptops = () =>
  http.get(config.hostUrl + "/api/devices?category=laptop");

const getLaptopById = (id) => http.get(config.hostUrl + `/api/devices/${id}`);

export default {
  get: getLaptops,
  getById: getLaptopById,
};
