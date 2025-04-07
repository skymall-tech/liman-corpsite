import React from 'react';
import NavigationTabs from '../../components/NavigationTabs';
import { Outlet } from 'react-router';
import BackTop from '../../components/BackTop';

const HomePage: React.FC = () => {
  return (
    <div>
      <NavigationTabs />
      <Outlet />
      <BackTop />
    </div>
  );
};

export default HomePage;
