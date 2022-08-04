import React from "react";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      className="loader__mask"
      style={{
        position: "fixed",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Circles height="100" width="100" color="grey" ariaLabel="loading" />;
    </div>
  );
};

export default Loader;
