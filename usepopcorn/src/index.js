import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App";
// import "./index.css";

import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRate={5} />
    <StarRating
      maxRate={5}
      message={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
  </React.StrictMode>
);
