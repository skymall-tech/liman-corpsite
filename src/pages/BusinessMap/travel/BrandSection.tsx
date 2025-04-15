import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { useTranslation } from 'react-i18next';
import { BREAKPOINTS } from '../../../hooks/useResponsive';

const BrandContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 80vw;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2vw;
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    justify-content: flex-start;
  }
`;

const LogoItem = styled.img`
  width: 12vw;
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    width: 25vw;
  }
`;

const LogoList = [
  'https://cdn.liman.group/logos/1.webp',
  'https://cdn.liman.group/logos/2.webp',
  'https://cdn.liman.group/logos/3.webp',
  'https://cdn.liman.group/logos/4.webp',
  'https://cdn.liman.group/logos/5.webp',
  'https://cdn.liman.group/logos/6.webp',
  'https://cdn.liman.group/logos/7.webp',
  'https://cdn.liman.group/logos/8.webp',
  'https://cdn.liman.group/logos/9.webp',
  'https://cdn.liman.group/logos/10.webp',
  'https://cdn.liman.group/logos/11.webp',
  'https://cdn.liman.group/logos/12.webp',
  'https://cdn.liman.group/logos/13.webp',
  'https://cdn.liman.group/logos/14.webp',
  'https://cdn.liman.group/logos/15.webp',
  'https://cdn.liman.group/logos/16.webp',
  'https://cdn.liman.group/logos/17.webp',
  'https://cdn.liman.group/logos/18.webp',
  'https://cdn.liman.group/logos/19.webp',
  'https://cdn.liman.group/logos/20.webp',
];

export const BrandSection = () => {
  const { t } = useTranslation();
  return (
    <BrandContainer id='brand'>
      <SectionTitle
        title={t('travel.partner_brands.title')}
        subtitle={t('travel.partner_brands.subtitle')}
      />
      <LogoContainer>
        {LogoList.map((logo) => (
          <LogoItem src={logo}></LogoItem>
        ))}
      </LogoContainer>
    </BrandContainer>
  );
};
