import styled from '@emotion/styled';
import { useNavigationHeight } from '../../hooks/useNavigationHeight';
import { CultureCard } from '../../components/CultureCard';
import { useTranslation } from 'react-i18next';
import { BREAKPOINTS } from '../../hooks/useResponsive';

const MVVContainer = styled.div<{ navHeight: number }>`
  width: 100vw;
  height: ${({ navHeight }) => `calc(100vh - ${navHeight}px)`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 66px;
  gap: 3vw;

  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    height: 100vh;
    padding-top: ${({ navHeight }) => navHeight}px;
  }
`;

export const MVVSection = () => {
  const navHeight = useNavigationHeight();
  const { t } = useTranslation();

  return (
    <MVVContainer id='mvv-section' navHeight={navHeight}>
      <CultureCard
        src='https://cdn.liman.group/culture_back/1.webp'
        title={t('cooperate_culture.mvv.mission.title')}
        shortDescription={t('cooperate_culture.mvv.mission.short_desc')}
      >
        <p>{t('cooperate_culture.mvv.mission.p1')}</p>
        <p>{t('cooperate_culture.mvv.mission.p2')}</p>
        <p>{t('cooperate_culture.mvv.mission.p3')}</p>
      </CultureCard>
      <CultureCard
        src='https://cdn.liman.group/culture_back/2.webp'
        title={t('cooperate_culture.mvv.value.title')}
        shortDescription={t('cooperate_culture.mvv.value.short_desc')}
      >
        <p>{t('cooperate_culture.mvv.value.p1')}</p>
        <h3>{t('cooperate_culture.mvv.value.h1')}</h3>
        <p>{t('cooperate_culture.mvv.value.p2')}</p>
        <h3>{t('cooperate_culture.mvv.value.h2')}</h3>
        <p>{t('cooperate_culture.mvv.value.p3')}</p>
      </CultureCard>
      <CultureCard
        src='https://cdn.liman.group/culture_back/3.webp'
        title={t('cooperate_culture.mvv.vision.title')}
        shortDescription={t('cooperate_culture.mvv.vision.short_desc')}
      >
        <p>{t('cooperate_culture.mvv.vision.p1')}</p>
      </CultureCard>
    </MVVContainer>
  );
};
