import React from "react";
import "./Coding.css";
import Leetcode from "./Images/leetcode.png";
import gfg from "./Images/gfg.png";
import github from "./Images/github.png";
import hacker from "./Images/hacker.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Navbar_ from "./Navbar";

export default function Coding() {
  return (
    <>
      {/* <Navbar_ /> */}
      <div
        id="code"
        style={{ marginTop: "50px", color: "white", background: "#14131a" }}
      >
        <div className="Prow1">
          <h2>Coding Profiles</h2>
          <p>
            you can see the metrics of my Leetcode, GeeksForGeeks, Github
            account and a few other platform stats, where I share my projects,
            knowledge and practice.
          </p>
        </div>
        <div className="content-box">
          <div className="stat-card">
            <a href="https://leetcode.com/20MH1A04C3/" target="new">
              <div className="stat-box">
                <img
                  className="stat-logo"
                  src={Leetcode}
                  style={{ marginTop: "-7px" }}
                />
                <h5 className="stat-title">Leetcode</h5>
                <span className="link">
                  <a href="https://leetcode.com/20MH1A04C3/" target="new">
                    <BsBoxArrowUpRight />
                  </a>
                </span>
              </div>
            </a>
          </div>

          <div className="stat-card">
            <a href="https://github.com/Durgaprasad-2002/" target="new">
              <div className="stat-box">
                <img
                  className="stat-logo"
                  src={github}
                  style={{ marginTop: "-10px" }}
                />
                <h5 className="stat-title">Github</h5>
                <span className="link">
                  <a href="https://github.com/Durgaprasad-2002/" target="new">
                    <BsBoxArrowUpRight />
                  </a>
                </span>
              </div>
            </a>
          </div>

          <div className="stat-card">
            <a
              href="https://auth.geeksforgeeks.org/user/prasaddurga2031"
              target="new"
            >
              <div className="stat-box">
                <img
                  className="stat-logo"
                  src={gfg}
                  style={{ marginTop: "-8px" }}
                />
                <h5 className="stat-title">GeeksForGeeks</h5>
                <span className="link">
                  <a
                    href="https://auth.geeksforgeeks.org/user/prasaddurga2031"
                    target="new"
                  >
                    <BsBoxArrowUpRight />
                  </a>
                </span>
              </div>
            </a>
          </div>
          <div className="stat-card">
            <a href="https://www.hackerrank.com/prasaddurga2031" target="new">
              <div className="stat-box">
                <img
                  className="stat-logo"
                  src={hacker}
                  style={{ marginTop: "-10px" }}
                />
                <h5 className="stat-title">HackerRank</h5>
                <span className="link">
                  <a
                    href="https://www.hackerrank.com/prasaddurga2031"
                    target="new"
                  >
                    <BsBoxArrowUpRight />
                  </a>
                </span>
              </div>
            </a>
          </div>
        </div>
        {/* <div className="Accounts">
          <div className="acc">
            <div className="info">
              <h4 id="title">Leetcode</h4>
              <p id="content"></p>
            </div>
            <a id="stat">
              <img id="leet" src={Leetcode} />
              <span id="link">
                <a href="https://leetcode.com/20MH1A04C3/" target="new">
                  <BsBoxArrowUpRight />
                </a>
              </span>
            </a>
          </div>

          <div className="acc">
            <div className="info">
              <h4 id="title">GeeksForGeeks</h4>
              <p id="content"></p>
            </div>
            <a id="stat">
              <img id="leet" src={gfg} />
              <span id="link">
                <a
                  href="https://auth.geeksforgeeks.org/user/prasaddurga2031"
                  target="new"
                >
                  <BsBoxArrowUpRight />
                </a>
              </span>
            </a>
          </div>

          <div className="acc">
            <div className="info">
              <h4 id="title">Github</h4>
              <p id="content"></p>
            </div>
            <a id="stat">
              <img id="leet" src={github} />
              <span id="link">
                <a href="https://github.com/Durgaprasad-2002/" target="new">
                  <BsBoxArrowUpRight />
                </a>
              </span>
            </a>
          </div>

          <div className="acc">
            <div className="info">
              <h4 id="title">HackerRank</h4>
              <p id="content"></p>
            </div>
            <a id="stat">
              <img id="leet" src={hacker} />
              <span id="link">
                <a
                  href="https://www.hackerrank.com/prasaddurga2031"
                  target="new"
                >
                  <BsBoxArrowUpRight />
                </a>
              </span>
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
}
