import React from "react";
import "./loading.css";
const Loading = ({ isLoading }) => {
  return (
    <React.Fragment>
      {isLoading ? (
        <div className="loadingBox">
          <div className="loader"></div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Loading;
