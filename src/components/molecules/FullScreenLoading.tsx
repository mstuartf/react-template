import React from "react";
import Spinner from "../atoms/Spinner";

const FullScreenLoading = () => (
  <div className="w-full h-full flex items-center justify-center">
    <Spinner />
  </div>
);

export default FullScreenLoading;
