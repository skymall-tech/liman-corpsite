import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './routes.ts';
import i18n from './i18n';
import { LAST_SELECT_LANG } from './utils.ts';

const browserLang = navigator.language.toLowerCase();
const savedLanguage = localStorage.getItem(LAST_SELECT_LANG);
const language =
  savedLanguage ||
  (browserLang.startsWith('zh-mo') ||
  browserLang.startsWith('zh-hk') ||
  browserLang.startsWith('zh-tw')
    ? 'zh-MO'
    : browserLang.startsWith('zh')
    ? 'zh'
    : 'en');

i18n.init({
  lng: language,
  fallbackLng: 'en',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
