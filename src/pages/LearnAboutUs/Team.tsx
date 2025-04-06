import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { TeamCard } from '../../components/TeamCard';
import { useTranslation } from 'react-i18next';

const TeamContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: visible;
  overflow-x: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 90px;
  height: 400px;
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
      />
      <CardContainer>
        <TeamCard
          transformX="23%"
          name={t('about_us.team.luke.name')}
          title={t('about_us.team.luke.title')}
          description={t('about_us.team.luke.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/team/%EF%BC%881%3A7%EF%BC%89-sltaDIUq42rgawbh5hkYxltMh7nqBu.png"
        />
        <TeamCard
          name={t('about_us.team.lizhihua.name')}
          title={t('about_us.team.lizhihua.title')}
          description={t('about_us.team.lizhihua.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/team/%EF%BC%883%3A7%EF%BC%89-Li4TUjjI7FjRBu7h0S8wINBruu6eW3.png"
        />
        <TeamCard
          name={t('about_us.team.chenli.name')}
          title={t('about_us.team.chenli.title')}
          description={t('about_us.team.chenli.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/team/%EF%BC%882%3A7%EF%BC%89-GzO8b32urqZusdgfr5ej7Qd7JdM1DY.png"
        />
        <TeamCard
          name={t('about_us.team.lifenggu.name')}
          title={t('about_us.team.lifenggu.title')}
          description={t('about_us.team.lifenggu.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/team/%EF%BC%884%3A7%EF%BC%89-rFJ5n6CkkzUR15OYyBde1JuGwF7Ncj.png"
        />
        <TeamCard
          name={t('about_us.team.zhangchi.name')}
          title={t('about_us.team.zhangchi.title')}
          description={t('about_us.team.zhangchi.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/team/%EF%BC%885%3A7%EF%BC%89-cXpF5gl0OulO3DSh6dXx2F6hpRXst5.png"
        />
        <TeamCard
          name={t('about_us.team.liwan.name')}
          title={t('about_us.team.liwan.title')}
          description={t('about_us.team.liwan.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/team/%EF%BC%886%3A7%EF%BC%89-efYVDimiSFrxiY8CcyT1F1LDMlTAnK.png"
        />
        <TeamCard
          transformX="-23%"
          name={t('about_us.team.lushaojuan.name')}
          title={t('about_us.team.lushaojuan.title')}
          description={t('about_us.team.lushaojuan.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/team/%EF%BC%887%3A7%EF%BC%89-dHqGkJXpl5nc4ttcclNMyyim3yDg5E.png"
        />
      </CardContainer>
      <DescSection>
        Architects from luxury retail, duty-free logistics and digital
        innovation coalesce to redefine premium service paradigms. Through
        predictive analytics and experiential engineering, we craft tomorrow's
        retail DNA while delivering today's client success.{' '}
      </DescSection>
    </TeamContainer>
  );
};
