import styled from '@emotion/styled';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

const Wrapper = styled.div`
  position: relative;
  overflow-y: visible;
  padding: 62px 0;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 40px;
  overflow-y: visible;
  padding-right: '140px';
  width: 'max-content';
  justify-content: 'flex-start';
`;

const RightMask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(to right, transparent, #f3f0ec);
  pointer-events: none;
  z-index: 1;
`;

const Indicators = styled.div<{ show: boolean }>`
  width: 312px;
  height: 4px;
  margin: 16px auto 0;
  background-color: #e0e0e0;
  position: relative;
  display: ${(props) => (props.show ? 'block' : 'none')};
  cursor: pointer;
`;

const ActiveIndicator = styled.div<{ position: number }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 104px;
  height: 100%;
  background-color: #1a1a1a;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => props.position * 104}px);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

interface ScrollContainerProps {
  children: ReactNode;
  className?: string;
}

export const ScrollContainer = ({
  children,
  className,
}: ScrollContainerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isIndicatorDragging, setIsIndicatorDragging] = useState(false);
  const indicatorsRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (wrapperRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = wrapperRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = Math.min(2, (scrollLeft / maxScroll) * 2);
      setScrollProgress(progress);
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - wrapperRef.current!.offsetLeft);
    setScrollLeft(wrapperRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - wrapperRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    wrapperRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleIndicatorMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsIndicatorDragging(true);
    document.addEventListener('mousemove', handleIndicatorMouseMove);
    document.addEventListener('mouseup', handleIndicatorMouseUp);
  };

  const handleIndicatorMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isIndicatorDragging || !indicatorsRef.current || !wrapperRef.current)
        return;

      const rect = indicatorsRef.current.getBoundingClientRect();
      const position = Math.max(
        0,
        Math.min(1, (e.clientX - rect.left) / rect.width)
      );

      const { scrollWidth, clientWidth } = wrapperRef.current;
      const maxScroll = scrollWidth - clientWidth;
      wrapperRef.current.scrollLeft = maxScroll * position;
    },
    [isIndicatorDragging]
  );

  const handleIndicatorMouseUp = useCallback(() => {
    setIsIndicatorDragging(false);
    document.removeEventListener('mousemove', handleIndicatorMouseMove);
    document.removeEventListener('mouseup', handleIndicatorMouseUp);
  }, [handleIndicatorMouseMove]);

  // Clean up event listeners on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleIndicatorMouseMove);
      document.removeEventListener('mouseup', handleIndicatorMouseUp);
    };
  }, [handleIndicatorMouseMove, handleIndicatorMouseUp]);

  return (
    <div
      className={className}
      style={{ position: 'relative', overflowY: 'visible' }}
    >
      <Wrapper
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onScroll={handleScroll}
      >
        <ContentContainer>{children}</ContentContainer>
      </Wrapper>
      <RightMask />
      <Indicators
        show={true}
        ref={indicatorsRef}
        onClick={(e) => {
          if (!isIndicatorDragging) {
            const rect = e.currentTarget.getBoundingClientRect();
            const position = (e.clientX - rect.left) / rect.width;
            const { scrollWidth, clientWidth } = wrapperRef.current!;
            const maxScroll = scrollWidth - clientWidth;
            wrapperRef.current!.scrollTo({
              left: maxScroll * position,
              behavior: 'smooth',
            });
          }
        }}
      >
        <ActiveIndicator
          position={scrollProgress}
          onMouseDown={handleIndicatorMouseDown}
        />
      </Indicators>
    </div>
  );
};
