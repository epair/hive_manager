import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn)

  return (
    <Route
      {...rest}
      render={({ location, ...props }) =>
        isLoggedIn ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/sign_in",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
