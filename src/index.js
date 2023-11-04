import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import GlobalSytle from "./global/GlobalStyle";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalSytle />
    <App />
  </Provider>
);

reportWebVitals();
