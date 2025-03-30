import styled from '@emotion/styled';
import Logo from '../../assets/icons/logo.svg';
import { Link } from 'react-router';
import { PAGE_PATH } from '../../consts/pagePath';

const FooterWrapper = styled.footer`
  border-top: 1px solid var(--color-primary);
  padding: 40px 0;
  background-color: var(--color-background-primary);
  color: var(--color-primary);
  width: calc(100% - 100px);
`;

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  justify-content: center;
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
  text-align: center;
`;

const Divider = styled.div`
  width: 2px;
  height: 95px;
  background-color: var(--color-primary);
`;

const QRSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
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
  margin-top: 70px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoImage src={Logo} alt="Liman Logo" />
        <Divider />
        <QRSection>
          <QRCodeImage
            src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/qr-temp-9yoMRi4mzKUH1pxEPhKESYyaAEZ50m"
            alt="WeChat QR Code"
          />
          <QRCodeText>Search in WeChat Mini Program</QRCodeText>
        </QRSection>

        <LinkSection style={{ marginLeft: '30px' }}>
          <h3>Business Map</h3>
          <ul>
            <li>
              <Link
                to={{
                  pathname: PAGE_PATH.businessMap,
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                Travel Retail
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: PAGE_PATH.satellite,
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                Satellite Paris
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: PAGE_PATH.estate,
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                Cultural Estate
              </Link>
            </li>
          </ul>
        </LinkSection>

        <LinkSection>
          <h3>Business cooperation </h3>
          <ul>
            <li>
              <a href="mailto:bc@sky-mall.com">bc@sky-mall.com</a>
            </li>
          </ul>
          <h3>Join us </h3>
          <ul>
            <li>
              <a href="mailto:hr@liman.group">hr@liman.group</a>
            </li>
          </ul>
        </LinkSection>
      </FooterContent>
      <Copyright>
        Deep ICP No. 2025015255-1 Copyright © 2021-2023 Liman Technology Co.,
        LTD
      </Copyright>
    </FooterWrapper>
  );
};
