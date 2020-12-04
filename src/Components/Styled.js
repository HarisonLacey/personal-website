import Styled, { createGlobalStyle } from "styled-components/macro";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { deviceSizes } from "../Components/Devices";

// styled components 

const GlobalStyle = createGlobalStyle`
body {
  overflow-x: hidden;
}
@media only screen and (min-width: ${deviceSizes.md}px) {
  body {
    margin: 0 10%;
  }
  @media only screen and (min-width: ${deviceSizes.xl}px) {
    body {
    margin: 0 20%;
    }
  }
}
`;
const HeaderCol = Styled(Col)`
height: ${(props) => {
  if (props.scrollStyle === "full") {
    return "50em";
  } else if (!props.scrollStyle) {
    return "10em";
  } else if (props.scrollStyle) {
    return "3em";
  }
}};
opacity: ${(props) => {
  if (props.scrollStyle === "full") {
    return "80%";
  } else if (!props.scrollStyle) {
    return "100%";
  } else if (props.scrollStyle) {
    return "100%";
  }
}};
border-bottom: solid 2px aqua;
text-align: center;
padding: 0;
position: fixed;
top: 0;
@media only screen and (min-width: ${deviceSizes.md}px) {
  width: 80%
}
@media only screen and (min-width: ${deviceSizes.xl}px) {
  width: 60%
}
transition: 1s;
background-color: white;
z-index: 1;
ul {
 margin-right: 8.5%;
}
@media only screen and (min-width: ${deviceSizes.xs}px) {
  ul {
    margin-right: 7%;
  }
}
@media only screen and (min-width: ${deviceSizes.lg}px) {
  ul {
    margin-right: 5%;
  }
}
@media only screen and (min-width: ${deviceSizes.xl}px) {
  ul {
    margin-right: 5%;
  }
}
@media only screen and (min-width: 1436px) {
  ul {
    margin-right: 4%;
  }
}
.list-item {
  cursor: pointer;
  list-style-type: none;
  font-family: monospace;
  font-size: 1.5em;
}
h2 {
  display: ${(props) => {
    if (props.scrollStyle === "full") {
      return "none";
    } else if (!props.scrollStyle) {
      return "block";
    } else if (props.scrollStyle) {
      return "none";
    }
  }};
  font-family: monospace;
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 2%;
  transition: 1s;
}
p {
  font-family: monospace;
  font-size: 1.3em;
}
img {
  cursor: pointer;
}
#menuIcon {
  margin: 1%;
}
#closeIcon {
  margin: 2% 0 4%;
}
`;

const LandingContainer = Styled(Container).attrs((props) => ({
  width: props.width,
}))`
  width: ${(props) => props.width};
  .activeDivsTop {
  border-top: solid 2px aqua;
  }
  .activeDivsBottom {
    border-bottom: solid 2px aqua;
  }
  #underHrMoveRight, #underHrStretchLeft {
    border: solid 2px lightgrey;
    transition 2s;
    opacity: 0;
    margin-right: 50%;
        }
  #underHrMoveLeft, #underHrStretchRight {
    border: solid 2px lightgrey;
    transition 2s;
    opacity: 0;
    margin-left: 50%;
   }
  `;

const FirstCol = Styled(Col)`
  padding: 0;
  .parallax {
    background-image: url("https://res.cloudinary.com/dyexps6g2/image/upload/v1606909624/galaxy_e53ejj.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30em;
  }
  `;
const SecondCol = Styled(FirstCol)`
    .parallax {
      height: 10em;
    }
  `;

const LastCol = Styled(FirstCol)`
  .parallax {
    height: 15em;
  }
  `;

const MoveBlockRight = Styled.div`
  margin: 5% 0 5%;
  border: solid 1px grey;
  box-shadow: 5px 10px lightgrey;
  background-color: whitesmoke;
  font-family: 'Space Mono', monospace;
  height: 10em;
  width: 70%;
  margin-left: ${(props) => (!props.scrollStyle ? "50%" : "0")};
  opacity: ${(props) => (!props.display ? "0" : "100%")};
  transition: 2s;
  padding: 3%;
  border-radius: 1em;
  p {
    text-decoration: underline aqua;
  }
  @keyframes iconHover {
    0% {width: 64px};
    50% {width: 68px};
    100% {width: 64px};
  }
  img {
    margin-left: 40%;
  }
  img:hover {
    animation-name: iconHover;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    cursor: pointer;
  }
  @media only screen and (min-width: ${deviceSizes.sm}px) {
    width: 55%
  }
  @media only screen and (min-width: ${deviceSizes.xl}px) {
    width: 50%;
  }
  `;

const MoveBlockLeft = Styled(MoveBlockRight)`
  margin-left: ${(props) => (!props.scrollStyle ? "0" : "30%")};
  @media only screen and (min-width: ${deviceSizes.sm}px) {
    margin-left: ${(props) => (!props.scrollStyle ? "0" : "45%")};
  }
  @media only screen and (min-width: ${deviceSizes.md}px) {
    margin-left: ${(props) => (!props.scrollStyle ? "0" : "45%")};
  }
  @media only screen and (min-width: ${deviceSizes.xl}px) {
    margin-left: ${(props) => (!props.scrollStyle ? "0" : "50%")};
  }
  `;

const StretchBlockRight = Styled(MoveBlockRight)`
  margin-left: 0;
  width: ${(props) => (!props.scrollStyle ? "70%" : "100%")};
  p:last-child {
    text-decoration: none;
  }
  `;

const StretchBlockLeft = Styled(StretchBlockRight)`
  margin-left: ${(props) => (!props.scrollStyle ? "30%" : "0")};
  `;

const StretchBlockSingleRight = Styled(StretchBlockRight)`
text-decoration: underline aqua;
@media only screen and (max-width: ${deviceSizes.sm}px) {
  p {
    font-size: 0.9rem;
    }
 }
`;
const StretchBlockSingleLeft = Styled(StretchBlockLeft)`
img {
  margin: 0;
}
.image_one {
  margin-left: 50%;
}
.image_two {
  margin-left: 3%;
}
@media only screen and (max-width: ${deviceSizes.sm}px) {
  .image_one {
    margin-left: 5%;
  }
  .image_two {
    margin-left: 3%;
  }
  
 }
 @media only screen and (min-width: 1436px) {
  .image_one {
    margin-left: 66%;
  }
}
`;

const AboutCol = Styled(Col)`
  padding: 0;
  div {
    background-color: white;
    padding: 3%;
    font-family: monospace;
    font-size: 1.2em;
    text-align: center;
    border-top: solid 2px aqua;
    border-bottom: solid 2px aqua;
    height: 167.56px;
  }
  @media only screen and (max-width: 518px) {
    #heart {
      position: relative;
      bottom: 0.5em
    }
  }
  `;

const BottomCol = Styled(Col)`
  height: 15em;
  padding: 3%;
  transition: 1s;
  border-top: solid 2px aqua;
  `;

const LastHr = Styled(Col)`
  padding-bottom: 5%;
  `;

export {
  GlobalStyle,
  HeaderCol,
  LandingContainer,
  FirstCol,
  SecondCol,
  LastCol,
  MoveBlockRight,
  MoveBlockLeft,
  StretchBlockRight,
  StretchBlockLeft,
  StretchBlockSingleRight,
  StretchBlockSingleLeft,
  AboutCol,
  BottomCol,
  LastHr,
};
