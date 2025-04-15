import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { ImgWithSearch } from '../../../components/ImgWithSearch';
import RightArrow from '../../../assets/icons/Right.svg';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '../../../hooks/useResponsive';
const JewelryContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  // min-height: 100dvh;
`;

export const JewelrySection = () => {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();
  return (
    <JewelryContainer id='jewelry'>
      <SectionTitle
        title={t('satellite_paris.jewelry.title')}
        subtitle={t('satellite_paris.jewelry.subtitle')}
      />
      <ImgWithSearch
        src={
          isMobile
            ? 'https://cdn.liman.group/taobao/taobao_mobile.webp'
            : 'https://cdn.liman.group/taobao/taobao.webp'
        }
        desc={t('satellite_paris.jewelry.search')}
        icon={RightArrow}
        onClick={() => {
          window.open(
            'https://shop209745502.taobao.com/shop/view_shop.htm?appUid=RAzN8HWYRETtHuWL5Gh6VPjz5sNuzrvCVr3G9AwYg9bsxRjLS75&spm=a21n57.1.hoverItem.3',
            '_blank'
          );
        }}
      ></ImgWithSearch>
    </JewelryContainer>
  );
};
