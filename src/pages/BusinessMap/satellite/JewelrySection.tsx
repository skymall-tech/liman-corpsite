import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { ImgWithSearch } from '../../../components/ImgWithSearch';
import RightArrow from '../../../assets/icons/Right.svg';
import { useTranslation } from 'react-i18next';
const JewelryContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const JewelrySection = () => {
  const { t } = useTranslation();
  return (
    <JewelryContainer id="jewelry">
      <SectionTitle
        title={t('satellite_paris.jewelry.title')}
        subtitle={t('satellite_paris.jewelry.subtitle')}
      />
      <ImgWithSearch
        src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/last-sitelite-O3ZyuDcTzJrKipcUTQlnJzkxKTOuew.png"
        desc={t('satellite_paris.jewelry.search')}
        icon={RightArrow}
      ></ImgWithSearch>
    </JewelryContainer>
  );
};
