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
        title="OUR VISIONARY HELM"
        subtitle="Gather experts from around the world"
      />
      <CardContainer>
        <TeamCard
          transformX="23%"
          name={t('team.luke.name')}
          title={t('team.luke.title')}
          description={t('team.luke.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/team/%EF%BC%881%3A7%EF%BC%89-tlVl9ntPE3tQN66W1exxqL52wN2ih1.png"
        />
        <TeamCard
          name={t('team.lizhihua.name')}
          title={t('team.lizhihua.title')}
          description={t('team.lizhihua.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/team/%EF%BC%883%3A7%EF%BC%89-kbobUTiegMFDvvhlzUjUG4CRlpR9Xy.png"
        />
        <TeamCard
          name={t('team.chenli.name')}
          title={t('team.chenli.title')}
          description={t('team.chenli.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/pic1%281%29-vYOwaIeGTLepM4Vo0vIQsbmXAGo4DN.jpg"
        />
        <TeamCard
          name={t('team.lifenggu.name')}
          title={t('team.lifenggu.title')}
          description={t('team.lifenggu.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/pic1%281%29-vYOwaIeGTLepM4Vo0vIQsbmXAGo4DN.jpg"
        />
        <TeamCard
          name={t('team.zhangchi.name')}
          title={t('team.zhangchi.title')}
          description={t('team.zhangchi.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/team/%EF%BC%885%3A7%EF%BC%89-vJfQH58EKeCmAen45ydLcybT1Qr2Tv.png"
        />
        <TeamCard
          name={t('team.liwan.name')}
          title={t('team.liwan.title')}
          description={t('team.liwan.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/team/%EF%BC%886%3A7%EF%BC%89-xE4Ef4nowdQJrxZTqjbZnXGJ9Ncj5y.png"
        />
        <TeamCard
          transformX="-23%"
          name={t('team.lushaojuan.name')}
          title={t('team.lushaojuan.title')}
          description={t('team.lushaojuan.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/pic1%281%29-vYOwaIeGTLepM4Vo0vIQsbmXAGo4DN.jpg"
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
