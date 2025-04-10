import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { TeamCard } from '../../components/TeamCard';
import { useTranslation } from 'react-i18next';

const TeamContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: visible;
  overflow-x: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  height: 30vw;
  width: 100%;
  overflow: visible;
`;

const DescSection = styled.div`
  width: 702px;
  font-size: 14px;
  text-align: center;
  color: var(--color-primary);
`;

export const TeamSection = () => {
  const { t } = useTranslation();
  return (
    <TeamContainer id="team-section">
      <SectionTitle
        title={t('about_us.team.title')}
        subtitle={t('about_us.team.subtitle')}
        marginTop="40px"
      />
      <CardContainer>
        <TeamCard
          objectPosition="15%"
          transformX="23%"
          name={t('about_us.team.luke.name')}
          title={t('about_us.team.luke.title')}
          description={t('about_us.team.luke.description')}
          image="https://cdn.liman.group/team/1.webp"
        />
        <TeamCard
          objectPosition="17%"
          name={t('about_us.team.lizhihua.name')}
          title={t('about_us.team.lizhihua.title')}
          description={t('about_us.team.lizhihua.description')}
          image="https://cdn.liman.group/team/3.webp"
        />
        <TeamCard
          objectPosition="15%"
          name={t('about_us.team.chenli.name')}
          title={t('about_us.team.chenli.title')}
          description={t('about_us.team.chenli.description')}
          image="https://cdn.liman.group/team/2.webp"
        />
        <TeamCard
          name={t('about_us.team.lifenggu.name')}
          title={t('about_us.team.lifenggu.title')}
          description={t('about_us.team.lifenggu.description')}
          objectPosition="10%"
          image="https://cdn.liman.group/team/4.webp"
        />
        <TeamCard
          objectPosition="17%"
          name={t('about_us.team.zhangchi.name')}
          title={t('about_us.team.zhangchi.title')}
          description={t('about_us.team.zhangchi.description')}
          image="https://cdn.liman.group/team/5.webp"
        />
        <TeamCard
          objectPosition="15%"
          name={t('about_us.team.liwan.name')}
          title={t('about_us.team.liwan.title')}
          description={t('about_us.team.liwan.description')}
          image="https://cdn.liman.group/team/6.webp"
        />
        <TeamCard
          transformX="-23%"
          objectPosition="5%"
          name={t('about_us.team.lushaojuan.name')}
          title={t('about_us.team.lushaojuan.title')}
          description={t('about_us.team.lushaojuan.description')}
          image="https://cdn.liman.group/team/7.webp"
        />
      </CardContainer>
      <DescSection>{t('about_us.team.footer_desc')}</DescSection>
    </TeamContainer>
  );
};
