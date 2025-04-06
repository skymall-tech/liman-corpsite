import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { ImgWithSearch } from '../../../components/ImgWithSearch';
import SearchIcon from '../../../assets/icons/Search.svg';
import { useTranslation } from 'react-i18next';
const TaxFreeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const TaxFreeSection = () => {
  const { t } = useTranslation();
  return (
    <TaxFreeContainer id="tax-free">
      <SectionTitle
        title={t('travel.tax_free.title')}
        subtitle={t('travel.tax_free.subtitle')}
      />
      <ImgWithSearch
        src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/%E5%B0%8F%E7%A8%8B%E5%BA%8F-2OHd09XHFbqnpO0LdaBgUcEXHm3Wux.png"
        desc={t('travel.tax_free.search')}
        icon={SearchIcon}
      ></ImgWithSearch>
    </TaxFreeContainer>
  );
};
