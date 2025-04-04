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
        src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/skymall-XO6fb3cpJORWuM6RIZqILgNrE4DxCx.png"
        desc={t('travel.tax_free.search')}
        icon={SearchIcon}
      ></ImgWithSearch>
    </TaxFreeContainer>
  );
};
