import styled from '@emotion/styled';

const Container = styled.div<{ textAlign: string }>`
  display: flex;
  flex-direction: column;
  width: max(25vw, 400px);
  align-items: ${({ textAlign }) => textAlign === 'right' && 'flex-end'};
`;

const Divider = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 1px;
  background-color: var(--color-primary);
`;

const Title = styled.h2`
  margin-top: 18px;
  color: var(--color-secondary);
  font-size: calc(var(--font-size-h2) - 2px);
`;
const Paragraph = styled.p<{ textAlign: string }>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: calc(var(--font-size-body) + 4px);
  margin-bottom: 18px;
  color: var(--color-primary);
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
      {paragraphs.map((item, index) => (
        <Paragraph textAlign={textAlign} key={index}>
          {item}
        </Paragraph>
      ))}
      <Divider></Divider>
      <Title>{title}</Title>
    </Container>
  );
};
