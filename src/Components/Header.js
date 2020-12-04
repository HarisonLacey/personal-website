import { useEffect, useState } from "react";
import { HeaderCol } from "../Components/Styled";
import MenuIcon from "../Assets/list.png";
import Close from "../Assets/close.png";

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  useEffect(() => {
    // heading hr display
    const headingHrLoad = () => {
      switch (scrollHeader) {
        case false:
          document.getElementById("heading_hr").style.display = "block";
          break;
        case true:
          document.getElementById("heading_hr").style.display = "none";
          break;
        case "full":
          document.getElementById("heading_hr").style.display = "none";
          break;
        default:
          return null;
      }
    };
    headingHrLoad();
    const dynamicScroll = () => {
      window.addEventListener("scroll", function () {
        // close menu on scroll
        let menuButton = document.getElementsByClassName("list")[0];
        while (menuButton.firstChild) {
          menuButton.removeChild(menuButton.firstChild);
        }
        // scroll functions
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
      });
    };
    dynamicScroll();
    // dynamic menu item underline
    const menuItemsUnderline = () => {
      window.addEventListener("mouseover", function (e) {
        if (e.target.getAttribute("class") === "list-item") {
          if (e.target.nextSibling) {
            e.target.nextSibling.childNodes[1].style.width = "0";
          }
          if (e.target.previousSibling) {
            e.target.previousSibling.childNodes[1].style.width = "0";
          }
          let timerLength = 10;
          setInterval(() => {
            if (timerLength < 100) {
              e.target.childNodes[1].style.width = `${timerLength}%`;
              e.target.childNodes[1].style.opacity = "100%";
              timerLength += 10;
            }
          }, 50);
        }
      });
      window.addEventListener("mouseout", function (e) {
        let menuItems = [
          "about",
          "experience",
          "education",
          "projects",
          "daily qoute",
          "contact",
        ];
        if (e.target.getAttribute("class") === "list-item") {
          if (menuItems.includes(e.target.childNodes[0].nodeValue))
            e.target.childNodes[1].style.opacity = "0";
        }
      });
    };
    menuItemsUnderline();
  }, [scrollHeader]);
  // menu display
  const menu = () => {
    let menuItems = [
      "about",
      "experience",
      "education",
      "projects",
      "daily qoute",
      "contact",
    ];
    let menuButton = document.getElementsByClassName("list")[0];
    if (menuButton.childNodes.length === 0) {
      setScrollHeader("full");
      setInterval(() => {
        if (menuItems[0] !== undefined) {
          let listItem = document.createElement("li");
          let hr = document.createElement("hr");
          hr.style.width = "0";
          hr.style.borderTop = "5px solid aqua";
          listItem.className = "list-item";
          listItem.innerHTML = menuItems[0];
          listItem.onclick = function () {
            document.getElementById(this.innerText).scrollIntoView();
          };
          listItem.appendChild(hr);
          menuButton.appendChild(listItem);
          menuItems.shift();
        }
      }, 80);
    } else {
      document.documentElement.scrollTop < 10
        ? setScrollHeader(false)
        : setScrollHeader(true);
      while (menuButton.firstChild) {
        menuButton.removeChild(menuButton.firstChild);
      }
    }
  };
  // menu icon
  const menuIcon = () => {
    if (scrollHeader !== "full") {
      return (
        <img id="menuIcon" src={MenuIcon} alt="Menu icon" onClick={menu} />
      );
    } else {
      return <img id="closeIcon" src={Close} alt="Close icon" onClick={menu} />;
    }
  };
  // header
  return (
    <HeaderCol scrollStyle={scrollHeader} xs={12}>
      <h2>Harison Lacey</h2>
      <hr id="heading_hr" />
      {menuIcon()}
      <ul className="list"></ul>
    </HeaderCol>
  );
};

export default Header;
