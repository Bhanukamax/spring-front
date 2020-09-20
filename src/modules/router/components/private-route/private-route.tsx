import { isLoggedInSelector } from 'modules/login/redux/auth-slice';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  children: any;
}

export default function PrivateRoute({ children, ...rest }: Props) {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
