import Footer from 'components/footer';
import { isLoggedInSelector, logout } from 'modules/login/redux/auth-slice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AuthService from 'services/auth-service/auth-service';
import Dashboard from '../dashboard';
import LoginPage from '../login/components/login-page';
import PrivateRoute from './components/private-route';

export const NoMatch = () => {
  return (
    <>
      <div>404</div>
    </>
  );
};

const LogoutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const authService = new AuthService();
    authService.logout();
    dispatch(logout());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Redirect to='login' />;
};

export function AppRouter() {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <>
      <Router>
        <Switch>
          <Route path='/login'>
            <>
              {isLoggedIn && <Redirect to='/home' />}
              <LoginPage />
            </>
          </Route>
          <PrivateRoute path='/home'>
            <Dashboard />
          </PrivateRoute>
          <Route path='/logout'>
            <LogoutPage />
          </Route>
          <Route>
            <Redirect to='/login' />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
