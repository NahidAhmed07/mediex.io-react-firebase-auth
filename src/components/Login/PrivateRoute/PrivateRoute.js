import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  // this is a loading spinner for get data form server
  if (isLoading) {
    return (
      <div className="my-5">
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
