import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { ImgWithSearch } from '../../../components/ImgWithSearch';
import RightArrow from '../../../assets/icons/Right.svg';
const JewelryContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const JewelrySection = () => {
  return (
    <JewelryContainer id="jewelry">
      <SectionTitle
        title="OUR JEWELRY CONSTELLATION"
        subtitle={
          "Navigate the cloud to unlock humanity's living chronicles across civilizations."
        }
      />
      <ImgWithSearch
        src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/last-sitelite-O3ZyuDcTzJrKipcUTQlnJzkxKTOuew.png"
        desc="Click to go to the official Taobao store"
        icon={RightArrow}
      ></ImgWithSearch>
    </JewelryContainer>
  );
};
