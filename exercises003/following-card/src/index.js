import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import photo from "./images/aytekin.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun } from "react-icons/fa";

const navbar_elements = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Resume",
  "Contact",
];
const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node",
  "MongoDB",
  "Python",
  "Django",
  "Flask",
  "Java",
  "Spring Boot",
  "SQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Selenium",
  "Cypress",
  "Jira",
  "Trello",
  "Jenkins",
  "Docker",
];

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A high-performance e-commerce application developed using React and Node.js.",
  },
  {
    title: "Automated Testing Framework",
    description:
      "A comprehensive framework created with Selenium and Python, capable of testing various web applications.",
  },
  {
    title: "Student Tracking System",
    description:
      "A web application developed with Java and Spring Boot, monitoring and reporting student performance.",
  },
];

const TechList = () => {
  return (
    <ul className="tech-list">
      {techs.map((tech, index) => (
        <li key={index} className="tech-item">
          {tech}
        </li>
      ))}
    </ul>
  );
};

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <header>
          <h1>Aytekin Kaplan</h1>
          <p>
            Software Developer Engineer & Software Developer Engineer in Test
          </p>
        </header>

        <section>
          <h3>Professional Summary</h3>
          <p>
            A skilled professional with a background in Physics Education,
            leveraging strong analytical thinking and problem-solving abilities
            in software development and test engineering. Successfully
            transitioned from education to technology, demonstrating proficiency
            in both development and testing processes for complex software
            projects.
          </p>
        </section>

        <section>
          <h3>Education</h3>
          <p>
            <strong>Marmara University</strong>
            <br />
            Bachelor of Science in Physics Education
            <br />
            Graduation Year: [Year]
          </p>
        </section>

        <section>
          <h3>Work Experience</h3>
          <article>
            <h4>Software Developer Engineer & SDET</h4>
            <p>[Company Name] | [Start Date] - Present</p>
            <ul>
              <li>
                Develop full-stack web applications using React and Node.js
              </li>
              <li>
                Design and implement test automation strategies using Selenium
                and Cypress
              </li>
              <li>
                Set up and optimize CI/CD pipelines using Jenkins and Docker
              </li>
              <li>Improve code quality and test coverage metrics</li>
              <li>
                Apply and enhance Agile/Scrum methodologies in development
                processes
              </li>
            </ul>
          </article>
          <article>
            <h4>Physics Teacher</h4>
            <p>[School Name] | [Start Date] - [End Date]</p>
            <ul>
              <li>
                Instilled analytical thinking and problem-solving skills in
                students
              </li>
              <li>
                Simplified and effectively communicated complex physics concepts
              </li>
              <li>
                Developed strategies to assess and improve student performance
              </li>
            </ul>
          </article>
        </section>

        <section>
          <h3>Technical Skills</h3>
          <ul>
            <li>Programming Languages: JavaScript (ES6+), Python, Java</li>
            <li>Frontend: React, HTML5, CSS3, SASS</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Databases: MongoDB, PostgreSQL, MySQL</li>
            <li>Testing Tools: Selenium, Cypress, Jest, Mocha</li>
            <li>DevOps: Git, GitHub, Jenkins, Docker, AWS</li>
            <li>Project Management: Jira, Trello, Agile/Scrum methodologies</li>
          </ul>
        </section>

        <section>
          <h3>Certifications</h3>
          <ul>
            <li>AWS Certified Developer - Associate</li>
            <li>Certified Scrum Master</li>
            <li>Selenium WebDriver with TestNG</li>
          </ul>
        </section>

        <section>
          <h3>Language Skills</h3>
          <ul>
            <li>Turkish (Native)</li>
            <li>English (Advanced)</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            {navbar_elements.map((element, index) => (
              <li key={index} className="nav-item">
                <a href={`#${element.toLowerCase()}`} className="nav-link">
                  {element}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>
      <main className="main">
        <section id="home" className="hero">
          <img src={photo} className="photo" alt="Aytekin Kaplan" />
          <h1 className="name">Aytekin Kaplan</h1>
          <p className="tagline">Full Stack Developer</p>
          <div className="social-links">
            <a
              href="https://github.com/aytekinkaplan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/aytekinkaplan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/aytekinkaplan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </section>
        <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            I'm a passionate Full Stack Developer with expertise in various
            technologies. With a background in Physics Education, I bring strong
            analytical and problem-solving skills to software development and
            testing.
          </p>
        </section>
        <section id="skills" className="skills">
          <h2>My Skills</h2>
          <TechList />
        </section>
        <section id="projects" className="projects">
          <h2>My Projects</h2>
          <ProjectList />
        </section>
        <Resume />
        <section id="contact" className="contact">
          <h2>Contact Me</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="copyright">
          Copyright © {new Date().getFullYear()} Aytekin Kaplan. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
