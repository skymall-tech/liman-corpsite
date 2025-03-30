import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { ImgWithSearch } from '../../../components/ImgWithSearch';
import SearchIcon from '../../../assets/icons/Search.svg';
const TaxFreeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const TaxFreeSection = () => {
  return (
    <TaxFreeContainer id="tax-free">
      <SectionTitle
        title="OUR E-TAX FREE HARBOR"
        subtitle={'Unlock global tax-exclusive treasures in the cloud'}
      />
      <ImgWithSearch
        src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/last-sitelite-O3ZyuDcTzJrKipcUTQlnJzkxKTOuew.png"
        desc="Search in Wechat Mini Program"
        icon={SearchIcon}
      ></ImgWithSearch>
    </TaxFreeContainer>
  );
};
