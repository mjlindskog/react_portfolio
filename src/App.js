import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDown,
  faArrowRight,
  faDownload,
  faEnvelope,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

import ADAH from './img/ADAH.png';
import Scriber from './img/Scriber.png';
import Book from './img/book.png';
import Fitness from './img/fitness.png';
import NodeSQLZ from './img/node-sequelize.png';
import toochoozIcon from './img/pp.png';
import googlePlayBadge from './img/google-play-badge.png';
import resumePdf from './docs/current-resume.pdf';

import './App.css';

const projects = [
  {
    title: 'Scriber',
    description:
      'A voice-enabled writing app built with React, GraphQL, MongoDB, Redis, and the Web Speech API.',
    image: Scriber,
    tags: ['React', 'GraphQL', 'Node.js'],
    repository: 'https://github.com/mjlindskog/scriber',
    live: 'https://powerful-shore-38656.herokuapp.com/',
  },
  {
    title: 'A Drink Around Here',
    description:
      'A location-based brewery and event finder combining mapping, weather, brewery, and ticketing data.',
    image: ADAH,
    tags: ['JavaScript', 'Leaflet', 'APIs'],
    repository: 'https://github.com/mjlindskog/ADAH_Brewery_Search',
    live: 'https://mjlindskog.github.io/ADAH_Brewery_Search/',
  },
  {
    title: 'Book Search Engine',
    description:
      'A full-stack book discovery app with account authentication, saved searches, and Google Books data.',
    image: Book,
    tags: ['MERN', 'Apollo', 'JWT'],
    repository: 'https://github.com/mjlindskog/MERN.book_search_engine',
  },
  {
    title: 'Fitness Tracker',
    description:
      'A workout tracking application for recording routines and visualizing recent training activity.',
    image: Fitness,
    tags: ['Node.js', 'Express', 'MongoDB'],
    repository: 'https://github.com/mjlindskog/fitness_tracker',
  },
  {
    title: 'E-commerce API',
    description:
      'A REST API and relational data model for products, categories, and inventory management.',
    image: NodeSQLZ,
    tags: ['Node.js', 'MySQL', 'Sequelize'],
    repository: 'https://github.com/mjlindskog/ORM-_e-commerce',
  },
];

function Reveal({ children, className = '', delay = 0 }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ number, label, title, children }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">
        <span>{number}</span>
        {label}
      </p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </Reveal>
  );
}

function App() {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <div className="site-shell">
      <header className="hero">
        <div className="ambient ambient-one" aria-hidden="true" />
        <div className="ambient ambient-two" aria-hidden="true" />

        <div className="hero-links" aria-label="Social links">
          <a
            href="https://github.com/mjlindskog"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/mark-j-l/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <div className="hero-content">
          <p className="hero-kicker">Hello, I&apos;m</p>
          <h1>
            Mark J.
            <br />
            Lindskog
          </h1>
          <p className="hero-statement">
            I build thoughtful digital products for web, mobile, and the real
            world.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              See my work <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a className="text-link" href="mailto:lindskogmarkj@gmail.com">
              Let&apos;s talk
            </a>
          </div>
        </div>

        <a className="scroll-cue" href="#about" aria-label="Scroll to about">
          <span>Scroll to explore</span>
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </header>

      <main>
        <section className="section about-section" id="about">
          <div className="content-grid">
            <SectionHeading
              number="01"
              label="About"
              title="Technical thinking, practical experience."
            >
              A multidisciplinary developer with the curiosity to understand
              the whole system—not just the screen.
            </SectionHeading>

            <Reveal className="about-copy" delay={120}>
              <p>
                Full-Stack Developer focused on mobile platforms, secure cloud
                databases, and automated infrastructure. I thrive in
                fast-paced, high-autonomy environments that require deep
                technical analysis and physical execution.
              </p>
              <p>
                My background combines rigorous digital product development
                with real-world operational logistics, structural asset
                restoration, and complex spatial coordination. From setting up
                serverless cloud functions to optimizing real-world resource
                deployment, I bring an exceptional, hands-on work ethic and a
                dedicated project-focused mindset to engineering clean,
                efficient technology.
              </p>
            </Reveal>
          </div>

        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading
            number="02"
            label="Featured work"
            title="Helping couples choose together."
          >
            Toochooz turns the nightly “what should we eat?” question into a
            shared, swipeable decision.
          </SectionHeading>

          <Reveal className="toochooz-card" delay={100}>
            <div
              className="toochooz-visual"
              style={{ '--toochooz-logo': `url(${toochoozIcon})` }}
              role="img"
              aria-label="Toochooz app logo"
            >
              <span>Available now</span>
            </div>
            <div className="toochooz-content">
              <p className="resume-label">Mobile app + web platform</p>
              <h3>Toochooz</h3>
              <p>
                Couples pair up, swipe through nearby restaurants or their own
                uploaded recipes, and find a match for dinner—without the
                endless back-and-forth.
              </p>
              <p>
                The companion website supports restaurant submissions,
                customer contact, app downloads, and the platform&apos;s
                privacy policy and terms of service.
              </p>
              <a
                className="button button-dark"
                href="https://toochooz.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit Toochooz <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
              <div className="store-badges" aria-label="Download Toochooz">
                <a
                  href="https://apps.apple.com/us/app/toochooz/id6791775730?itscg=30200&itsct=apps_box_badge&mttnsubad=6791775730"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download Toochooz on the App Store"
                >
                  <img
                    src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1787961600"
                    alt="Download on the App Store"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.toochooz.android"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get Toochooz on Google Play"
                >
                  <img src={googlePlayBadge} alt="Get it on Google Play" />
                </a>
              </div>
            </div>
          </Reveal>

          <div
            className={`legacy-projects ${showArchive ? 'is-open' : ''}`}
          >
            <button
              className="legacy-trigger"
              type="button"
              aria-expanded={showArchive}
              aria-controls="project-archive"
              onClick={() => setShowArchive((isOpen) => !isOpen)}
            >
              <span>Project archive</span>
              Explore a few projects from the beginning of my full-stack
              development journey
              <FontAwesomeIcon icon={faArrowDown} />
            </button>

            <div className="project-archive" id="project-archive">
              <div className="project-grid">
                {projects.map((project, index) => (
                  <Reveal
                    className="project-card"
                    delay={(index % 2) * 120}
                    key={project.title}
                  >
                    <div className="project-image-wrap">
                      <img src={project.image} alt="" />
                      <span className="project-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="project-body">
                      <div className="project-title-row">
                        <h3>{project.title}</h3>
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </div>
                      <p>{project.description}</p>
                      <div className="project-meta">
                        <ul aria-label="Technologies used">
                          {project.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>
                        {project.live && (
                          <a
                            className="project-link"
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View project
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section resume-section" id="resume">
          <SectionHeading
            number="03"
            label="Resume"
            title="A focused snapshot."
          >
            View or download my current resume below.
          </SectionHeading>

          <Reveal className="resume-layout" delay={100}>
            <div className="resume-frame">
              <object
                data={`${resumePdf}#view=Fit&toolbar=0&navpanes=0&scrollbar=0`}
                type="application/pdf"
                aria-label="Mark Lindskog resume"
              >
                <p>
                  Your browser cannot display this PDF.{' '}
                  <a href={resumePdf}>Open the resume instead.</a>
                </p>
              </object>
            </div>
            <div className="resume-aside">
              <p className="resume-label">Current resume</p>
              <h3>Experience, tools, and the work behind the work.</h3>
              <p>
                Open the full document in a new tab or save a copy for later.
              </p>
              <a
                className="button button-primary"
                href={resumePdf}
                download="Mark-Lindskog-Resume.pdf"
              >
                Download PDF <FontAwesomeIcon icon={faDownload} />
              </a>
              <a
                className="text-link"
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
              >
                Open in new tab
              </a>
            </div>
          </Reveal>
        </section>

        <section className="section contact-section" id="contact">
          <Reveal>
            <p className="eyebrow">
              <span>04</span>
              Contact
            </p>
            <h2>Have something worth building?</h2>
            <a
              className="contact-email"
              href="mailto:lindskogmarkj@gmail.com"
            >
              lindskogmarkj@gmail.com
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Reveal>
        </section>
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} Mark Lindskog. Built with care and
          curiosity.
        </p>
        <div>
          <a
            href="https://github.com/mjlindskog"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mark-j-l/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="#top" onClick={() => window.scrollTo(0, 0)}>
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;