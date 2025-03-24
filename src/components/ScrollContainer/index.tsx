import styled from '@emotion/styled';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow-x: auto;
  padding: 20px 0;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentContainer = styled.div<{ hasOverflow: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  padding-right: ${(props) => (props.hasOverflow ? '120px' : '20px')};
  width: ${(props) => (props.hasOverflow ? 'max-content' : '100%')};
  justify-content: ${(props) => (props.hasOverflow ? 'flex-start' : 'center')};
`;

const RightMask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(to right, transparent, #ffffff);
  pointer-events: none;
  position: fixed;
  z-index: 1;
`;

const Indicators = styled.div<{ show: boolean }>`
  width: 312px;
  height: 4px;
  margin: 20px auto 0;
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
  const [hasOverflow, setHasOverflow] = useState(false);
  const [isIndicatorDragging, setIsIndicatorDragging] = useState(false);
  const indicatorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (wrapperRef.current) {
        const { scrollWidth, clientWidth } = wrapperRef.current;
        setHasOverflow(scrollWidth > clientWidth);
      }
    };

    // Run after a short delay to ensure content is rendered
    const timeoutId = setTimeout(checkOverflow, 0);

    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
      clearTimeout(timeoutId);
    };
  }, [children]); // Add children to dependencies to recheck when content changes

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
    <div className={className}>
      <Wrapper
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onScroll={handleScroll}
      >
        <ContentContainer hasOverflow={hasOverflow}>
          {children}
        </ContentContainer>
        {hasOverflow && <RightMask />}
      </Wrapper>
      <Indicators
        show={hasOverflow}
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
