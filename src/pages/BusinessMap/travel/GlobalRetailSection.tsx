import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { ShopCard } from '../../../components/ShopCard';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { StoreLargeCard } from '../../../components/StoreLargeCard';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;

const PartnerPortContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const BEIJING_STORE = [
  {
    id: 'TORYBURCH',
    name: 'TORYBURCH',
    images: [
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/1-JZEJoR2krlUwG447lTs6E3dg09Joas.png',
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/1_2-Du9RWKr6gHhD6gwHvmv3jNZ3GK3ebq.png',
    ],
    address: 'The Address',
  },
  {
    id: 'MARNI',
    name: 'MARNI',
    images: [
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/2-3axbeOqd0ZnEdm9gpsOWfQY5cKcecc.png',
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/2_2-dcCP1BuU6oAkhTveGQFu9FJW7qfAZP.png',
    ],
    address: 'The Address',
  },
  {
    id: 'PAUL&SHARK',
    name: 'PAUL&SHARK',
    images: [
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/3-qAyqxPhzEAmGgYpqG0xoTxx2iRMiwf.png',
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/3_2-c2ncysDzOpdiE6plDn7VNbQGWa0AFY.png',
    ],
    address: 'The Address',
  },
  {
    id: 'PARKER',
    name: 'PARKER',
    images: [
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/4-Gye4GEhTws94tVzwLrxMq7YdsayhIf.png',
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/4_2png-OzWez1jmtY8Dkm8e9AOdirWHgfCwEP.png',
    ],
    address: 'The Address',
  },

  {
    id: 'MOSCHINO',
    name: 'MOSCHINO',
    images: [
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/5-W5pC3SaIVL7v8NLprnQ8KDMOuULWZG.png',
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/5_2-RoezdSUt6Ec7sWvAGDpafYreIlLbBA.png',
    ],
    address: 'The Address',
  },
  {
    id: 'ETRO',
    name: 'ETRO',
    images: [
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/6_2-bf0sApzC4Of4dCVVuXW3lypXVMEd4q.png',
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/6-84lTQTVcrrEIRJVNe22tGn11nQMWAj.png',
    ],
    address: 'The Address',
  },
  {
    id: 'TUMI',
    name: 'TUMI',
    images: [
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/7-EaGf1MNsFKyjcKUd10cMAfPN2N7l9E.png',
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/7_2-Km1fQZKbkYLcBQpajx5mWCNl0XYNRf.png',
    ],
    address: 'The Address',
  },
  {
    id: 'EMPORIO ARMANI',
    name: 'EMPORIO ARMANI',
    images: [
      'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Beijing/8-jS5yLMDxj5yi6D9QkDM7pVgpeCYHEj.png',
    ],
    address: 'The Address',
  },
];

export const GlobalRetailSection = () => {
  const { t } = useTranslation();
  const [currentStore, setCurrentStore] = useState(BEIJING_STORE);
  const [showLarge, setShowLarge] = useState(false);

  return (
    <PartnerPortContainer id="partner-port" onClick={() => setShowLarge(false)}>
      <SectionTitle
        title={t('travel.global_retail_lounge.title')}
        subtitle={t('travel.global_retail_lounge.subtitle')}
      />
      {!showLarge ? (
        <Container>
          <ShopCard
            image={
              'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/2_2-HBb4VxcZzRcUjP5TWqFyTLjzcceM68.png'
            }
            title={'BEIJING'}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(BEIJING_STORE);
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image={
              'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/Macau/Screenshot%202025-04-06%20at%2010.44.29%E2%80%AFPM-FZcf5KbIePliyGUObC602iADGcVJTD.png'
            }
            title={'MACAU'}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(BEIJING_STORE);
              setShowLarge(true);
            }}
          ></ShopCard>
          <ShopCard
            image={
              'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Travel_store/shenyang/1_2-uPQoAZLTpMfhSUy0ImSngAYIbJ4VVC.png'
            }
            title={'SHENYANG'}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setCurrentStore(BEIJING_STORE);
              setShowLarge(true);
            }}
          ></ShopCard>
        </Container>
      ) : (
        <Container onClick={(e) => e.stopPropagation()}>
          <StoreLargeCard stores={currentStore} />
        </Container>
      )}
    </PartnerPortContainer>
  );
};
