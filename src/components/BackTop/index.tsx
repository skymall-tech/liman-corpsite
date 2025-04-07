import styled from '@emotion/styled';
import BackTopImg from '../../assets/icons/backtop.svg';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const BackTopIcon = styled.img<{ show: boolean }>`
  position: fixed;
  right: 66px;
  bottom: 66px;
  width: 72px;
  height: 72px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function BackTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setShow(scrollPosition > viewportHeight * 0.8); // Show when scrolled more than 1vh
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <BackTopIcon
        className="backtop"
        src={BackTopImg}
        show={show}
        onClick={() => {
          if (show) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />
      <Tooltip
        anchorSelect=".backtop"
        place="top"
        style={{
          backgroundColor: 'white',
          color: 'var(--color-primary)',
          borderRadius: '10px',
        }}
      >
        Back to Top
      </Tooltip>
    </>
  );
}
