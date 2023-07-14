import React, { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import wave from "../emojis/wave.png";
import technologist from "../emojis/technologist.png";
import pointRight from "../emojis/pointright.png";
import heartHands from "../emojis/heart-hands (2).png";
import bmi from "../imges/bmi.png";
import tesla from "../imges/tesla.png";
import pizza from "../imges/pizza.png";
import post from "../imges/post.png";
import student from "../imges/student.png";
import todo from "../imges/todo.png";
import typer from "../imges/typer.png";
import weather from "../imges/weather.png";
import crypto from "../imges/crypto.png";
import wp from "../imges/wp.png";
import top from "../emojis/pointing-up.png";
import "../styles.css";
import Projects from "./Projects";
export default function Mainpart() {
  const email = "tuhsar2022@gmail.com";
  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = [
    "नमस्ते!", // Hindi
    "Hello!", // English
    "Hola!", // Spanish
    "Bonjour!", // French
    "Ciao!", // Italian
    "Guten Tag!", // German
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleScroll = () => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  };

  return (
    <div className="intro">
      <div className="hello">
        <h1>
          <span>{languages[languageIndex]}</span>
          <span>
            <img src={wave} alt="Wave" />
          </span>
        </h1>
      </div>

      <br />
      <div className="bio">
        <p>
          <span>
            I'm <strong>Tushar Verma</strong>, a design-minded front-end
            developer focused on building beautiful interfaces and experiences.
          </span>
        </p>
        <img src={technologist} alt="Technologist" />
      </div>
      <div className="touch">
        <p>
          <span>Get in touch</span>
          <span>
            <img src={pointRight} alt="Point Right" />
          </span>
          <strong>
            <a href={`mailto:${email}`}>{email}</a>
          </strong>
        </p>
      </div>

      <div className="background">
        <h2>BACKGROUND</h2>
        <div className="about">
          <p>
            As a recent graduate with a Bachelor's degree in Computer Science, I
            am excited to bring my technical skills and passion for
            problem-solving to a dynamic and forward-thinking company.
          </p>
          <p>
            During my studies, I gained a strong foundation in computer science
            concepts, including data structures, algorithms, and software
            development. I also worked on several personal projects, where I
            applied my skills to develop useful and innovative projects.
          </p>
          <p>
            I am a detail-oriented and proactive individual with excellent
            communication skills. I thrive in fast-paced environments and enjoy
            the challenge of tackling complex problems. In my spare time, I
            enjoy staying up-to-date with the latest technology trends and
            exploring new programming languages.
          </p>
          <p>
            I am confident that my passion for technology and my drive to learn
            and grow will make me a valuable asset to any team. I am eager to
            begin my career and make a positive impact as a member of a talented
            and innovative team.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2>SKILLS</h2>
        <div className="languages">
          <ul className="bullet-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Git</li>
            <li>AWS</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
      <div className="resume">
        <a
          href="https://drive.google.com/file/d/1Gj2cytJVJihutCc92eA_tXqCR7LBC_qc/view?usp=drive_link"
          style={{ color: "white" }}
          target="blank"
        >
          View My Resume
        </a>
      </div>
      <div className="projects">
        <h2>Featured Projects</h2>
        {/* <p className="instruction" >
          Open projects on clicking the any desired image and to close the
          project click on the navigation icons{" "}
        </p> */}
        <div className="samples">
          <div className="project-grid">
            <div className="project">
              <Projects
                imageSrc={typer}
                iframeSrc="https://super-typer.netlify.app/"
              />
              <p>Typing Speed Test Using React</p>
            </div>
            <div className="project">
              <Projects
                imageSrc={crypto}
                iframeSrc="https://merry-bubblegum-919802.netlify.app/"
              />
              <p>Crypto Currency Price Tracker Using React</p>
            </div>
            <div className="project">
              <Projects
                imageSrc={tesla}
                iframeSrc="https://tesla-clone-main.netlify.app/"
              />
              <p>Tesla Home Page Clone Using React</p>
            </div>
            <div className="project">
              <Projects
                imageSrc={post}
                iframeSrc="https://1tushr.github.io/postOfficeLocator"
              />
              <p>Post Office Locator Using Ip Address Data Fetched From API</p>
            </div>
            <div className="project">
              <Projects
                imageSrc={student}
                iframeSrc="https://1tushr.github.io/StudentManagement/"
              />
              <p>Student Management CRUD App Using JS</p>
            </div>
            <div className="project">
              <Projects
                imageSrc={todo}
                iframeSrc="https://1tushr.github.io/todo"
              />
              <p>Todo App Using JS</p>
            </div>
            <div className="project">
              <Projects
                imageSrc={weather}
                iframeSrc="https://1tushr.github.io/weather/"
                allow="geolocation"
              />
              <p>
                Weather Checker Using Current Location Data Fetched From API
              </p>
            </div>
            <div className="project">
              <Projects
                imageSrc={bmi}
                iframeSrc="https://1tushr.github.io/bmi/"
              />
              <p>BMI Calculator</p>
            </div>
            <div className="project">
              <Projects
                imageSrc={pizza}
                iframeSrc="https://1tushr.github.io/Pizza-Restaurant/"
              />
              <p>Pizza Restaurant Landing Page</p>
            </div>
            <div className="project">
              <Projects
                imageSrc={wp}
                iframeSrc="https://1tushr.github.io/wp-clone/"
                title="WhatsApp clone"
              />
              <p>WhatsApp Landing Page Clone </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <span>
            <p>coded with</p>
          </span>
          <span>
            <img src={heartHands} alt="Heart Hands" />
          </span>
          <span>
            <p>by tushar</p>
          </span>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/1tushr" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:tuhsar2022@gmail.com" target="_blank">
            Email
          </a>
          <a href="https://github.com/1tushr" target="_blank">
            Github
          </a>
          <img
            src={top}
            onClick={handleScroll}
            style={{ width: "2rem", margin: "1rem" }}
          ></img>
        </div>
      </footer>
    </div>
  );
}

// "@material-ui/core": "^4.12.4",
// "@mui/material": "^5.13.7",
// "@mui/styled-engine-sc": "^5.12.0",
