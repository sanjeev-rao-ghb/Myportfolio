
import React, { useState } from "react";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const skills = {
  Backend: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "Hibernate",
    "JDBC",
    "REST API",
    "JWT",
    "Maven",
  ],

  Frontend: [
    "React.js",
    "JavaScript ES6+",
    "HTML5",
    "CSS3",
    "Bootstrap 5",
    "Responsive Design",
  ],

  Database: [
    "MySQL",
    "SQL",
    "DDL / DML",
    "Joins",
    "Subqueries",
    "Stored Procedures",
    "Indexing",
  ],

  Tools: [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "Eclipse",
    "OOP",
    "MVC",
    "RBAC",
    "Agile / Scrum",
  ],
};

const highlights = [
  {
    icon: <Server size={22} />,
    title: "Full Stack Development",
    text: "Spring Boot backend APIs connected with a responsive React.js frontend.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Secure APIs",
    text: "JWT authentication and role-based access control for protected application flows.",
  },
  {
    icon: <Database size={22} />,
    title: "Database Design",
    text: "Normalized MySQL schema design with relationships and referential integrity.",
  },
];

function App() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="container nav-inner">

          <button
            className="logo"
            onClick={() => go("home")}
            aria-label="Go to home"
          >
            Sanjeev Rao<span>.</span>
          </button>

          <nav className={open ? "nav-links open" : "nav-links"}>

            {[
              "about",
              "skills",
              "projects",
              "education",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => go(item)}
              >
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}

            

            <a
              className="nav-cta"
              href="mailto:raosanjeev141@gmail.com"
            >
              Let's Talk
            </a>

          </nav>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </header>


      {/* ================= MAIN ================= */}

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero">

          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="container hero-grid">

            <div className="hero-copy">

              <div className="eyebrow">
                <Sparkles size={15} />
                Java Full Stack Developer
              </div>

              <h1>
                Building secure, scalable{" "}
                <span>web applications.</span>
              </h1>

              <p className="hero-text">
                MCA graduate with hands-on experience building
                production-ready applications using Java, Spring Boot,
                React.js and MySQL.
              </p>

              <div className="hero-actions">

                <button
                  className="primary-btn"
                  onClick={() => go("projects")}
                >
                  View My Work
                  <ArrowUpRight size={18} />
                </button>

                <a
                  className="secondary-btn"
                  href="/resume.pdf"
                  download="Sanjeev_Rao_Resume.pdf"
                >
                  <Download size={18} />
                  Download Resume
                </a>

              </div>

              <div className="quick-stats">

                <div>
                  <strong>4+</strong>
                  <span>Months project delivery</span>
                </div>

                <div>
                  <strong>8+</strong>
                  <span>REST API endpoints tested</span>
                </div>

                <div>
                  <strong>5</strong>
                  <span>Core marketplace tables</span>
                </div>

              </div>

            </div>


            <div className="hero-photo-wrap">

              <div className="photo-card">

                <div className="photo-ring" />

                <img
                  src="/profile.jpg"
                  alt="Sanjeev Rao"
                  className="profile-photo"
                />

              </div>

              <div className="floating-card">

                <Code2 size={19} />

                <div>
                  <strong>Java + React</strong>
                  <small>Full Stack</small>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section id="about" className="section">

          <div className="container">

            <div className="section-heading">

              <p className="section-kicker">
                ABOUT ME
              </p>

              <h2>
                Turning ideas into reliable software.
              </h2>

            </div>

            <div className="about-grid">

              <div className="about-text">

                <p>
                  I am{" "}
                  <strong> Baitakpatil Sanjeev Rao</strong>,
                  an MCA graduate based in Hyderabad, focused on
                  Java and full-stack software development.
                </p>

                <p>
                  I enjoy designing clean backend architectures,
                  building REST APIs, working with relational
                  databases, and connecting them to responsive
                  React applications.
                </p>

                <p>
                  My main project, SmartDownload, is a secure
                  digital marketplace built end-to-end with
                  Spring Boot, React.js, MySQL, JWT authentication
                  and Razorpay.
                </p>

                <div className="contact-mini">

                  <span>
                    <MapPin size={17} />
                    Hyderabad, India
                  </span>

                  <a href="tel:+919703218696">
                    <Phone size={17} />
                    +91 9703218696
                  </a>

                  <a href="mailto:raosanjeev141@gmail.com">
                    <Mail size={17} />
                    raosanjeev141@gmail.com
                  </a>

                </div>

              </div>


              <div className="highlight-grid">

                {highlights.map((item) => (
                  <article
                    className="highlight-card"
                    key={item.title}
                  >

                    <div className="icon-box">
                      {item.icon}
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                  </article>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section dark-section"
        >

          <div className="container">

            <div className="section-heading">

              <p className="section-kicker">
                TECHNICAL SKILLS
              </p>

              <h2>
                Tools I use to build products.
              </h2>

            </div>

            <div className="skills-grid">

              {Object.entries(skills).map(
                ([group, items]) => (

                  <article
                    className="skill-card"
                    key={group}
                  >

                    <div className="skill-title">

                      {group === "Backend" && (
                        <Server size={20} />
                      )}

                      {group === "Frontend" && (
                        <Code2 size={20} />
                      )}

                      {group === "Database" && (
                        <Database size={20} />
                      )}

                      {group === "Tools" && (
                        <BriefcaseBusiness size={20} />
                      )}

                      <h3>{group}</h3>

                    </div>

                    <div className="tags">

                      {items.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section">

          <div className="container">

            <div className="section-heading">

              <p className="section-kicker">
                FEATURED PROJECT
              </p>

              <h2>SmartDownload</h2>

              <p className="heading-description">
                Secure digital product selling platform •
                Jan 2025 – Apr 2025
              </p>

            </div>

            <article className="project-card">

              <div className="project-top">

                <div>

                  <span className="project-label">
                    FULL STACK APPLICATION
                  </span>

                  <h3>
                    SmartDownload — Secure Digital Product
                    Selling Platform
                  </h3>

                </div>

                <div className="project-icon">
                  <Download size={28} />
                </div>

              </div>

              <p className="project-description">
                A full-stack digital marketplace with a layered
                MVC backend, JWT-based authentication, RBAC,
                Razorpay payments, secure fulfilment and a
                responsive React UI.
              </p>

              <div className="project-features">

                <div>
                  <ShieldCheck size={18} />
                  <span>JWT + RBAC security</span>
                </div>

                <div>
                  <Database size={18} />
                  <span>
                    5-table normalized MySQL schema
                  </span>
                </div>

                <div>
                  <Code2 size={18} />
                  <span>
                    8+ REST APIs tested with Postman
                  </span>
                </div>

                <div>
                  <Sparkles size={18} />
                  <span>
                    Razorpay payment integration
                  </span>
                </div>

              </div>

              <div className="project-stack">

                {[
                  "Spring Boot",
                  "React.js",
                  "MySQL",
                  "JWT",
                  "Razorpay API",
                  "REST API",
                  "Maven",
                  "Git",
                ].map((x) => (
                  <span key={x}>{x}</span>
                ))}

              </div>

              <a
                className="project-link"
                href="https://github.com/sanjeev-rao-ghb/SmartDownload"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
                <ArrowUpRight size={18} />
              </a>

            </article>

          </div>

        </section>


        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="section education-section"
        >

          <div className="container">

            <div className="section-heading">

              <p className="section-kicker">
                EDUCATION & CERTIFICATIONS
              </p>

              <h2>
                Learning with a practical mindset.
              </h2>

            </div>

            <div className="timeline">

              <article className="timeline-item">

                <div className="timeline-icon">
                  <GraduationCap />
                </div>

                <div>

                  <span className="date">
                    2023 – 2025
                  </span>

                  <h3>
                    Master of Computer Applications (MCA)
                  </h3>

                  <p>
                    Omega PG College, Hyderabad
                  </p>

                  <span className="badge">
                    CGPA: 7.20 / 10
                  </span>

                </div>

              </article>


              <article className="timeline-item">

                <div className="timeline-icon">
                  <Sparkles />
                </div>

                <div>

                  <span className="date">
                    CERTIFICATIONS
                  </span>

                  <h3>
                    Professional Learning
                  </h3>

                  <p>
                    HackerRank Java Badge • HackerRank SQL
                    (Intermediate) • Git & GitHub Fundamentals
                  </p>

                  <p>
                    Spring Boot — Udemy (in progress)
                  </p>

                </div>

              </article>


              <article className="timeline-item">

                <div className="timeline-icon">
                  <Code2 />
                </div>

                <div>

                  <span className="date">
                    ACADEMIC ACHIEVEMENT
                  </span>

                  <h3>
                    Mathematics — 75 / 75
                  </h3>

                  <p>
                    Perfect score at Intermediate level.
                  </p>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="container contact-box">

            <div>

              <p className="section-kicker">
                GET IN TOUCH
              </p>

              <h2>
                Let's build something useful.
              </h2>

              <p>
                I'm actively seeking Java / Full-Stack
                Software Engineer opportunities.
              </p>

            </div>

            <div className="contact-actions">

              <a
                href="mailto:raosanjeev141@gmail.com"
                className="primary-btn"
              >
                <Mail size={18} />
                Email Me
              </a>

              <a
                href="https://github.com/sanjeev-rao-ghb"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <Github size={19} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sanjeev-rao-9b15b531b/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <Linkedin size={19} />
                LinkedIn
              </a>

             

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="container footer-inner">

          <span>
            © {new Date().getFullYear()} Sanjeev Rao Baitakpatil
          </span>

          <span>
            Java • Spring Boot • React • MySQL
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;