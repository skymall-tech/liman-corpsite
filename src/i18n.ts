// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locale/en.json';
import zh from './assets/locale/zh.json';
import zhMO from './assets/locale/zh-MO.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    zh: {
      translation: zh,
    },
    'zh-MO': {
      translation: zhMO,
    },
  },
  lng: getInitialLanguage(), // 默认语言
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

function getInitialLanguage() {
  const browserLanguage = navigator.language || navigator.languages[0];
  if (browserLanguage.startsWith('zh')) {
    return 'zh';
  }
  return 'en';
}

export default i18n;
