import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import dva from "dva";

const app = dva({
  initialState: {},
  extraEnhancers: [],
  onError(e) {
    if (process.env.NODE_ENV === "development") {
      throw e;
    }
  },
});

// @ts-ignore
app.model(require("./model").default);
app.router(() => <App />);

app.start("#root");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
