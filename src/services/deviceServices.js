import http from "./httpServices";

import config from "../config.json";

const getDevices = async (category = "") => {
  console.log(config.hostUrl + `/api/devices?category=${category}`);
  if (!category) return await http.get(config.hostUrl + "/api/devices");

  return await http.get(config.hostUrl + `/api/devices?category=${category}`);
};

const getDeviceById = (id) => http.get(config.hostUrl + `/api/devices/${id}`);

export default {
  get: getDevices,
  getById: getDeviceById,
};
