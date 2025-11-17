import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { SectionTitle } from '../../../components/Title';
import { BREAKPOINTS, useResponsive } from '../../../hooks/useResponsive';
import { MobileView } from './MobileView';
import { DesktopView } from './DesktopView';

const TeamContainer = styled.div`
  height: 100vh;
  // height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: visible;
  overflow-x: hidden;

  // Mobile
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    width: 100%;
    min-height: 100vh;
    // min-height: 100dvh;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: visible;
    padding-bottom: 40px;
  }
`;

export const TeamSection = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useResponsive();

  const teamData = [
    {
      id: 'tim',
      name: t('about_us.team.lizhihua.name'),
      title: t('about_us.team.lizhihua.title'),
      description: t('about_us.team.lizhihua.description'),
      image: 'https://cdn.liman.group/team/3.webp',
      _style: {
        objectPosition: '17%',
      },
    },
    {
      id: 'charly',
      name: t('about_us.team.chenli.name'),
      title: t('about_us.team.chenli.title'),
      description: t('about_us.team.chenli.description'),
      image: 'https://cdn.liman.group/team/2.webp',
      _style: {
        objectPosition: '15%',
      },
    },
    {
      id: 'leo',
      name: t('about_us.team.lifenggu.name'),
      title: t('about_us.team.lifenggu.title'),
      description: t('about_us.team.lifenggu.description'),
      image: 'https://cdn.liman.group/team/4.webp',
      _style: {
        objectPosition: '10%',
      },
    },
    {
      id: 'esa',
      name: t('about_us.team.zhangchi.name'),
      title: t('about_us.team.zhangchi.title'),
      description: t('about_us.team.zhangchi.description'),
      image: 'https://cdn.liman.group/team/5.webp',
      _style: {
        objectPosition: '17%',
      },
    },
    {
      id: 'grace',
      name: t('about_us.team.liwan.name'),
      title: t('about_us.team.liwan.title'),
      description: t('about_us.team.liwan.description'),
      image: 'https://cdn.liman.group/team/6.webp',
      _style: {
        objectPosition: '15%',
      },
    },
  ];

  return (
    <TeamContainer id='team-section'>
      <SectionTitle
        title={t('about_us.team.title')}
        subtitle={t('about_us.team.subtitle')}
        marginTop='40px'
      />
      {isMobile || isTablet ? (
        <MobileView data={teamData} />
      ) : (
        <DesktopView data={teamData} />
      )}
    </TeamContainer>
  );
};
