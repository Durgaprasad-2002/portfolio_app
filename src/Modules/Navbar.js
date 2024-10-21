import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
function NAV() {
  const [toggle, settoggle] = useState(false);

  const HandleToggle = () => {
    settoggle((prevtoggle) => !prevtoggle);
  };

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
                  width: "21px",
                  height: "1.5px",
                  opacity: `${toggle ? "0" : "1"}`,
                  marginTop: "-0.5px",
                }}
              ></div>
              <div
                className="inner"
                style={{
                  width: `${toggle ? "30px" : "12px"}`,
                  rotate: `${toggle ? "-45deg" : "0deg"}`,
                  marginTop: `${toggle ? "-13px" : "0px"}`,
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

              <Nav.Link id="env" href="#projects">
                Projects
                <br />
                <span id="div"></span>
              </Nav.Link>

              <Nav.Link id="env" href="#coding-profiles">
                coding profiles
                <br />
                <span id="div"></span>
              </Nav.Link>

              <Nav.Link id="env" href="#skills">
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
