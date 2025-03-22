import { createBrowserRouter } from 'react-router';
import Home from './pages/home';
import { MainPage } from './pages/main';
import { SatellitePage } from './pages/satellite';
import { PropertyPage } from './pages/property';

export const router = createBrowserRouter([
  {
    Component: Home,
    children: [
      {
        path: '/',
        Component: MainPage,
      },
      {
        path: '/property',
        Component: PropertyPage,
      },
      {
        path: '/satellite',
        Component: SatellitePage,
      },
    ],
  },
]);
