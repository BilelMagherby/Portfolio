
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { data } from './data';

function App() {
  const [lang, setLang] = useState('en');
  const content = data[lang];

  return (
    <div className="app-layout">
      {/* Background Glows */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>

      {/* Stars/Particles */}
      <div className="bg-particles"></div>

      <Navbar
        lang={lang}
        setLang={setLang}
        navData={content.ui.nav}
        ui={content.ui}
      />

      <main className="main-content">
        <Hero data={content} />
        <About data={content} />
        <Skills data={content} />
        <Experience data={content} />
        <Education data={content} />
        <Projects data={content} />
        <Contact data={content} />
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Bilel Magherby. All rights reserved.</p>
          <p className="footer-sub">Built with React & Vanilla CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
