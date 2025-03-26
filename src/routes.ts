import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';

import { ContactUsPage } from './pages/ContactUs';
import { CooperateCulturePage } from './pages/CooperateCulture';
import { LearnAboutUsPage } from './pages/LearnAboutUs';
import { PAGE_PATH } from './consts/pagePath';
import { TravelPage } from './pages/BusinessMap/travel';
import { SatellitePage } from './pages/BusinessMap/satellite';
import { EstatePage } from './pages/BusinessMap/estate';

export const router = createBrowserRouter([
  {
    Component: Home,
    children: [
      {
        path: '/',
        Component: LearnAboutUsPage,
      },
      {
        path: `/${PAGE_PATH.businessMap}`,
        Component: TravelPage,
      },
      {
        path: `/${PAGE_PATH.estate}`,
        Component: EstatePage,
      },
      {
        path: `/${PAGE_PATH.satellite}`,
        Component: SatellitePage,
      },
      {
        path: `/${PAGE_PATH.cooperateCulture}`,
        Component: CooperateCulturePage,
      },
      {
        path: `/${PAGE_PATH.contactUs}`,
        Component: ContactUsPage,
      },
    ],
  },
]);
