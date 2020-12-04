import { useEffect, useState } from "react";
import { StretchBlockSingleLeft, LandingContainer } from "./Styled";
import Github from "../Assets/github.png";
import Linkedin from "../Assets/linkedin.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SingleStretchLeft = (props) => {
  const [scrollContact, setScrollContact] = useState(false);
  const [blockContact, setBlockContact] = useState(false);
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
        scrollFunc(
          document.documentElement.scrollTop,
          2500,
          setScrollContact,
          setBlockContact
        );
      });
    };
    dynamicScroll();
  }, []);
  const contentReturn = () => {
    if (!props.content) {
      return (
        <div>
          <p>{props.email}</p>
          <p>{props.phone}</p>
        </div>
      );
    } else {
      return (
        <LandingContainer>
          <Row>
            <Col xs={6}>
              <a
                href="https://www.linkedin.com/in/harisonlacey/"
                target="_blank"
                rel="noreferrer"
                className="image_one"
              >
                <img src={Linkedin} alt="Linkedin logo" />
              </a>
            </Col>
            <Col xs={6}>
              <a
                href="https://github.com/HarisonLacey?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="image_two"
              >
                <img src={Github} alt="Github logo" />
              </a>
            </Col>
          </Row>
        </LandingContainer>
      );
    }
  };
  // single left stretch block
  return (
    <StretchBlockSingleLeft display={blockContact} scrollStyle={scrollContact}>
      {contentReturn()}
    </StretchBlockSingleLeft>
  );
};

export default SingleStretchLeft;
