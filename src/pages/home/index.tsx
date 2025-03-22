import React from 'react';
import NavigationTabs from '../../components/NavigationTabs';
import { Outlet } from 'react-router';

const HomePage: React.FC = () => {
  return (
    <div>
      <NavigationTabs />
      <Outlet />
    </div>
  );
};

export default HomePage;
