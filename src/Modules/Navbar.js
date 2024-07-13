import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
function NAV() {
  const [toggle, settoggle] = useState(false);

  const HandleToggle = () => {
    settoggle((prevtoggle) => !prevtoggle);
  };

  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementsByClassName("Outer-Nav")[0].style.top = "0";
  //   } else {
  //     document.getElementsByClassName("Outer-Nav")[0].style.top = "-80px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // };

  // useEffect(() => {
  //   document.querySelectorAll("#env").forEach((element) => {
  //     element.addEventListener("click", function (e) {
  //       document
  //         .getElementsByClassName("navbar-toggler")[0]
  //         .classList.toggle("collapsed");
  //       document
  //         .getElementsByClassName("navbar-collapse")[0]
  //         .classList.toggle("show");
  //       settoggle(false);
  //     });
  //   });
  // });

  return (
    <div className="Outer-Nav">
      <Navbar id="nav" expand="md">
        <Container>
          <Navbar.Brand id="brand">
            <div id="d1"></div>
            <div id="d2"></div>
          </Navbar.Brand>

          <Navbar.Toggle
            onClick={HandleToggle}
            id="toggle"
            aria-controls="basic-navbar-nav"
          >
            <div className="outer">
              <div
                className="inner"
                style={{
                  rotate: `${toggle ? "45deg" : "0deg"}`,
                  marginTop: `${toggle ? "10px" : "0px"}`,
                }}
              ></div>
              <div
                className="inner"
                style={{
                  width: "17px",
                  height: "1.5px",
                  opacity: `${toggle ? "0" : "1"}`,
                  marginTop: "-0.5px",
                }}
              ></div>
              <div
                className="inner"
                style={{
                  rotate: `${toggle ? "-45deg" : "0deg"}`,
                  marginTop: `${toggle ? "-12px" : "0px"}`,
                }}
              ></div>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="env" href="#about">
                About
                <br />
                <span id="div"></span>
              </Nav.Link>

              <Nav.Link id="env" href="#pro">
                Projects
                <br />
                <span id="div"></span>
              </Nav.Link>

              <Nav.Link id="env" href="#code">
                coding profiles
                <br />
                <span id="div"></span>
              </Nav.Link>

              <Nav.Link id="env" href="#skill">
                Skills
                <br />
                <span id="div"></span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NAV;
