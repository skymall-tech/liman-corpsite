import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 250px);
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ImageContainer = styled.img`
  width: calc(100% - 180px);
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
`;

const SearchContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SearchBar = styled.div`
  width: 400px;
  height: 60px;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 99px;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 16px;
  font-weight: 700;
  div {
    margin-right: 14px;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

export const ImgWithSearch = ({
  src,
  desc,
  icon,
  onClick,
}: {
  src: string;
  desc: string;
  icon: string;
  onClick?: () => void;
}) => {
  return (
    <Wrapper onClick={onClick}>
      <ImageContainer src={src} />
      <SearchContainer>
        <SearchBar>
          <div>{desc}</div>
          <img src={icon} />
        </SearchBar>
      </SearchContainer>
    </Wrapper>
  );
};
