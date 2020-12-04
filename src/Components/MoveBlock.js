import { useEffect, useState } from "react";
import { MoveBlockRight, MoveBlockLeft } from "../Components/Styled";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Github from "../Assets/github.png";
import Linkedin from "../Assets/linkedin.png";

const MoveBlock = () => {
  const [scrollExperience, setScrollExperience] = useState(false);
  const [blockExperience, setBlockExperience] = useState(false);
  const [scrollEducation, setScrollEducation] = useState(false);
  const [blockEducation, setBlockEducation] = useState(false);
  const [scrollProjects, setScrollProjects] = useState(false);
  const [blockProjects, setBlockProjects] = useState(false);
  useEffect(() => {
    const dynamicScroll = () => {
      window.addEventListener("scroll", function () {
        // scroll functions
        const scrollFunc = (el, pix, set, block) => {
          el > pix ? set(true) : set(false);
          if (block !== null) {
            el > pix ? block(true) : block(false);
          }
        };
        // move block dynamic hr
        const underHr = (t, el, m) => {
          if (document.documentElement.scrollTop > t) {
            m ? (el.style.marginRight = "0") : (el.style.marginLeft = "0");
            el.style.opacity = "100%";
          } else {
            m ? (el.style.marginRight = "50%") : (el.style.marginLeft = "50%");
            el.style.opacity = "0";
          }
        };
        scrollFunc(
          document.documentElement.scrollTop,
          400,
          setScrollExperience,
          setBlockExperience,
          underHr(400, document.getElementById("underHrMoveRight"), true)
        );
        scrollFunc(
          document.documentElement.scrollTop,
          700,
          setScrollEducation,
          setBlockEducation,
          underHr(700, document.getElementById("underHrMoveLeft"), false)
        );
        scrollFunc(
          document.documentElement.scrollTop,
          900,
          setScrollProjects,
          setBlockProjects
        );
      });
    };
    dynamicScroll();
  }, []);
  // move blocks
  return (
    <Container fluid>
      <Row>
        <Col className="activeDivsTop" xs={12}>
          <MoveBlockRight
            display={blockExperience}
            scrollStyle={scrollExperience}
            id="experience"
          >
            <p>experience</p>
            <a
              href="https://www.linkedin.com/in/harisonlacey/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Linkedin logo" />
            </a>
          </MoveBlockRight>
          <hr id="underHrMoveRight" />
        </Col>
        <Col xs={12}>
          <MoveBlockLeft
            display={blockEducation}
            scrollStyle={scrollEducation}
            id="education"
          >
            <p>education</p>
            <a
              href="https://www.linkedin.com/in/harisonlacey/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Linkedin logo" />
            </a>
          </MoveBlockLeft>
          <hr id="underHrMoveLeft" />
        </Col>
        <Col className="activeDivsBottom" xs={12}>
          <MoveBlockRight
            display={blockProjects}
            scrollStyle={scrollProjects}
            id="projects"
          >
            <p>projects</p>
            <a
              href="https://github.com/HarisonLacey?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="Github logo" />
            </a>
          </MoveBlockRight>
        </Col>
      </Row>
    </Container>
  );
};

export default MoveBlock;
