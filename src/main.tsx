import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './routes.ts';
import i18n from './i18n';
const browserLang = navigator.language.toLowerCase();
const language = browserLang.startsWith('zh') ? 'zh' : 'en';
i18n.init({
  lng: language,
  fallbackLng: 'en',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
