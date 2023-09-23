import React from "react";

function LoadingState() {
  return (
    <div className="overflow-x-auto text-center p-2">
      <span
        data-testid="loading-state"
        className="loading loading-ring loading-lg"
      ></span>
    </div>
  );
}

export default LoadingState;
