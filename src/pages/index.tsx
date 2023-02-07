import styled from "styled-components"
import Image from 'next/image';
import readyRolls from "../../public/ReadyRolls.png";

const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
`

const HeaderWrapper = styled(Wrapper)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const HeaderTitle = styled.div`
  font-family: Roboto;
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: -0.045em;
  text-align: left;

  @media screen and (max-width: 678px) {
    font-size: 32px;
  }
`

const HeaderMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 678px) {
    display: none;
  }
`

const MenuItem = styled.li`
  display: list-item;
  list-style: none;
  padding: 1rem;
`

const MenuLink = styled.a`
  font-family: Noto Sans Thai;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: inherit;
  text-decoration: none;
`

const HeroWrapper = styled.div`
  height: 600px;
  background: linear-gradient(180deg, #003A0D 0%, rgba(0, 58, 13, 0.846717) 87.5%, rgba(0, 58, 13, 0.83) 100%);

  @media screen and (max-width: 678px) {
    height: 300px;
  }
`

const HeroContent = styled(Wrapper)`
  padding-top: 75px;

  @media screen and (max-width: 678px) {
    padding-top: 60px;
  }
`

const AboutUsSession = styled.div`
  height: 400px;
  background: #EEEEEE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`

const ContactUsSession = styled.div`
  height: 400px;
  background: linear-gradient(180deg, #FAFAFA 0%, rgba(250, 250, 250, 0) 100%);
`

const FooterSession = styled.div`
  height: 90px;
`

const HeroText = styled.p`
  font-family: Roboto;
  font-size: 128px;
  font-weight: 900;
  line-height: 150px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;
  white-space: pre-line;

  @media screen and (max-width: 678px) {
    font-size: 48px;
    line-height: 55px;
  }
`

const AboutUsContent = styled.div`
  padding-top: 65px;

  @media screen and (max-width: 678px) {
    padding-top: 35px;
  }
`

const AboutUsText = styled.p`
  font-family: Noto Sans Thai;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;

  @media screen and (max-width: 678px) {
    font-size: 16px;
    white-space: pre-line;
  }
`

const ReadyRollsLogo = styled(Image)`
  height: 142px;
  width: 141px;
  border-radius: 0px;
  margin-left: auto;
  margin-right: auto;
`

const TextWrapper = styled.div`
  margin-bottom: 20px;
`
const ImageWrapper = styled.div`
  display: block;
  text-align: center;
`

const ContactUsContent = styled.div`
  padding-top: 35px;
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 678px) {
    display: block;
  }
`

const ContactAddress = styled.div`
  width: 50%;

  @media screen and (max-width: 678px) {
    width: 100%;
  }
`

const ContactMap = styled.div`
  width: 50%;

  @media screen and (max-width: 678px) {
    display: none;
  }
`

const CompanyAddressSection = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const CompanyName = styled.p`
  font-family: Noto Sans Thai;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;

  @media screen and (max-width: 678px) {
    font-size: 16px;
  }
`

const CompanyBranch = styled.p`
  font-family: Noto Sans Thai;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;

  @media screen and (max-width: 678px) {
    font-size: 15px;
  }
`

const CompanyAddress = styled.p`
  font-family: Noto Sans Thai;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  white-space: pre-line;

  @media screen and (max-width: 678px) {
    font-size: 14px;
  }
`

const CompanyPhone = styled.p`
  font-family: Noto Sans Thai;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`

const GoogleMapBox = styled.div`
  height: 350px;
  width: 600px;
  border-radius: 0px;
  background: #636363;
  box-shadow: 0px 4px 4px 0px #00000040 inset;
`

const FooterContent = styled.div`
  padding-top: 50px;
`

const CopyRight = styled.p`
  font-family: Noto Sans Thai;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color : #818181;
`

export default function Home() {
  return (
    <>
      <header>
        <HeaderWrapper>
          <HeaderTitle>Ready Paper</HeaderTitle>
          <HeaderMenu>
            <MenuItem>
              <MenuLink href="/">หน้าแรก</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#about-us">เกี่ยวกับเรา</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#contact-us">ติดต่อเรา</MenuLink>
            </MenuItem>
          </HeaderMenu>
        </HeaderWrapper>
      </header>
      <main>
        <HeroWrapper>
          <HeroContent>
            <HeroText>{`WE BUILD \nBEST QUALITY \nPRODUCTS`}</HeroText>
          </HeroContent>
        </HeroWrapper>
        <AboutUsSession id="about-us">
          <Wrapper>
            <AboutUsContent>
              <TextWrapper>
                <AboutUsText>{`เราเป็นผู้ผลิตกระดาษความร้อน \nหรือกระดาษเทอร์มอล คุณภาพสูงในประเทศไทย`}</AboutUsText>
                <AboutUsText>{`โดยเรามุ่งเน้นคุณภาพของสินค้าที่ผลิต \nเพื่อผู้ใช้งานได้ใช้สินค้าที่มีคุณภาพสูงสุด`}</AboutUsText>
              </TextWrapper>
              <TextWrapper>
                <AboutUsText>จำหน่ายภายใต้แบรนด์ <b>ReadyRolls</b></AboutUsText>
              </TextWrapper>
              <ImageWrapper>
                <a href="http://www.readyrolls.com">
                  <ReadyRollsLogo src={readyRolls} alt="ReadyRolls" />
                </a>
              </ImageWrapper>
            </AboutUsContent>
          </Wrapper>
        </AboutUsSession>
        <ContactUsSession id="contact-us">
          <Wrapper>
            <ContactUsContent>
              <ContactMap>
                <GoogleMapBox>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15483.828009906774!2d100.6672835!3d14.0205631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x378e6cdcb250e64!2sReady%20Paper%20Co.%2C%20Ltd.!5e0!3m2!1sth!2sth!4v1675759840368!5m2!1sth!2sth" width="600" height="350" loading="lazy"></iframe>
                </GoogleMapBox>
              </ContactMap>
              <ContactAddress>
                <CompanyName>บริษัท เรดดี้ เปเปอร์ จำกัด</CompanyName>
                <CompanyAddressSection>
                  <div style={{ marginRight: '64px' }}>
                    <CompanyBranch>สำนักงานใหญ่</CompanyBranch>
                    <CompanyAddress>{`37/21 หมู่ 2 ตำบลคลองสาม\nอำเภอคลองหลวง\nจังหวัดปทุมธานี\n12120`}</CompanyAddress>
                  </div>
                  <div>
                    <CompanyBranch>สาขานครสวรรค์ (โรงงาน)</CompanyBranch>
                    <CompanyAddress>{`238/3 หมู่ 1 ตำบลโคกเดื่อ\nอำเภอไพศาลี\nจังหวัดนครสวรรค์\n60220`}</CompanyAddress>
                  </div>
                </CompanyAddressSection>
                <CompanyPhone>(+66) 84-142-1676</CompanyPhone>
              </ContactAddress>
            </ContactUsContent>
          </Wrapper>
        </ContactUsSession>
      </main>
      <footer>
        <FooterSession>
          <Wrapper>
            <FooterContent>
              <CopyRight>บริษัท เรดดี้ เปเปอร์​ จำกัด © 2023</CopyRight>
            </FooterContent>
          </Wrapper>
        </FooterSession>
      </footer>
    </>
  )
}
