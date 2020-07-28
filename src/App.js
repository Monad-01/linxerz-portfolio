import React from "react";
import logo from "./logo.svg";
import "./App.css";
import githubImg from "./images/GitHub-Mark-64px.png";
import youtubeImg from "./images/icons8-play-button-50.png";
import emailImg from "./images/icons8-new-post-100.png";
import linkedInImg from "./images/icons8-linkedin-96.png";

function App() {
  return (
    <div>
      <header class="header">
        <div class="header-text-box">
          <div class="header-primary-box">
            <span class="header-primary-text">Johnathan</span>
            <br />
            <span class="header-middle-text">Pruitt</span>
            <br />
            <span class="header-bottom-text">•Software Developer•</span>
            <br />
          </div>
          <a href="#" class="btn header-btn">
            Connect
          </a>
        </div>
      </header>
      <div class="blank"></div>
      <div class="about">
        <div class="about-left-column">
          <div class="about-img"></div>
          <div class="about-left-column-textbox">
            <div class="about-left-column-textbox-subtext">
              "I will not die until I achieve something.
            </div>
            <div class="about-left-column-textbox-subtext">
              Even though the ideal is high, <br />I never give in.
            </div>
            <div class="about-left-column-textbox-subtext">
              Therefore, I never die with regrets."
            </div>
            <div class="about-left-column-textbox-subtext">-Ikaruga</div>
          </div>
        </div>
        <div class="about-right-column">
          <div class="about-right-column-textbox">
            <br />
            <h1>"Hello, World!"</h1>
            <text>My name is Johnathan Pruitt.</text>
            <br />
            <br />
            <div class="about-right-column-subtext">
              I am a passionate software developer that is always striving to
              push their own boundaries of programming and is currently trying
              to find their next adventure.
            </div>
            <br />
            <div class="about-right-column-subtext">
              Insert something about langauges here
            </div>
          </div>
        </div>
      </div>
      <div class="blank"></div>
      <div class="projects">
        <h1>Project Showcase</h1>
        <div class="projects-container">
          <div class="project project1">
            <img class="thumbnail1" />
            <div class="project-text">
              <h6>Good Samaritan</h6>
              <p>
                A real-time Q/A application where travelers are able to ask any
                question around the world, and only nearby local users are only
                able to answer their question
              </p>
              <div class="sources-block">
                <img class="youtube-icon" src={youtubeImg} />
                <h5>Youtube Demo</h5>{" "}
                <img class="github-icon-small" src={githubImg} />{" "}
                <h5>Github</h5>
              </div>
            </div>
          </div>
          <div class="project project2">
            <img class="thumbnail1" />
            <div class="project-text">
              <h6>Mars Weather App</h6>
              <p>
                A weather app where users are able to view the weather on Mars
                and Earth and see a comparison side-by-side.
                <br />
                <br />
                <br />
              </p>
              <div class="sources-block">
                <img class="youtube-icon" src={youtubeImg} />
                <h5>Youtube Demo</h5>{" "}
                <img class="github-icon-small" src={githubImg} />{" "}
                <h5>Github</h5>
              </div>
            </div>
          </div>
          <div class="project project3">
            <img class="thumbnail1" />
            <div class="project-text">
              <h6>Curated</h6>
              <p>
                A social media website inspired from Dribbble, where users are
                able to showcase their creative works and interact with others.
                <br />
                <br />
              </p>
              <div class="sources-block">
                <img class="youtube-icon" src={youtubeImg} />
                <h5>Youtube Demo</h5>{" "}
                <img class="github-icon-small" src={githubImg} />{" "}
                <h5>Github</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blank"></div>
      <div class="contact-page">
        <div class="contact-page-textbox">
          <div class="contact-page-textbox-main">
            <h1>Contact Me @:</h1>
            <br />
            <div class="contact-info">
              <p>
                <img class="github-icon" src={githubImg} /> Github
              </p>
            </div>
            <br />
            <div class="contact-info">
              <p>
                <img class="linkedin-icon" src={linkedInImg} /> LinkedIn
              </p>
            </div>
            <br />
            <div class="contact-info">
              <p>
                <img class="email-icon" src={emailImg} /> :
                pruittj1998@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
