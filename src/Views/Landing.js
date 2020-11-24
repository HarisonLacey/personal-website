import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import {
  GlobalStyle,
  HeaderCol,
  LandingContainer,
  FirstCol,
  SecondCol,
  ThirdCol,
  FourthCol,
  MoveBlockRight,
  MoveBlockLeft,
  StretchBlockRight,
  StretchBlockLeft,
  AboutCol,
  BottomCol,
} from "../Components/Styled";

const Landing = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [scrollExperience, setScrollExperience] = useState(false);
  const [blockExperience, setBlockExperience] = useState(false);
  const [scrollEducation, setScrollEducation] = useState(false);
  const [blockEducation, setBlockEducation] = useState(false);
  const [scrollProjects, setScrollProjects] = useState(false);
  const [blockProjects, setBlockProjects] = useState(false);
  const [scrollSkills, setScrollSkills] = useState(false);
  const [blockSkills, setBlockSkills] = useState(false);
  const [scrollHobbies, setScrollHobbies] = useState(false);
  const [blockHobbies, setBlockHobbies] = useState(false);
  const [scrollInterests, setScrollInterests] = useState(false);
  const [blockInterests, setBlockInterests] = useState(false);
  const [scrollBottom, setScrollBottom] = useState(false);
  useEffect(() => {
    const dynamicScroll = () => {
      window.addEventListener("scroll", function (e) {
        let menuButton = document.getElementsByClassName("list")[0];
        while (menuButton.firstChild) {
          menuButton.removeChild(menuButton.firstChild);
        }
        menuButton.parentNode.style.opacity = "100%";
        const scrollFunc = (el, pix, set, block) => {
          el > pix ? set(true) : set(false);
          if (block !== null) {
            el > pix ? block(true) : block(false);
          }
        };
        scrollFunc(
          document.documentElement.scrollTop,
          10,
          setScrollHeader,
          null
        );
        scrollFunc(
          document.documentElement.scrollTop,
          100,
          setScrollExperience,
          setBlockExperience
        );
        scrollFunc(
          document.documentElement.scrollTop,
          300,
          setScrollEducation,
          setBlockEducation
        );
        scrollFunc(
          document.documentElement.scrollTop,
          500,
          setScrollProjects,
          setBlockProjects
        );
        scrollFunc(
          document.documentElement.scrollTop,
          1500,
          setScrollSkills,
          setBlockSkills
        );
        scrollFunc(
          document.documentElement.scrollTop,
          1800,
          setScrollHobbies,
          setBlockHobbies
        );
        scrollFunc(
          document.documentElement.scrollTop,
          2000,
          setScrollInterests,
          setBlockInterests
        );
        scrollFunc(
          document.documentElement.scrollTop,
          1415,
          setScrollBottom,
          null
        );
      });
    };
    dynamicScroll();
    window.addEventListener("mouseover", function (e) {
      if (e.target.getAttribute("class") === "list-item") {
        let timerLength = 10;
        setInterval(() => {
          if (timerLength < 100) {
            e.target.childNodes[1].style.width = `${timerLength}%`;
            timerLength += 10;
          }
        }, 50);
      }
    });
    window.addEventListener("mouseout", function (e) {
      if (e.target.getAttribute("class") === "list-item") {
        e.target.childNodes[1].style.width = "0";
      }
    });
  }, [scrollHeader]);

  const menu = (e) => {
    let menuItems = ["about", "experience", "contact"];
    let menuButton = document.getElementsByClassName("list")[0];
    if (menuButton.childNodes.length === 0) {
      e.target.parentNode.style.opacity = "80%";
      setScrollHeader("full");
      setInterval(() => {
        if (menuItems[0] !== undefined) {
          let listItem = document.createElement("li");
          let hr = document.createElement("hr");
          hr.style.width = "0";
          hr.style.borderTop = "5px solid lightgrey";
          listItem.className = "list-item";
          listItem.innerHTML = menuItems[0];
          listItem.appendChild(hr);
          menuButton.appendChild(listItem);
          menuItems.shift();
        }
      }, 80);
    } else {
      document.documentElement.scrollTop < 10
        ? setScrollHeader(false)
        : setScrollHeader(true);
      e.target.parentNode.style.opacity = "100%";
      while (menuButton.firstChild) {
        menuButton.removeChild(menuButton.firstChild);
      }
    }
  };

  return (
    <LandingContainer fluid>
      <GlobalStyle />
      <Row>
        <HeaderCol scrollStyle={scrollHeader} xs={12}>
          <p onClick={menu}>menu</p>
          <ul className="list"></ul>
        </HeaderCol>
        <FirstCol xs={12}>
          <div className="parallax"></div>
        </FirstCol>
        <AboutCol xs={12}>
          <div>
            The background-image property sets one or more background images for
            an element. By default, a background-image is placed at the top-left
            corner of an element, and repeated both vertically and horizontally.
            Tip: The background of an element is the total size of the element,
            including padding and border (but not the margin). Tip: Always set a
            background-color to be used if the image is unavailable.
          </div>
        </AboutCol>
        <SecondCol xs={12}>
          <div className="parallax"></div>
        </SecondCol>
        <Col xs={12}>
          <MoveBlockRight
            display={blockExperience}
            scrollStyle={scrollExperience}
          >
            <p>experience</p>
          </MoveBlockRight>
        </Col>
        <Col xs={12}>
          <MoveBlockLeft display={blockEducation} scrollStyle={scrollEducation}>
            <p>education</p>
          </MoveBlockLeft>
        </Col>
        <Col xs={12}>
          <MoveBlockRight display={blockProjects} scrollStyle={scrollProjects}>
            <p>projects</p>
          </MoveBlockRight>
        </Col>
        <ThirdCol xs={12}>
          <div className="parallax"></div>
        </ThirdCol>
        <AboutCol xs={12}>
          <div>
            The background-image property sets one or more background images for
            an element. By default, a background-image is placed at the top-left
            corner of an element, and repeated both vertically and horizontally.
            Tip: The background of an element is the total size of the element,
            including padding and border (but not the margin). Tip: Always set a
            background-color to be used if the image is unavailable.
          </div>
        </AboutCol>
        <FourthCol xs={12}>
          <div className="parallax"></div>
        </FourthCol>
        <Col xs={12}>
          <StretchBlockRight display={blockSkills} scrollStyle={scrollSkills}>
            <p>skills</p>
          </StretchBlockRight>
        </Col>
        <Col xs={12}>
          <StretchBlockLeft display={blockHobbies} scrollStyle={scrollHobbies}>
            <p>hobbies</p>
          </StretchBlockLeft>
        </Col>
        <Col xs={12}>
          <StretchBlockRight
            display={blockInterests}
            scrollStyle={scrollInterests}
          >
            <p>interests</p>
          </StretchBlockRight>
        </Col>
        <ThirdCol xs={12}>
          <div className="parallax"></div>
        </ThirdCol>
        <BottomCol scrollStyle={scrollBottom} xs={12}>
          Contact
        </BottomCol>
      </Row>
    </LandingContainer>
  );
};

export default Landing;
