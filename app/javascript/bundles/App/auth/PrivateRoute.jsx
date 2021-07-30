import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "./useAuth"

export default function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isSignedIn ? (
          children
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
