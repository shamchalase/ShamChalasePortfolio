// src/App.js
import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css'; // Ensure you import your CSS file

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Education className="education" />
      <Experience className="experience" />
      <Projects className="projects" />
      <Skills className="skills" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
