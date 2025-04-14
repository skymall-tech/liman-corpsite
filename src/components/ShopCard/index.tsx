import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 520px;
  background-color: #f5f5f5;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 10px;
  border: 2px solid #b59152;
  flex-shrink: 0;
  transition: transform 0.3s;
  .overlay-normal {
    opacity: 1;
  }
  .overlay-mask-active {
    opacity: 0;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    .overlay-normal {
      opacity: 0;
    }
    .overlay-mask-active {
      opacity: 1;
    }
    .card-title-text {
      color: #fff;
    }
    .line {
      background-color: #fff;
    }
    .card-title-2 {
      display: block;
    }
  }
`;

const OverlayNormal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #c8ab77;
  mix-blend-mode: screen;
`;

const OverlayMaskActive = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #958363;
  mix-blend-mode: multiply;
`;

const CardImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 100%;
  transition: filter 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const CardSubTitle = styled.div`
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
  font-size: var(--font-size-body);
  display: none;
`;

const OverlayTextContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #946a20;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 26px;
`;

const Line = styled.div`
  width: 20px;
  height: 1px;
  background-color: #7a520b;
`;
const Title = styled.p`
  font-size: var(--font-size-title);
  font-weight: bold;
  color: #7a520b;
  margin: 0 20px;
`;

export const ShopCard = ({
  image,
  title,
  notOpen,
  onClick,
}: {
  image: string;
  title: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  notOpen?: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <CardContainer onClick={onClick}>
      <CardImage image={image} className='card-image' />
      <OverlayNormal className='overlay-normal'></OverlayNormal>
      <OverlayMaskActive className='overlay-mask-active'></OverlayMaskActive>
      <OverlayTextContainer>
        <CardTitle className='card-title'>
          <TitleContainer>
            <Line className='line'></Line>
            <Title className='card-title-text'>{title}</Title>
            <Line className='line'></Line>
          </TitleContainer>
          {notOpen && (
            <CardSubTitle className='card-title-2'>
              {t('common.opening_soon')}
            </CardSubTitle>
          )}
        </CardTitle>
      </OverlayTextContainer>
    </CardContainer>
  );
};
