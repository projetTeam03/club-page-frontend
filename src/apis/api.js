// import axios from "axios";

import axios from "axios";

// // create BASE API
// const api = axios.create({
//   // baseURL: `${process.env.REACT_APP_API}`,
//   baseURL: `OuiukkBi8cWYcCe4TSQVzn1OvFgNKRUcAeNYdLY7CinJXgAAAYmdAslA`,
// });

// // API TOKEN Intercepters
// api.interceptors.request.use((config) => {
//   console.log(config);
//   const access_token = localStorage.getItem("accesstoken");

//   if (access_token) {
//     config.headers.Authorization = `Bearer ${access_token}`;
//   }
//   console.log(config);
//   return config;
// });

// export default api;

const api = axios.create({
  baseURL: "27.96.130.189:8080",
  // baseURL: base.server_http,
  headers: {
    "content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
    withCredentials: true,
  },
});

api.interceptors.request.use(function (config) {
  const auth = localStorage.getItem("accesstoken");
  config.headers.common["Authorization"] = auth;

  // const accessToken = document.cookie.split("=")[1];
  // const refreshToken = document.cookie.split("=")[1];
  // config.headers.common["Authentication"] = `${accessToken}`;
  // config.headers.common["RefreshToken"] = `${refreshToken}`;
  return config;
});

export default api;
