import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { TeamCard } from '../../components/TeamCard';
import { useTranslation } from 'react-i18next';

const TeamContainer = styled.div`
  height: 100vh;
  overflow-y: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 90px;
  height: 400px;
  width: 100%;
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
          name={t('team.luke.name')}
          title={t('team.luke.title')}
          description={t('team.luke.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/%E6%9D%A8%E5%85%89-3uAsMycA7xWc3T3d4Ix7OUgtx2EOtY.PNG"
        />
        <TeamCard
          name={t('team.lizhihua.name')}
          title={t('team.lizhihua.title')}
          description={t('team.lizhihua.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/%E6%9D%8E%E6%B2%BB%E5%8D%8E-N8xb6Qbq7ScmMNplp0jVqRmk9ZU02i.jpg"
        />
        <TeamCard
          name={t('team.chenli.name')}
          title={t('team.chenli.title')}
          description={t('team.chenli.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/%E9%99%88%E7%AB%8B-Hu2FIfEauTWsg6bcg6i4OcK5VZ4ktn.PNG"
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
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/%E5%BC%A0%E9%A9%B0-1791CjzJh6lV8olONo8zPzzTMYN4fp.jpg"
        />
        <TeamCard
          name={t('team.liwan.name')}
          title={t('team.liwan.title')}
          description={t('team.liwan.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/%E6%9D%8E%E5%BC%AF-56gpGXCleMJELlZYatShAE5hoBqIaJ.jpg"
        />
        <TeamCard
          name={t('team.lushaojuan.name')}
          title={t('team.lushaojuan.title')}
          description={t('team.lushaojuan.description')}
          image="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/%E5%8D%A2%E5%B0%91%E5%A8%9F-UYJ2lvr1uhFAjVWSaLIMg6yZ4cfQl3.jpg"
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
