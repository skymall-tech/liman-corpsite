import styled from '@emotion/styled';
import { SectionTitle } from '../../components/Title';
import { useNavigationHeight } from '../../hooks/useNavigationHeight';
import { Footer } from '../../components/Footer';
import { useTranslation } from 'react-i18next';
import { BREAKPOINTS } from '../../hooks/useResponsive';

const Container = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid var(--color-primary);
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    padding: 0;
  }
`;

export const MainPage = styled.div<{ navHeight: number }>`
  width: 100vw;
  height: ${({ navHeight }) => `calc(100vh - ${navHeight}px)`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    height: 100vh;
    padding-top: ${({ navHeight }) => navHeight}px;
  }
`;

const ContactGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 64px;
  width: max(880px, 40vw);
  margin: 126px auto;
  margin-bottom: 0px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 40px;
    margin: 24px auto;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    min-width: none;
  }
`;

const SectionHeading = styled.h3`
  color: var(--color-primary);
  font-size: var(--font-size-h3);
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 8px;
  &::before {
    content: '◇';
  }
`;

const ContactLink = styled.a`
  margin-left: 20px;
  font-size: var(--font-size-body);
  color: var(--color-primary);
  text-decoration: underline;
`;

export const ContactUsPage = () => {
  const navHeight = useNavigationHeight();
  const { t } = useTranslation();

  return (
    <Container>
      <MainPage navHeight={navHeight}>
        <SectionTitle
          title={t('contact_us.title')}
          subtitle={t('contact_us.subtitle')}
        />
        <ContactGrid>
          <ContactSection>
            <SectionHeading>
              {t('contact_us.business_cooperation')}
            </SectionHeading>
            <ContactLink href='mailto:bc@liman.group'>
              Mail-liman：bc@liman.group
            </ContactLink>
            <ContactLink href='mailto:bc@skymall.com'>
              Mail-skymall：bc@skymall.com
            </ContactLink>
            <ContactLink href='tel:+86 20-37737063'>
              Tel：+86 20-37737063
            </ContactLink>
          </ContactSection>

          <ContactSection>
            <SectionHeading>{t('contact_us.join_liman')}</SectionHeading>
            <ContactLink href='mailto:hr@liman.group'>
              Mail：hr@liman.group
            </ContactLink>
          </ContactSection>

          <ContactSection>
            <SectionHeading>{t('contact_us.duty_free')}</SectionHeading>
            <ContactLink href='mailto:chengquan@liman.group'>
              Mail：chengquan@liman.group
            </ContactLink>
            <ContactLink href='tel:+853 2881 1159'>
              Tel：+853 2881 1159
            </ContactLink>
          </ContactSection>

          <ContactSection>
            <SectionHeading>{t('contact_us.market')}</SectionHeading>
            <ContactLink href='mailto:marketing@liman.group'>
              Mail：marketing@liman.group
            </ContactLink>
          </ContactSection>

          <ContactSection>
            <SectionHeading>{t('contact_us.tech')}</SectionHeading>
            <ContactLink href='mailto:tech@liman.group'>
              Mail：tech@liman.group
            </ContactLink>
          </ContactSection>
        </ContactGrid>
      </MainPage>
      <Footer />
    </Container>
  );
};
