import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { useTranslation } from 'react-i18next';
import { useNavigationHeight } from '../../../hooks/useNavigationHeight';
import { BREAKPOINTS } from '../../../hooks/useResponsive';

const BrandContainer = styled.div<{ navHeight: number }>`
  width: 100vw;
  min-height: 100vh;
  min-height: 100dvh;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    height: 100vh;
    height: 100dvh;
    padding-top: ${({ navHeight }) => navHeight}px;
  }
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
`;

const LogoItem = styled.img`
  width: 12vw;
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
  const navHeight = useNavigationHeight();
  return (
    <BrandContainer id='brand' navHeight={navHeight}>
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
