import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import { MainPage } from './pages/Main';
import { ContactUsPage } from './pages/ContactUs';
import { CooperateCulturePage } from './pages/CooperateCulture';
import { LearnAboutUsPage } from './pages/LearnAboutUs';
import { PAGE_PATH } from './consts/pagePath';

export const router = createBrowserRouter([
  {
    Component: Home,
    children: [
      {
        path: '/',
        Component: MainPage,
      },
      {
        path: `/${PAGE_PATH.learnAboutUs}`,
        Component: LearnAboutUsPage,
      },
      {
        path: `/${PAGE_PATH.businessMap}`,
        Component: MainPage,
      },
      {
        path: `/${PAGE_PATH.contactUs}`,
        Component: ContactUsPage,
      },
      {
        path: `/${PAGE_PATH.cooperateCulture}`,
        Component: CooperateCulturePage,
      },
    ],
  },
]);
