import classnames from 'classnames';
import { NoMatch } from 'modules/router/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CreateUserPage from './components/create-user-page';
import Header from './components/header';
import MobileSidebar from './components/mobile-sidebar';
import Sidebar from './components/sidebar';
import HomeContainer from './containers/home-container';
import './dashboard.scss';

export default function Dashboard() {
  const isSidebarOpen = useSelector(
    (state: any) => state.dashboard.isSidebarOpen
  );

  const classNames = classnames('dashboard', {
    'dashboard--sidebar-open': isSidebarOpen,
  });
  return (
    <div className=''>
      <Header />
      <div className={classNames}>
        <Sidebar />
        <MobileSidebar />
        <div className='dashboard__content'>
          <Switch>
            <Route exact path='/home'>
              <HomeContainer />
            </Route>
            <Route path='/home/create-user/'>
              <CreateUserPage />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
