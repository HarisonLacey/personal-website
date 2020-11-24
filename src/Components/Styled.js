import Styled, { createGlobalStyle } from "styled-components";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const GlobalStyle = createGlobalStyle`
body {
overflow-x: hidden;
}
`;
const HeaderCol = Styled(Col)`
height: ${(props) => {
  if (props.scrollStyle === "full") {
    return "50em";
  } else if (!props.scrollStyle) {
    return "10em";
  } else if (props.scrollStyle) {
    return "5em";
  }
}};
border-bottom: solid 2px aqua;
text-align: center;
padding: 0;
position: fixed;
top: 0;
transition: 1s;
background-color: white;
z-index: 1;
.list-item {
  cursor: pointer;
  list-style-type: none;
}
`;

const LandingContainer = Styled(Container).attrs((props) => ({
  width: props.width,
}))`
  width: ${(props) => props.width}
  `;

const FirstCol = Styled(Col)`
  padding: 0;
  .parallax {
    background-image: url("https://cdn.mos.cms.futurecdn.net/reaVPYbHtVWG8WHFPrgdvB.jpg");
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
      background-image: url("https://images.theconversation.com/files/223749/original/file-20180619-126537-5l632j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop");
    }
  `;

const ThirdCol = Styled(SecondCol)`
  .parallax {
    background-image: url("https://scx2.b-cdn.net/gfx/news/hires/2020/galaxy.jpg");
  }
  `;

const FourthCol = Styled(FirstCol)`
  .parallax {
    height: 10em;
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
  margin-left: ${(props) => (props.scrollStyle === false ? "50%" : "0")};
  opacity: ${(props) => (props.display === false ? "0" : "100%")};
  transition: 2s;
  padding: 3%;
  border-radius: 1em;
  p {
    text-decoration: underline aqua;
  }
  `;

const MoveBlockLeft = Styled(MoveBlockRight)`
  margin-left: ${(props) => (props.scrollStyle === false ? "0" : "30%")};
  `;

const StretchBlockRight = Styled(MoveBlockRight)`
  margin-left: 0;
  width: ${(props) => (props.scrollStyle === false ? "70%" : "100%")};
  `;

const StretchBlockLeft = Styled(StretchBlockRight)`
  margin-left: ${(props) => (props.scrollStyle === false ? "30%" : "0")};
  `;

const AboutCol = Styled(Col)`
  padding: 0;
  div {
    background-color: whitesmoke;
    height: 15em;
    padding: 3%;
    font-family: monospace;
    font-size: 1.2em;
    text-align: center;
    border-top: solid 2px black;
    border-bottom: solid 2px black;
  }
  `;

const BottomCol = Styled(Col)`
  height: ${(props) => (props.scrollStyle === false ? "5em" : "10em")};
  padding: 3%;
  transition: 1s;
  border-top: solid 2px gold;
  `;

export {
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
};
