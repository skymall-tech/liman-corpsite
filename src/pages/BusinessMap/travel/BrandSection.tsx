import styled from '@emotion/styled';
import { SectionTitle } from '../../../components/Title';
import { useTranslation } from 'react-i18next';

const BrandContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 80vw;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2vw;
`;

const LogoItem = styled.img`
  width: 12vw;
`;

const LogoList = [
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/1-xyYTQ0UQVtmmH7ytAQfSdvw2AbkXwL.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/2-iv03bOPSDFGNYeujAXvVSuYTUPbE8n.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/3-j4hpx5ogzzUv0wdLneHMX80gZ9X9QC.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/4-weZwIgvIB5meyqGgjwnPtV5mPuuezx.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/5-MoZzMu5K72psDsVq4gR8GLar6o4zUF.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/6-rnaVWK3Hzy5mjOdqDoh7ck0oWI63Uh.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/7-u5EwhM9A5r0iubHX2HVwyWk4HIsydz.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/8-VeqTRAsznF32Yutxy3460kLG32e28h.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/9-OI4WyVOyqetRD7ZS4QZyYctqwFxizu.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/10-qYpAcyfpxMD6mdQPalAmExhNoXYWUU.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/11-Mftl7fNk9ieeqlQ5Oeo2DvuIfRL5Fy.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/12-hyXhO3OT5RvYaTJRMb3tuvflcU0cKI.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/13-qt0LEfZrQ1s4CFEC6bmmGA831iPYrf.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/14-PrFqbysnk3syE72UbGx8asjRz3Ijk9.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/15-6O1sWBR9jD3WEzc4sLX23IrDBWDOEB.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/16-c3jUhHWEANrUJBA2IK2BLkcekb2KsJ.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/17-kzHt3lXsiWzuwJ0qCWN2uAcEuSxqMx.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/18-dv1X6QmjVMPrBpYJGjAbY8Ck3hGO0X.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/19-hRCXgxdMmbnlKacrQnuUzotD6xswFC.png',
  'https://qyrfpxt160dfdoff.public.blob.vercel-storage.com/Logos/20-FfcQY8FIiaRu3LoXYcYbPzI3AGiaKV.png',
];

export const BrandSection = () => {
  const { t } = useTranslation();
  return (
    <BrandContainer id="brand">
      <SectionTitle
        title={t('travel.partner_brands.title')}
        subtitle={t('travel.partner_brands.subtitle')}
      />
      <LogoContainer>
        {LogoList.map((logo) => (
          <LogoItem src={logo}></LogoItem>
        ))}
      </LogoContainer>
    </BrandContainer>
  );
};
