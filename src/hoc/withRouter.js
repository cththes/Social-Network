import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const withRouter = (Component) => {
  function ComponentWithRouter(props) {
    return <Component {...props} params={useParams()} navigate={useNavigate()} />;
  }
  return ComponentWithRouter;
};
