import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { SectionTitle } from '../../../components/Title';
import { ImgWithSearch } from '../../../components/ImgWithSearch';
import RightArrow from '../../../assets/icons/Right.svg';
import { useNavigationHeight } from '../../../hooks/useNavigationHeight';
import { BREAKPOINTS } from '../../../hooks/useResponsive';

const JewelryContainer = styled.div<{ navHeight: number }>`
  width: 100vw;
  min-height: 100vh;
  min-height: 100dvh;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    height: 100vh;
    height: 100dvh;
    padding-top: ${({ navHeight }) => navHeight}px;
  }
`;

export const JewelrySection = () => {
  const navHeight = useNavigationHeight();
  const { t } = useTranslation();
  return (
    <JewelryContainer id='jewelry' navHeight={navHeight}>
      <SectionTitle
        title={t('satellite_paris.jewelry.title')}
        subtitle={t('satellite_paris.jewelry.subtitle')}
      />
      <ImgWithSearch
        src='https://cdn.liman.group/taobao/taobao.webp'
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
