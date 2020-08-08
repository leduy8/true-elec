import http from "./httpServices";

import config from "../config.json";

const postOrder = (data) =>
  http.post(config.hostUrl + "/api/orders/anonymous", data, {
    headers: { "Content-Type": "application/json" },
  });

export default {
  post: postOrder,
};
