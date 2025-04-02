import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { useTranslation } from 'react-i18next';

const ArtContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const ArtSection = () => {
  const { t } = useTranslation();
  return (
    <ArtContainer id="art-section">
      <SectionTitle
        title={t('satellite_paris.art.title')}
        subtitle={t('satellite_paris.art.subtitle')}
      />
    </ArtContainer>
  );
};
