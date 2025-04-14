import styled from '@emotion/styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';

import logo from '../../assets/icons/logo.svg';
import expandIcon from '../../assets/icons/expand-down.svg';
import { PAGE_PATH } from '../../consts/pagePath';

const FooterWrapper = styled.footer`
  background-color: #ede8e0;
  padding: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Logo = styled.img`
  width: 30%;
  margin-bottom: 40px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  color: var(--color-primary);
`;

const SectionHeader = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid var(--color-primary);
`;

const SectionContent = styled(motion.div)`
  width: 100%;
  background-color: #e8dccc;
  color: var(--color-primary);
  overflow: hidden;
`;

const ContentInner = styled(motion.div)`
  padding: 16px;
  border-bottom: 1px solid var(--color-primary);
`;

const ArrowIcon = styled(motion.img)`
  width: 20px;
  height: 10px;
`;

const QRCodeImage = styled.img`
  width: 60px;
  height: 60px;
`;

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const Title = styled.h3`
  width: 100%;
  text-align: left;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--color-primary);
  }
`;

const Spacer = styled.div`
  height: 60px;
`;

const Disclaimer = styled.p`
  font-size: 8px;
  color: var(--color-primary);
  text-align: center;
`;

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LinkElement = styled(Link)`
  font-size: var(--font-size-body);
  color: var(--color-primary);
  text-decoration: none;
`;

const ExpandableSection: React.FC<FooterSectionProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentVariants = {
    hidden: {
      height: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      height: 'auto',
      transition: { duration: 0.3 },
    },
  };

  const innerVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <FooterSection>
      <SectionHeader onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        <ArrowIcon
          src={expandIcon}
          alt="Expand Icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </SectionHeader>
      <AnimatePresence initial={false}>
        {isOpen && (
          <SectionContent
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
          >
            <ContentInner variants={innerVariants}>{children}</ContentInner>
          </SectionContent>
        )}
      </AnimatePresence>
    </FooterSection>
  );
};

export const MobileFooter = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <Logo src={logo} alt="Liman Logo" />
      <ExpandableSection title={t('footer.search_in_wechat')}>
        <QRCodeImage
          src="https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/qr-temp-9yoMRi4mzKUH1pxEPhKESYyaAEZ50m"
          alt="WeChat QR Code"
        />
      </ExpandableSection>
      <ExpandableSection title={t('footer.business_map')}>
        <LinkList>
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
        </LinkList>
      </ExpandableSection>
      <ExpandableSection title={t('footer.business_cooperation')}>
        <a
          style={{ color: 'var(--color-primary)' }}
          href="mailto:bc@liman.group"
        >
          bc@liman.group
        </a>
      </ExpandableSection>
      <ExpandableSection title={t('footer.join_us')}>
        <a
          style={{ color: 'var(--color-primary)' }}
          href="mailto:hr@liman.group"
        >
          hr@liman.group
        </a>
      </ExpandableSection>
      <Spacer />

      <Disclaimer>
        Deep ICP No. 2025015255-1 Copyright © 2021-2023 Liman Technology Co.,
        LTD
      </Disclaimer>
    </FooterWrapper>
  );
};
