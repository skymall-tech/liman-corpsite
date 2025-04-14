import styled from '@emotion/styled';
import React, { useState } from 'react';
import Down from '../../assets/icons/Down.svg';
import Up from '../../assets/icons/Up.svg';
import { keyframes } from '@emotion/react';

interface CultureCardProps {
  title: string;
  shortDescription: string;
  children?: React.ReactNode;
  showExpandIcon?: boolean;
  src: string;
}
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0) ;
  }
  50% {
    transform: translateY(-5px);
  }
`;

const Card = styled.div<{ isExpanded: boolean }>`
  box-sizing: border-box;
  width: 18vw;
  height: ${({ isExpanded }) => (isExpanded ? 'calc(100vh - 200px)' : '50vh')};
  padding: 24px;
  border-radius: 16px;
  border: 3px solid #b59152;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 35px 28px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div<{ src: string }>`
  background: #946a20;
  width: 100%;
  height: 9vw;
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-h2);
  font-weight: 700;
  flex-shrink: 0;
  margin-bottom: 2vw;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Description = styled.div`
  text-align: center;
  color: var(--color-primary);
  width: 80%;
  font-size: var(--font-size-body);
  font-weight: 700;
`;

const ExpandedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: var(--color-primary);
  text-align: center;
  h3 {
    font-weight: 700;
    margin-bottom: 8px;
    font-size: var(--font-size-body);
    line-height: 1.5;
  }
  p {
    margin-bottom: 20px;
    font-size: var(--font-size-body);
  }
`;

const ExpandIcon = styled.img<{ showExpandIcon: boolean }>`
  width: 28px;
  height: 28px;
  opacity: ${({ showExpandIcon }) => (showExpandIcon ? '1' : '0')};
  animation: ${bounce} 2s infinite;
`;

export const CultureCard: React.FC<CultureCardProps> = ({
  title,
  shortDescription,
  children,
  showExpandIcon = true,
  src,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      onClick={() => {
        if (showExpandIcon) {
          setIsExpanded(!isExpanded);
        }
      }}
      isExpanded={isExpanded}
    >
      <Title src={src}>{title}</Title>
      {!isExpanded ? (
        <Description> {shortDescription} </Description>
      ) : (
        <ExpandedContainer>
          <h3>{shortDescription}</h3>
          {children}
        </ExpandedContainer>
      )}
      <div style={{ flex: 1 }}></div>
      <ExpandIcon
        src={isExpanded ? Up : Down}
        showExpandIcon={showExpandIcon}
      />
    </Card>
  );
};
