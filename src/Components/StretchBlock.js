import { useEffect, useState } from "react";
import { StretchBlockRight, StretchBlockLeft } from "../Components/Styled";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StretchBlock = () => {
  const [scrollSkills, setScrollSkills] = useState(false);
  const [blockSkills, setBlockSkills] = useState(false);
  const [scrollHobbies, setScrollHobbies] = useState(false);
  const [blockHobbies, setBlockHobbies] = useState(false);
  const [scrollInterests, setScrollInterests] = useState(false);
  const [blockInterests, setBlockInterests] = useState(false);
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
          1600,
          setScrollSkills,
          setBlockSkills,
          underHr(1600, document.getElementById("underHrStretchRight"), false)
        );
        scrollFunc(
          document.documentElement.scrollTop,
          1900,
          setScrollHobbies,
          setBlockHobbies,
          underHr(1900, document.getElementById("underHrStretchLeft"), true)
        );
        scrollFunc(
          document.documentElement.scrollTop,
          2200,
          setScrollInterests,
          setBlockInterests
        );
      });
    };
    dynamicScroll();
  }, []);
  // stretch blocks
  return (
    <Container fluid>
      <Row>
        <Col className="activeDivsTop" xs={12}>
          <StretchBlockRight display={blockSkills} scrollStyle={scrollSkills}>
            <p>skills</p>
            <p>javascript | css | html | react </p>
          </StretchBlockRight>
          <hr id="underHrStretchRight" />
        </Col>
        <Col xs={12}>
          <StretchBlockLeft display={blockHobbies} scrollStyle={scrollHobbies}>
            <p>hobbies</p>
            <p>running | guitar | hiking | reading</p>
          </StretchBlockLeft>
          <hr id="underHrStretchLeft" />
        </Col>
        <Col className="activeDivsBottom" xs={12}>
          <StretchBlockRight
            display={blockInterests}
            scrollStyle={scrollInterests}
          >
            <p>interests</p>
            <p>history | music | design | tech</p>
          </StretchBlockRight>
        </Col>
      </Row>
    </Container>
  );
};

export default StretchBlock;
