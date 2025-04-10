import { TFunction } from 'i18next';

export const getBeijingStore = (t: TFunction) => {
  return [
    {
      id: 'BEIJING',
      name: t('satellite_paris.art.store_list.Beijing.1.name'),
      address: [t('satellite_paris.art.store_list.Beijing.1.address')],
      images: [
        'https://cdn.liman.group/stores/SATELLITE/beijing1.webp',
        'https://cdn.liman.group/stores/SATELLITE/beijing1-2.png',
      ],
    },
    {
      id: 'BEIJING2',
      name: t('satellite_paris.art.store_list.Beijing.2.name'),
      address: [t('satellite_paris.art.store_list.Beijing.2.address')],
      images: [
        'https://cdn.liman.group/stores/SATELLITE/beijing2.webp',
        'https://cdn.liman.group/stores/SATELLITE/beijing2-2.webp',
      ],
    },
  ];
};

export const getMacauStore = (t: TFunction) => {
  return [
    {
      id: 'Saint',
      name: t('satellite_paris.art.store_list.macau.1.name'),
      address: [t('satellite_paris.art.store_list.macau.1.address')],
      images: [
        'https://cdn.liman.group/stores/SATELLITE/weini1.webp',
        'https://cdn.liman.group/stores/SATELLITE/weini2.webp',
      ],
    },
    {
      id: 'Venetian',
      name: t('satellite_paris.art.store_list.macau.2.name'),
      address: [t('satellite_paris.art.store_list.macau.2.address')],
      images: [
        'https://cdn.liman.group/stores/SATELLITE/sanba1.webp',
        'https://cdn.liman.group/stores/SATELLITE/sanba2.webp',
      ],
    },
  ];
};

export const getGuangzhouStore = (t: TFunction) => {
  return [
    {
      id: 'Guangzhou',
      name: t('satellite_paris.art.store_list.guangzhou.1.name'),
      address: [t('satellite_paris.art.store_list.guangzhou.1.address')],
      images: [
        'https://cdn.liman.group/stores/SATELLITE/gaungzhou1.webp',
        'https://cdn.liman.group/stores/SATELLITE/guangzhou2.webp',
      ],
    },
  ];
};

export const getShenyangStore = (t: TFunction) => {
  return [
    {
      id: 'SHENYANG',
      name: t('satellite_paris.art.store_list.shenyang.1.name'),
      address: [t('satellite_paris.art.store_list.shenyang.1.address')],
      images: [
        'https://cdn.liman.group/stores/SATELLITE/shenyang1.webp',
        'https://cdn.liman.group/stores/SATELLITE/shenyang2.webp',
      ],
    },
    {
      id: 'SHENYANG2',
      name: t('satellite_paris.art.store_list.shenyang.2.name'),
      address: [t('satellite_paris.art.store_list.shenyang.2.address')],
      images: [
        'https://cdn.liman.group/stores/SATELLITE/shenyang_taoxian1.webp',
        'https://cdn.liman.group/stores/SATELLITE/shenyang_taoxian2.webp',
      ],
    },
  ];
};

export const getShenzhenStore = (t: TFunction) => [
  {
    id: 'SHENZHEN',
    name: t('satellite_paris.art.store_list.shenzhen.1.name'),
    address: [t('satellite_paris.art.store_list.shenzhen.1.address')],
    images: [
      'https://cdn.liman.group/stores/SATELLITE/shenzhen1.webp',
      'https://cdn.liman.group/stores/SATELLITE/shenzhen2.webp',
    ],
  },
];
