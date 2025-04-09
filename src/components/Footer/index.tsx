import styled from '@emotion/styled';
import Logo from '../../assets/icons/logo.svg';
import { Link } from 'react-router';
import { PAGE_PATH } from '../../consts/pagePath';
import { useTranslation } from 'react-i18next';

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

// const QRCodeImage = styled.img`
//   width: 60px;
//   height: 60px;
// `;

// const QRCodeText = styled.p`
//   font-size: var(--font-size-body);
//   color: var(--color-primary);
//   margin-top: 12px;
//   font-weight: 700;
//   text-align: center;
// `;

const Divider = styled.div`
  width: 2px;
  height: 95px;
  background-color: var(--color-primary);
`;

// const QRSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: max(10vw, 200px);
// `;

const LinkSection = styled.div`
  h3 {
    color: var(--color-primary);
    margin-bottom: 16px;
    font-size: var(--font-size-h3);
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      font-size: var(--font-size-body);
      margin-bottom: 15px;
      a {
        font-size: var(--font-size-body);
        color: var(--color-primary);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
const LinkElement = styled(Link)`
  font-size: var(--font-size-body);
`;

const Copyright = styled.div`
  text-align: center;
  font-size: var(--font-size-body);
  color: var(--color-primary);
  margin-top: 70px;
`;

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoImage src={Logo} alt="Liman Logo" />
        <Divider />
        {/* <QRSection>
          <QRCodeImage
            src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/qr-temp-9yoMRi4mzKUH1pxEPhKESYyaAEZ50m"
            alt="WeChat QR Code"
          />
          <QRCodeText>{t('footer.search_in_wechat')}</QRCodeText>
        </QRSection> */}

        <LinkSection style={{ marginLeft: '30px' }}>
          <h3>{t('footer.business_map')}</h3>
          <ul>
            <li>
              <LinkElement
                to={{
                  pathname: PAGE_PATH.businessMap,
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                {t('common.travel_retail')}
              </LinkElement>
            </li>
            <li>
              <LinkElement
                to={{
                  pathname: PAGE_PATH.satellite,
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                {t('common.satellite_paris')}
              </LinkElement>
            </li>
            <li>
              <LinkElement
                to={{
                  pathname: PAGE_PATH.estate,
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                {t('common.culture_estate')}
              </LinkElement>
            </li>
          </ul>
        </LinkSection>

        <LinkSection>
          <h3>{t('footer.business_cooperation')}</h3>
          <ul>
            <li>
              <a href="mailto:bc@sky-mall.com">bc@sky-mall.com</a>
            </li>
          </ul>
          <h3>{t('footer.join_us')}</h3>
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
