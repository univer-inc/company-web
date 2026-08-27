import styled from 'styled-components';

// --- Layout ---
export const Wrap = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 32px;
`;

// --- Header ---
export const HeaderEl = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid #eee;
`;

export const Nav = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 18px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 0.03em;
`;

export const BrandMark = styled.span`
  width: 20px;
  height: 20px;
  background: var(--ink);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 26px;
  font-size: 13px;
  color: var(--slate);

  @media (max-width: 760px) {
    display: none;
  }

  a:hover {
    color: var(--ink);
  }
`;

// --- Section Title ---
export const SecTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

export const SecTitleEn = styled.span`
  font-size: 30px;
  font-family: 'M PLUS 1p', sans-serif;
  font-weight: 900;
`;

export const SecTitleDivider = styled.span`
  width: 2px;
  height: 24px;
  background: var(--ink);
`;

export const SecTitleJa = styled.span`
  font-size: 14.5px;
  color: var(--slate);
`;

// --- Hero ---
export const Hero = styled.section`
  background: var(--yellow);
  padding: 80px 0 66px;
  position: relative;
  overflow: hidden;
`;

export const HeroBadge = styled.div`
  position: absolute;
  top: 50px;
  right: 60px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: var(--yellow-deep);
  opacity: 0.6;
`;

export const HeroInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 760px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 640px;
  flex: 1;
`;

export const HeroVisual = styled.div`
  flex-shrink: 0;
  width: 350px;
  max-width: 100%;

  @media (max-width: 760px) {
    order: -1;
  }

  svg {
    width: 100%;
    height: auto;
  }
`;

export const HeroEyebrow = styled.div`
  font-family: 'M PLUS 1p', sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 0.08em;
  margin-bottom: 20px;
`;

export const HeroTitle = styled.h1`
  font-size: 36px;
  line-height: 1.55;
  margin: 0 0 22px;
  font-family: 'M PLUS 1p', sans-serif;
  font-weight: 900;

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

export const HeroLead = styled.p`
  font-size: 15px;
  line-height: 2;
  color: #3a2f16;
  max-width: 520px;
  margin: 0 0 30px;
`;

export const CtaRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

// --- Buttons ---
export const BtnPrimary = styled.a`
  background: var(--ink);
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  padding: 15px 26px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const BtnGhost = styled.a`
  border: 2px solid var(--ink);
  color: var(--ink);
  font-size: 14px;
  font-weight: 700;
  padding: 13px 24px;
  background: #fff;
`;

// --- Text Section ---
export const TextSec = styled.section<{ alt?: boolean }>`
  padding: 80px 0;
  ${({ alt }) => alt && `background: var(--gray);`}
`;

export const TextSecBig = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.9;
  margin: 0 0 16px;
`;

export const TextSecBody = styled.p`
  font-size: 15.5px;
  line-height: 2.1;
  color: #2b2320;
  max-width: 680px;
  margin: 0 0 16px;
`;

// --- Method ---
export const Method = styled.section`
  padding: 20px 0 90px;
`;

export const MethodIntro = styled.p`
  font-size: 15px;
  line-height: 2.1;
  color: #2b2320;
  max-width: 680px;
  margin: 0 0 40px;
`;

export const StepGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const StepCard = styled.div`
  background: var(--gray);
  padding: 22px 18px;
`;

export const StepNum = styled.div`
  font-family: 'M PLUS 1p', sans-serif;
  font-weight: 900;
  font-size: 20px;
  color: var(--yellow-deep);
  margin-bottom: 6px;
`;

export const StepTag = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: var(--slate);
  margin-bottom: 12px;
  letter-spacing: 0.04em;
`;

export const StepCardTitle = styled.h4`
  font-size: 14.5px;
  line-height: 1.7;
  margin: 0 0 10px;
`;

export const StepCardDesc = styled.p`
  font-size: 12px;
  line-height: 1.8;
  color: var(--slate);
  margin: 0;
`;

// --- Gateway (Programs) ---
export const Gateway = styled.section`
  padding: 20px 0 100px;
  background: var(--gray);
`;

export const GwGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const GwCard = styled.div<{ variant: 'u22' | 'biz'; comingSoon?: boolean }>`
  border-radius: 16px;
  padding: 40px 34px;
  color: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 260px;
  background: ${({ variant }) =>
    variant === 'u22'
      ? 'linear-gradient(150deg, var(--mint), var(--mint-deep))'
      : 'linear-gradient(150deg, var(--aqua), var(--aqua-deep))'};
  ${({ comingSoon }) =>
    comingSoon &&
    `pointer-events: none; opacity: 0.65;`}
`;

export const GwTag = styled.span`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 13px;
  font-weight: 900;
  background: rgba(255, 255, 255, 0.25);
  display: inline-block;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
  align-self: flex-start;
`;

export const GwOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const GwOverlayText = styled.span`
  font-family: 'M PLUS 1p', sans-serif;
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 0.15em;
  color: #fff;
`;

export const GwDesc = styled.p`
  font-size: 14px;
  line-height: 1.9;
  margin: 0 0 18px;
  opacity: 0.95;
`;

export const GwSub = styled.ul`
  list-style: none;
  margin: 0 0 26px;
  padding: 0;
  font-size: 13px;

  li {
    padding: 5px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

export const GwCta = styled.span`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: var(--ink);
  font-weight: 700;
  font-size: 14px;
  padding: 13px 24px;
  border-radius: 30px;
  align-self: flex-start;
`;

export const GwCircle = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  bottom: -60px;
  right: -60px;
`;

// --- Profile ---
export const Profile = styled.section`
  padding: 90px 0;
`;

export const PfGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const PfPhoto = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background: var(--gray);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 56px;
    height: 56px;
    background: var(--yellow-deep);
    bottom: -14px;
    right: -14px;
  }
`;

export const PfRole = styled.div`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 12px;
  font-weight: 900;
  color: var(--slate);
  letter-spacing: 0.05em;
  margin-bottom: 8px;
`;

export const PfName = styled.div`
  font-size: 24px;
  margin: 0 0 4px;
  font-family: 'M PLUS 1p', sans-serif;
  font-weight: 900;
`;

export const PfSub = styled.div`
  font-size: 13.5px;
  color: var(--slate);
  margin-bottom: 18px;
`;

export const PfBio = styled.div`
  p {
    font-size: 14.5px;
    line-height: 1.95;
    color: #2b2320;
    margin: 0 0 14px;
  }
`;

export const PfStats = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const PfStat = styled.div`
  background: var(--gray);
  padding: 14px 18px;
  min-width: 150px;
`;

export const PfStatNum = styled.div`
  font-family: 'M PLUS 1p', sans-serif;
  font-weight: 900;
  font-size: 19px;
  color: var(--yellow-deep);
`;

export const PfStatLabel = styled.div`
  font-size: 11.5px;
  color: var(--slate);
  margin-top: 4px;
  line-height: 1.6;
`;

// --- Contact ---
export const Contact = styled.section`
  padding: 90px 0 100px;
  background: var(--ink);
  color: #fff;
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-size: 26px;
  margin: 0 0 36px;
  font-family: 'M PLUS 1p', sans-serif;
  font-weight: 900;
`;

export const ContactDesc = styled.p`
  color: #ddd;
  font-size: 14.5px;
  margin: 0 0 26px;
`;

export const ContactRow = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContactBtn = styled.a<{
  variant: 'u22' | 'biz' | 'plain';
  disabled?: boolean;
}>`
  font-weight: 700;
  font-size: 14px;
  padding: 15px 26px;
  border-radius: 30px;
  ${({ variant, disabled }) => {
    if (disabled)
      return `background: #888; color: #ccc; pointer-events: none;`;
    if (variant === 'u22') return `background: var(--mint-deep); color: #fff;`;
    if (variant === 'biz') return `background: var(--aqua-deep); color: #fff;`;
    return `border: 2px solid #fff; color: #fff;`;
  }}
`;

// --- Footer ---
export const FooterEl = styled.footer`
  background: var(--white);
  color: var(--slate);
  padding: 36px 0;
  font-size: 12.5px;
  border-top: 1px solid #eee;
`;

export const FootGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;
