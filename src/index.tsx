import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "../src/reduxtoolkit/store";
import { Provider } from "react-redux";
import axios from "axios";
import TokenService from "./component/Tokenservice";

axios.create({
  baseURL: "https://localhost:3007",
  headers: {
    "Content-Type": "application/json",
  },
});
axios.interceptors.request.use((request: any) => {
  console.log("req", request);
  const token = TokenService.getAccessToken();
  request.headers = {
    "x-access-token": token,
    "Content-Type": "application/json",
  };
  return request;
});

axios.interceptors.response.use(
  (res) => {
    console.log("hai", res);
    return res;
  },
  async (err: any) => {
    console.log("error", err);
    const originalConfig = err.config;
    if (err.response.status === 401) {
      console.log("error happended after 1 minutes camed ");
      if (
        err.response.data.message === "Unauthorized! Access Token was expired!"
      ) {
        try {
          console.log("okay", err.response.data.message);
          const refresh = TokenService.getRefreshToken();
          console.log("1 hour refresh", refresh);
          const res = await axios.post("http://localhost:3007/refresh", {
            "x-access-token": refresh,
            "content-type": "application/json",
          });
          console.log("response===>", res?.data?.data?.token);
          TokenService.UpdateAccessToken(res?.data?.data?.token);
          axios.defaults.headers.common["x-access-token"] =
            res?.data?.data?.token;
          return axios(originalConfig);
        } catch (error: any) {
          console.log("ref error", error);
          if (error.response.data.status === "Refresh token expired") {
            localStorage.clear();
            window.location.pathname = "/login";
            return error.response.data;
          }
        }
      }
      return Promise.reject(err);
    }
  }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
