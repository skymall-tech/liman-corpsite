import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { ImgWithSearch } from '../../../components/ImgWithSearch';
import SearchIcon from '../../../assets/icons/Search.svg';
import { useTranslation } from 'react-i18next';
const TaxFreeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  // min-height: 100dvh;
`;

export const TaxFreeSection = () => {
  const { t } = useTranslation();
  return (
    <TaxFreeContainer id='tax-free'>
      <SectionTitle
        title={t('travel.tax_free.title')}
        subtitle={t('travel.tax_free.subtitle')}
      />
      <ImgWithSearch
        src='https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/mini-program-s2hPQeMEXlIPJWI8T2LR4dGFhmRYRq.webp'
        desc={t('travel.tax_free.search')}
        icon={SearchIcon}
      ></ImgWithSearch>
    </TaxFreeContainer>
  );
};
