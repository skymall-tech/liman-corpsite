import styled from '@emotion/styled';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { TeamCardProps } from './types';
import { useEffect, useRef } from 'react';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  &::before,
  &::after {
    content: '';
    width: 80%;
    height: 1px;
    background-color: var(--color-primary);
  }

  &::before {
    margin-bottom: 40px;
  }

  &::after {
    margin-top: 20px;
  }

  .swiper {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    overflow: visible;
  }

  .swiper-wrapper {
    align-items: stretch;
  }

  .swiper-slide {
    width: calc(100vw - 130px);
    opacity: 0.4;
    transition: opacity 0.3s ease;
  }

  .swiper-slide-active {
    opacity: 1;
  }

  .swiper-pagination {
    bottom: -60px !important;
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

const Slide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1.5;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`;

const Image = styled.img<{ objectPosition?: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${(props) => props.objectPosition || 'center'} center;
`;

const Name = styled.h2`
  font-size: var(--font-size-h2);
  color: var(--color-primary);
  margin-top: 20px;
  margin-left: auto;
  font-weight: 900;
  text-align: center;
`;

const Title = styled.h3`
  font-size: var(--font-size-body);
  color: var(--color-primary);
  margin-top: 10px;
  margin-left: auto;
  font-weight: 700;
  text-align: center;
`;

const Description = styled.p`
  font-size: var(--font-size-body);
  color: var(--color-primary);
  margin-top: 20px;
  text-align: center;
  line-height: 1.6;
  text-align: right;
  & + p {
    margin-top: 10px;
  }
`;

export const MobileView = ({ data }: { data: TeamCardProps[] }) => {
  // // Create a sorted copy of the data for mobile view
  // const sortedData = [...data].sort((a, b) => {
  //   // Put Lifenggu first
  //   if (a.id.includes('leo')) return -1;
  //   if (a.id.includes('charly')) return -1;
  //   // Keep original order for others
  //   return 0;
  // });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Small timeout to ensure Swiper is fully initialized on mobile
    const timer = setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideTo(3, 0);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Add intersection observer to detect when swiper becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && swiperRef.current?.swiper) {
            // When swiper becomes visible, slide to position 3,0
            setTimeout(() => {
              swiperRef.current.swiper.slideTo(3, 0);
            }, 50);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (swiperRef.current) {
      observer.observe(swiperRef.current);
    }

    return () => {
      if (swiperRef.current) {
        observer.unobserve(swiperRef.current);
      }
    };
  }, []);
  return (
    <Container>
      <Swiper
        ref={swiperRef}
        onInit={(swiper) => {
          // Additional initialization to ensure slider starts at slide 3
          setTimeout(() => {
            swiper.slideTo(3, 0);
          }, 0);
        }}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        cssMode={true}
        spaceBetween={20}
        slidesPerView={'auto'}
        centeredSlides={true}
        initialSlide={3}
      >
        {data.map((member, index) => (
          <SwiperSlide key={index}>
            <Slide>
              <ImageContainer>
                <Image
                  src={member.image}
                  alt={member.name}
                  objectPosition={member._style?.objectPosition}
                />
              </ImageContainer>
              <Name>{member.name}</Name>
              <Title>{member.title}</Title>
              <Description>{member.description}</Description>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
