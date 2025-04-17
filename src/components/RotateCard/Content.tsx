import styled from '@emotion/styled';

const Container = styled.div<{ textAlign: string }>`
  display: flex;
  flex-direction: column;
  width: max(25vw, 400px);
  align-items: ${({ textAlign }) => textAlign === 'right' && 'flex-end'};
  aspect-ratio: 1/1.27;
`;

const Divider = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 1px;
  background-color: var(--color-primary);
`;

const Title = styled.h2`
  margin-top: 18px;
  color: var(--color-secondary);
`;
const Paragraph = styled.p<{ textAlign: string }>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: calc(var(--font-size-body) - 1px);
  margin-bottom: 18px;
  color: var(--color-primary);
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`;

export const RotateCardContent = ({
  paragraphs,
  title,
  textAlign = 'left',
}: {
  paragraphs: string[];
  title: string;
  textAlign?: string;
}) => {
  return (
    <Container textAlign={textAlign}>
      <ParagraphContainer>
        {paragraphs.map((item, index) => (
          <Paragraph textAlign={textAlign} key={index}>
            {item}
          </Paragraph>
        ))}
      </ParagraphContainer>
      <Divider></Divider>
      <Title>{title}</Title>
    </Container>
  );
};
