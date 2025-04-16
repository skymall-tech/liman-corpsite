import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigationHeight } from '../../hooks/useNavigationHeight';
import { getNavBottom } from '../../utils';

const Container = styled.div<{ navHeight: number; navBottom: string }>`
  height: calc(100vh - ${({ navBottom }) => navBottom});
  margin-top: 30px;
  width: 100%;
  padding-top: ${({ navHeight }) => navHeight}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .swiper {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    overflow: visible;
  }

  .swiper-wrapper {
    align-items: stretch;
  }

  .swiper-slide {
    width: calc(100vw - 80px);
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  .swiper-slide-active {
    opacity: 1;
  }

  .swiper-pagination {
    bottom: -30px !important;
    width: 100%;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-text-disabled);
    opacity: 1;
    margin: 0 4px !important;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--color-secondary);
  }
`;

const Card = styled.div`
  width: 78vw;
  height: 69vh;
  border-radius: 16px;
  overflow: hidden;
  padding: 20px 20px;
  border: 1px solid var(--color-primary);
`;

const CardContent = styled.div<{ src: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8b6b35; /* Brown color from the image */
  color: white;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 12px;
  padding: 20px 20px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;

const Title = styled.h2`
  font-size: var(--font-size-h2);
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background-color: white;
  }
  margin-top: 40px;
`;

const ShortDescription = styled.p`
  font-size: var(--font-size-body);
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const Paragraph = styled.p`
  font-size: var(--font-size-body);
  margin-bottom: 20px;
  line-height: 1.6;
`;

export const MVVMobile = () => {
  const navHeight = useNavigationHeight();
  const { t } = useTranslation();
  const navBottom = getNavBottom();
  return (
    <Container id='mvv-section' navHeight={navHeight} navBottom={navBottom}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        cssMode={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        centeredSlides={true}
        initialSlide={0}
      >
        <SwiperSlide>
          <Card>
            <CardContent src='https://cdn.liman.group/culture_back/1.webp'>
              <Title>{t('cooperate_culture.mvv.mission.title')}</Title>
              <ShortDescription>
                {t('cooperate_culture.mvv.mission.short_desc')}
              </ShortDescription>
              <Paragraph>{t('cooperate_culture.mvv.mission.p1')}</Paragraph>
              <Paragraph>{t('cooperate_culture.mvv.mission.p2')}</Paragraph>
              <Paragraph>{t('cooperate_culture.mvv.mission.p3')}</Paragraph>
            </CardContent>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <CardContent src='https://cdn.liman.group/culture_back/2.webp'>
              <Title>{t('cooperate_culture.mvv.value.title')}</Title>
              <ShortDescription>
                {t('cooperate_culture.mvv.value.short_desc')}
              </ShortDescription>
              <Paragraph>{t('cooperate_culture.mvv.value.p1')}</Paragraph>
              <Paragraph>{t('cooperate_culture.mvv.value.p2')}</Paragraph>
              <Paragraph>{t('cooperate_culture.mvv.value.p3')}</Paragraph>
            </CardContent>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <CardContent src='https://cdn.liman.group/culture_back/3.webp'>
              <Title>{t('cooperate_culture.mvv.vision.title')}</Title>
              <ShortDescription>
                {t('cooperate_culture.mvv.vision.short_desc')}
              </ShortDescription>
              <Paragraph>{t('cooperate_culture.mvv.vision.p1')}</Paragraph>
            </CardContent>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default MVVMobile;
