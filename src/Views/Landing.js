import Row from "react-bootstrap/Row";
import {
  GlobalStyle,
  LandingContainer,
  FirstCol,
  SecondCol,
  LastCol,
  AboutCol,
  BottomCol,
  LastHr,
} from "../Components/Styled";
import Header from "../Components/Header";
import MoveBlock from "../Components/MoveBlock";
import StretchBlock from "../Components/StretchBlock";
import SingleStretchRight from "../Components/SingleStretchRight";
import SingleStretchLeft from "../Components/SingleStretchLeft";
import Heart from "../Assets/heart.png";
import Alien from "../Assets/alien.png";

// landing page

const Landing = () => {
  return (
    <LandingContainer fluid>
      <GlobalStyle />
      <Row>
        <Header />
        <FirstCol xs={12}>
          <div className="parallax"></div>
        </FirstCol>
        <AboutCol xs={12} id="about">
          <div>
            <p>Hello, welcome to my website!</p>
            <p>
              My name is Harison and I am a web developer. Take a look around
              and If you have any questions get in touch!
            </p>
            <img id="heart" src={Heart} alt="heart icon" />
          </div>
        </AboutCol>
        <SecondCol xs={12}>
          <div className="parallax"></div>
        </SecondCol>
        <MoveBlock />
        <SecondCol xs={12}>
          <div className="parallax"></div>
        </SecondCol>
        <AboutCol xs={12} id="daily qoute">
          <div>
            <p>
              "You’re off to great places, today is your day. Your mountain is
              waiting, so get on your way." - Dr. Seuss
            </p>
            <img src={Alien} alt="alien icon" />
          </div>
        </AboutCol>
        <SecondCol xs={12}>
          <div className="parallax"></div>
        </SecondCol>
        <StretchBlock />
        <LastCol xs={12}>
          <div className="parallax"></div>
        </LastCol>
        <BottomCol xs={6} id="contact">
          <SingleStretchRight
            content={false}
            email="email: harisonlacey@gmail.com"
            phone="phone: 0796063612"
          />
        </BottomCol>
        <BottomCol xs={6}>
          <SingleStretchLeft content={true} />
        </BottomCol>
        <LastHr xs={12}>
          <hr />
        </LastHr>
      </Row>
    </LandingContainer>
  );
};

export default Landing;
