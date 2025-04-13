import styled from '@emotion/styled';
import { TeamCard } from '../../../components/TeamCard';
import { useTranslation } from 'react-i18next';
import { TeamCardProps } from './types';

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

export const DesktopView = ({ data }: { data: TeamCardProps[] }) => {
  const { t } = useTranslation();

  return (
    <>
      <CardContainer>
        {data.map((item) => (
          <TeamCard
            key={item.name}
            name={item.name}
            title={item.title}
            description={item.description}
            image={item.image}
            {...item._style}
          />
        ))}
      </CardContainer>
      <DescSection>{t('about_us.team.footer_desc')}</DescSection>
    </>
  );
};
