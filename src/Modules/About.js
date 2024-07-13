import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import Resume from "./Images/VeeraVenkataSaiDurgaPrasadThota_Resume.pdf";
import img from "./Images/20MH1A04C3.jpg";
import { useEffect } from "react";
import { MdDownload } from "react-icons/md";

const About = () => {
  const roles = ["MERN Stack Developer", "Programmer", "Designer"];
  useEffect(() => {
    function Animate() {
      const imgContainers = document.querySelectorAll(".skill-card");

      const observerOptions = {
        threshold: 0.1, // Adjust this threshold as needed
      };

      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1)";
            entry.target.style.opacity = "1";
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      imgContainers.forEach((container) => observer.observe(container));
    }

    Animate();
  }, []);

  return (
    <>
      <div className="about-container" id="about">
        <div className="about-row">
          <div className="profile-container">
            <Suspense fallback="Loading...">
              <div className="img-card">
                <div className="img-card-inner">
                  <img
                    id="profile-img"
                    src={img}
                    alt="Durga Prasad"
                    loading="lazy"
                  />
                </div>
              </div>
            </Suspense>
          </div>
          <div className="bio-container">
            <p>
              <b>
                Hi, I'm Durga Prasad, a MERN Stack Developer and Design
                enthusiast
              </b>
              <br />
              <br />
              I have been working as a web developer for the past year, focusing
              mainly on Web Technologies. I feel comfortable working with
              technologies like Java, JavaScript, React, Node.js, MongoDB,
              MySQL, and many others in the web ecosystem. I am passionate about
              programming, design, user interfaces, and open-source projects. As
              a fresher, I bring a fresh perspective and a strong commitment to
              continuous learning and improvement.
              <br />
              <a href={Resume} download="SaiDurgaPrasad_Resume.pdf">
                <button className="btn btn-secondary btn-md me-2">
                  Resume <MdDownload />{" "}
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/durgaprasadthota/"
                target="new"
              >
                <button className="btn btn-primary btn-md me-2">
                  LinkedIn
                </button>
              </a>
              <a href="https://github.com/Durgaprasad-2002" target="new">
                <button className="btn btn-light">GitHub</button>
              </a>
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <h2 className="section-title" id="section-head">
            Education
          </h2>

          <div className="row">
            <div className="col-md-4">
              <div className="edu-card">
                <h4>
                  B.Tech,{" "}
                  <span className="group">
                    Electronics and Communication Engineering
                  </span>
                </h4>
                {/* <h5>Electronics and Communication Engineering</h5> */}
                <h6>
                  2020 - 2024 <span>7.3 CGPA</span>
                </h6>
                <h6>Aditya College Of Engineering, Surampalem</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="edu-card">
                <h4>
                  Intermediate, <span className="group">M.P.C</span>
                </h4>
                {/* <h5>M.P.C</h5> */}
                <h6>
                  2018 - 2020 <span>9.5 CGPA</span>
                </h6>
                <h6>Aditya Junior College, Mandapeta</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="edu-card">
                <h4>Secondary School</h4>
                <h6>
                  2017 - 2018 <span>9.3 CGPA</span>
                </h6>
                <h6>C.A.M.P School, Ramachandrapuram</h6>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid" id="skill">
          <h2 className="section-title">Skills</h2>
          <div className="SkillCardItems">
            <div className="skill-card">
              <h4>Frontend Technologies</h4>
              <div className="skill-wrapper">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>Bootstrap</h5>
                <h5>ReactJs</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Databases</h4>
              <div className="skill-wrapper">
                <h5>MongoDB</h5>
                <h5>MySql</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Backend</h4>
              <div className="skill-wrapper">
                <h5>ExpressJs</h5>
                <h5>NodeJs</h5>
                <h5>Embedded JavaScript Template</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Programming Languages</h4>
              <div className="skill-wrapper">
                <h5>JavaScript</h5>
                <h5>Java</h5>
                <h5>C++</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Productivity Software</h4>
              <div className="skill-wrapper">
                <h5>Microsoft Office (Word, Excel, PowerPoint)</h5>
              </div>
            </div>
            <div className="skill-card">
              <h4>Tools & Utilities</h4>
              <div className="skill-wrapper">
                <h5>Git</h5>
                <h5>Postman</h5>
                <h5>Redux Toolkit</h5>

                <h5>Docker</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
