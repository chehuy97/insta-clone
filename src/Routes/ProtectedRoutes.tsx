import { Redirect, Route, RouteProps } from "react-router";
import { useRouteMatch } from "react-router-dom";

export type ProtectedRouteProps = {
  children: any;
} & RouteProps;

export default function ProtectedRoute({
  children,
  ...routeProps
}: ProtectedRouteProps) {
  const isAuthenticated = localStorage.getItem("@authenticated");
  console.log("Authenticated changed");

  return (
    <Route
      {...routeProps}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}