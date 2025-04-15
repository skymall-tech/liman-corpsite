import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  // min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RewardImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ContentTitle = styled.h3`
  margin-top: 20px;
  font-size: var(--font-size-h3);
  color: var(--color-secondary);
  margin-bottom: 16px;
  border-bottom: 1px solid var(--color-primary);
  padding-bottom: 8px;
`;

const Paragraph = styled.p`
  font-size: var(--font-size-body);
  line-height: 1.6;
  color: var(--color-primary);
  margin-bottom: 16px;
`;

interface RewardsMobileProps {
  id: string;
  title?: string;
  subtitle?: string;
  contentTitle: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
  showTitle?: boolean;
}

export const RewardsMobile = ({
  id,
  title,
  subtitle,
  contentTitle,
  paragraphs,
  imageSrc,
  imageAlt = 'Rewards',
  showTitle = true,
}: RewardsMobileProps) => {
  return (
    <Container id={id}>
      {showTitle && title && subtitle && (
        <SectionTitle title={title} subtitle={subtitle} />
      )}
      <ContentContainer>
        <RewardImage src={imageSrc} alt={imageAlt} />
        <div>
          <ContentTitle>{contentTitle}</ContentTitle>
          {paragraphs.map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}
        </div>
      </ContentContainer>
    </Container>
  );
};

export default RewardsMobile;
