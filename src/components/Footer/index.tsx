import styled from '@emotion/styled';
import Logo from '../../assets/icons/logo.svg';

const FooterWrapper = styled.footer`
  border-top: 1px solid var(--color-primary);
  padding: 40px 0;
  background-color: var(--color-background-primary);
  color: var(--color-primary);
  width: calc(100% - 88px);
`;

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
  margin-bottom: 46px;
`;
const LogoImage = styled.img`
  width: 127px;
  height: 58px;
`;

const QRCodeImage = styled.img`
  width: 60px;
  height: 60px;
`;

const QRCodeText = styled.h3`
  font-size: 12px;
  color: var(--color-primary);
  margin-top: 12px;
  font-weight: 700;
`;

const Divider = styled.div`
  width: 2px;
  height: 95px;
  background-color: var(--color-primary);
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 46px;
  gap: 120px;
`;

const QRSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkSection = styled.div`
  h3 {
    color: var(--color-primary);
    margin-bottom: 16px;
    font-size: 16px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      font-size: 12px;
      margin-bottom: 15px;
      a {
        color: var(--color-primary);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 12px;
  color: var(--color-primary);
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <TopSection>
          <LogoImage src={Logo} alt="Liman Logo" />
          <Divider />
          <QRSection>
            <QRCodeImage
              src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/qr-temp-9yoMRi4mzKUH1pxEPhKESYyaAEZ50m"
              alt="WeChat QR Code"
            />
            <QRCodeText>Search in WeChat Mini Program</QRCodeText>
          </QRSection>
        </TopSection>
        <BottomSection>
          <LinkSection>
            <h3>Terms and Conditions</h3>
            <ul>
              <li>
                <a href="#">Document Information</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Platform Purchase Rules</a>
              </li>
            </ul>
          </LinkSection>

          <LinkSection>
            <h3>Business Map</h3>
            <ul>
              <li>
                <a href="#">Travel Retail</a>
              </li>
              <li>
                <a href="#">Satellite Paris</a>
              </li>
              <li>
                <a href="#">Cultural Estate</a>
              </li>
            </ul>
          </LinkSection>
          <LinkSection>
            <h3>Business cooperation </h3>
            <ul>
              <li>
                <a href="#">Travel Retail</a>
              </li>
            </ul>
            <h3>Join us </h3>
            <ul>
              <li>
                <a href="#">hr@liman.group</a>
              </li>
            </ul>
          </LinkSection>
        </BottomSection>
      </FooterContent>

      <Copyright>
        Deep ICP No. 2025015255-1 Copyright © 2021-2023 Liman Technology Co.,
        LTD
      </Copyright>
    </FooterWrapper>
  );
};
