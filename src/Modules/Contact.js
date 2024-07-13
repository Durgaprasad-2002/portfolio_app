import React from "react";
import "./Contact.css";
import Navbar_ from "./Navbar";
import {
  BsLinkedin,
  BsGithub,
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <div className="container-fluid">
        <div id="Footer">
          <div className="row">
            <div className="col-md-6">
              <p className="copy">
                <b> My Social Info</b>
                <button className="back-btn" onClick={topFunction}>
                  Back to Top
                </button>
              </p>
            </div>
            <div className="col-md-6">
              <div className="digiAccounts">
                <a
                  href="https://www.linkedin.com/in/durgaprasadthota/"
                  target="new"
                >
                  {" "}
                  <BsLinkedin className="accs" style={{ color: "#0077B5" }} />
                </a>

                <a href="https://github.com/Durgaprasad-2002" target="new">
                  {" "}
                  <BsGithub className="accs" />
                </a>

                <a href="https://wa.me/9177943677?text=Hello" target="new">
                  {" "}
                  <BsWhatsapp
                    className="accs"
                    style={{ color: "lightgreen" }}
                  />
                </a>

                <a href="mailto:prasaddurga2031@gmail.com" target="new">
                  {" "}
                  <FiMail className="accs" style={{ color: "#d4d1d1" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
