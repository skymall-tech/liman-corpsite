import styled from '@emotion/styled';
import BusinessCard from '../../components/card';
import { SectionTitle } from '../../components/Title';
import { PAGE_PATH } from '../../consts/pagePath';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { BREAKPOINTS } from '../../hooks/useResponsive';

const BusinessMapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  // height: 100dvh;
  position: relative;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    overflow: hidden;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: visible;
  margin-top: 50px;
  height: 70vh;
  // height: 70dvh;

  // Mobile & Tablet
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    margin-top: 0;
    flex-direction: column;
    gap: 20px;
  }
`;

export const BusinessMapSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <BusinessMapContainer id='business-map-section'>
      <SectionTitle
        title={t('about_us.business_map.title')}
        subtitle={t('about_us.business_map.subtitle')}
      />
      <Container>
        <BusinessCard
          image='https://cdn.liman.group/business_map/travel.webp'
          title={t('common.travel_retail')}
          onClick={() => {
            navigate(PAGE_PATH.businessMap);
            scrollTo(0, 0);
          }}
        />
        <BusinessCard
          image='https://cdn.liman.group/business_map/satellite.webp'
          title={t('common.satellite_paris')}
          onClick={() => {
            navigate(PAGE_PATH.satellite);
            scrollTo(0, 0);
          }}
        />
        <BusinessCard
          image='https://cdn.liman.group/business_map/estate.webp'
          title={t('common.culture_estate')}
          onClick={() => {
            navigate(PAGE_PATH.estate);
            scrollTo(0, 0);
          }}
        />
      </Container>
    </BusinessMapContainer>
  );
};
