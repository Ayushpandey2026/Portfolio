import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const emailAddress = import.meta.env.VITE_EMAIL;

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMoon,
  FaSun,
  FaExternalLinkAlt,
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGit,
  FaLock,
  FaGraduationCap,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiNetlify,
  SiVercel,
  SiPostman,
} from "react-icons/si";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            move: { direction: "bottom", speed: 1 },
            opacity: { value: 0.5 },
          },
        }}
      />

      {/* Header */}
      <div className="flex justify-between items-center p-6 relative z-20">
        <a
      href="https://drive.google.com/uc?export=download&id=1xSxeIle_FEPNQ7VBFwyz4Fi6xD2y_sKp"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded text-white hover:scale-105 transition"
        >
          Download Resume
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* HERO */}
   <motion.section
  className="relative z-10 min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Social icons in corner */}
  <div className="absolute top-8 right-8 flex flex-col gap-4">
    <a
      href={`mailto:${emailAddress}`}
      className="text-2xl hover:scale-110 transition"
    >
      <FaEnvelope />
    </a>
    <a
      href="https://www.linkedin.com/in/ayushp2007/"
      target="_blank"
      rel="noreferrer"
      className="text-2xl hover:scale-110 transition"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/Ayushpandey2026"
      target="_blank"
      rel="noreferrer"
      className="text-2xl hover:scale-110 transition"
    >
      <FaGithub />
    </a>
  </div>

  {/* Left: Photo */}
  <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-indigo-500 mb-6 md:mb-0 md:mr-12">
    <img
      src={import.meta.env.VITE_PHOTO_PATH}
      alt="Ayush Pandey"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right: About + Dynamic */}
  <div className="max-w-xl">
    <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
      Ayush Pandey
    </h1>
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
      <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Full Stack Developer
      </span>
    </h2>
    <p className="text-lg sm:text-xl mb-6 max-w-xl">
      <Typewriter
        words={[
          "I build fast, modern & responsive web apps.",
          "React | JavaScript | Node.js",
          "350+ DSA on LeetCode",
        ]}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </p>
    <p className="mb-6 text-gray-300">
      I’m Ayush — a passionate Full Stack Developer who builds stunning, responsive, and scalable web apps using modern frameworks like React, Next.js, and Node.js.
From pixel-perfect UI to efficient backend logic, I aim for clean code and great user experience.
    </p>
    <div className="flex gap-4">
      <a
        href="https://drive.google.com/uc?export=download&id=1xSxeIle_FEPNQ7VBFwyz4Fi6xD2y_sKp"
        download
        className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded text-white hover:scale-105 transition"
      >
        Download Resume
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-500 hover:text-white transition"
      >
        Hire Me
      </a>
    </div>
  </div>
</motion.section>


      {/* SKILLS */}
      <motion.section
        className="max-w-6xl mx-auto p-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <FaHtml5 />, label: "HTML5" },
            { icon: <FaCss3Alt />, label: "CSS3" },
            { icon: <FaJs />, label: "JavaScript" },
            { icon: <SiTailwindcss />, label: "Tailwind CSS" },
            { icon: <SiExpress />, label: "ExpressJS" },
            { icon: <FaLock />, label: "JWT Auth" },
            { icon: <SiPostgresql />, label: "PostgreSQL" },
            { icon: <SiDocker />, label: "Docker" },
            { icon: <FaGit />, label: "Git" },
            { icon: <FaGithub />, label: "GitHub" },
            { icon: <SiNetlify />, label: "Netlify" },
            { icon: <SiVercel />, label: "Vercel" },
            { icon: <SiPostman />, label: "Postman" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-lg flex flex-col items-center gap-3 hover:scale-105 transition"
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
            >
              <div className="text-4xl text-indigo-400">{skill.icon}</div>
              <span>{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ACADEMIC BACKGROUND */}
      <motion.section
        className="max-w-6xl mx-auto p-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Academic Background</h2>

        {/* Education Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-indigo-400" /> Education
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            {/* Timeline Items */}
            {[
              { year: "2026", degree: "Bachelor of Technology", institution: "United College of Engineering and Research", duration: "Nov 2022 – May 2026" },
              { year: "2022", degree: "Senior Secondary (XII), CBSE", institution: "Tribhuvan Devi Academy", duration: "July 2022" },
              { year: "2020", degree: "Secondary (X), CBSE", institution: "Tribhuvan Devi Academy", duration: "July 2020" },
            ].map((edu, i) => (
              <motion.div
                key={i}
                className="flex items-start mb-8"
                whileInView={{ x: [50, 0], opacity: [0, 1] }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {edu.year}
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1">
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <p className="text-indigo-400 mb-1">{edu.institution}</p>
                  <p className="text-gray-300">{edu.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaCertificate className="text-indigo-400" /> Certifications
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            {/* Timeline Items */}
            {[
              { year: "2025", title: "Adobe India Hackathon", desc: "Participated as part of Team Shaurya from United College of Engineering and Research, Allahabad.", link: "#" },
              { year: "2024", title: "FLIPKART GRID 6.0 – Software Development Track", desc: "Participated in a national-level tech challenge by Flipkart.", link: "#" },
              { year: "2024", title: "Prod-E-G Hackathon", desc: "Participated in a national-level hackathon.", link: "#" },
              { year: "2024", title: "Microsoft Responsible Generative AI", desc: "Completed training on responsible AI use and ethics.", link: "#" },
              { year: "2024", title: "Cybersecurity Internship – Edunet Foundation", desc: "Gained hands-on experience with threat detection and network security.", link: "#" },
            ].map((cert, i) => (
              <motion.div
                key={i}
                className="flex items-start mb-8"
                whileInView={{ x: [50, 0], opacity: [0, 1] }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {cert.year}
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1">
                  <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                  <p className="text-gray-300 mb-2">{cert.desc}</p>
                  {cert.link !== "#" && (
                    <a href={cert.link} target="_blank" rel="noreferrer" className="text-indigo-400 underline">
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathons & Open Source */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaTrophy className="text-indigo-400" /> Hackathons & Open Source
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Adobe India Hackathon", desc: "Team Shaurya, United College of Engineering and Research", link: "#" },
              { title: "FLIPKART GRID 6.0", desc: "Software Development Track", link: "#" },
              { title: "Prod-E-G Hackathon", desc: "National-level hackathon", link: "#" },
            ].map((hack, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition"
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ delay: i * 0.2 }}
              >
                <h4 className="text-xl font-bold mb-2">{hack.title}</h4>
                <p className="text-gray-300 mb-4">{hack.desc}</p>
                {hack.link !== "#" && (
                  <a href={hack.link} target="_blank" rel="noreferrer" className="text-indigo-400 underline">
                    Learn More
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        className="max-w-5xl mx-auto p-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "E-Commerce Platform",
              desc: "Developed a full-stack MERN e-commerce platform using Next.js with server-side rendering (SSR) for improved SEO and performance. Integrated JWT authentication, protected routes, and scalable state management with Redux Toolkit. Ensured code reliability with unit tests in Jest and React Testing Library, achieving 80% test coverage.",
              img: "https://media.istockphoto.com/id/2207271217/photo/optimization-of-procurement-or-purchasing-product-order-for-online-shopping-and-service.webp?a=1&b=1&s=612x612&w=0&k=20&c=P_y-L-YouyqzohO1ni94GlzDouI_VO11JVfX4zMW42c=",
              github: "https://github.com/Ayushpandey2026/E_Shop",
              live: "https://everbuy.netlify.app/",
            },
            {
              title: "EarthlyEncounter",
              desc: "Built a REST API-powered, responsive country information SPA using React.js, Axios, and CSS. Integrated Framer Motion to deliver smooth UI animations, achieving a 90+ Lighthouse score and reducing page load times by 30%",
              img: "images/countryexplore_images.jpg",
              github: "https://github.com/Ayushpandey2026/CountryExplorer",
              live: "https://earthlyencounters.netlify.app/",
            },
            {
title: "Wellness Session Platform",
desc: "Built a secure wellness platform with JWT Auth, Protected Routes, session browsing, and draft publishing features. Implemented auto-save for drafts with debounced updates, improving reliability and preventing content loss.",
img: "https://img.freepik.com/free-photo/wellness-diet-plan-healthy-living-icon_53876-121317.jpg?semt=ais_hybrid&w=740&q=80",
github: "https://github.com/Ayushpandey2026/Wellness_Session_Platform",
live: "https://wellness-session-platform-eta.vercel.app/login"
},

            {
              title: "Dynamic JSON Schema Builder",
              desc: "Dynamic JSON Schema Builder is an advanced, interactive React application that enables users to visually create complex JSON schemas with nested fields in real-time. The project demonstrates my strong skills in ReactJS, Ant Design, React Hook Form, and modern development tools like Vite.",
              img: "images/json_image.jpg",
              github: "https://github.com/Ayushpandey2026/json_schema_builder",
              live: "https://jsoncrafts.netlify.app/",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover hover:scale-105 transition"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="mb-4 text-gray-300">{p.desc}</p>
                <div className="flex gap-4">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="max-w-2xl mx-auto p-8 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6 text-gray-300">Let's connect! Reach out via email or WhatsApp for collaborations, opportunities, or just to say hi.</p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            <FaExternalLinkAlt /> WhatsApp
          </a>
        </div>
        <form
          action={`https://formsubmit.co/${emailAddress}`}
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      {/* CODING PROFILE */}
      <motion.section
        className="max-w-3xl mx-auto p-8 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Coding Profiles</h2>
        <p className="flex justify-center items-center gap-2">
          <FaCode className="text-xl" /> 350+ LeetCode DSA:{" "}
          <a
            href="https://leetcode.com/u/Ayushpandey23/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 underline"
          >
            LeetCode
          </a>
        </p>
      </motion.section>
    </div>
  );
}
