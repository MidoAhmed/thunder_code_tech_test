import React from "react";
import { useLocation } from "react-router-dom";
const NotFound = () => {
  let location = useLocation();
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>
        The page <code>{location.pathname}</code> you are looking for does not
        exist.
      </p>
    </div>
  );
};

export default NotFound;
