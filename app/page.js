// File: app/page.js
// Kodeu kanggo Front-End sareng Tampilan Portfolio

import React from 'react';

// Styles minimal pikeun tampilan Portfolio anu bersih
const styles = {
  container: { 
    fontFamily: 'sans-serif', 
    backgroundColor: '#1a1a1a', 
    color: 'white', 
    minHeight: '100vh' 
  },
  header: { 
    padding: '20px', 
    textAlign: 'center', 
    borderBottom: '1px solid #333' 
  },
  nav: { 
    display: 'flex', 
    justifyContent: 'center', 
    gap: '20px', 
    padding: '10px 0' 
  },
  navLink: { 
    color: '#007bff', 
    textDecoration: 'none', 
    fontWeight: 'bold' 
  },
  section: { 
    padding: '40px 20px', 
    maxWidth: '900px', 
    margin: '0 auto', 
    borderBottom: '1px solid #333' 
  },
  h2: { 
    textAlign: 'center', 
    marginBottom: '20px', 
    color: '#007bff' 
  },
  footer: { 
    textAlign: 'center', 
    padding: '20px', 
    fontSize: '0.8em', 
    color: '#999' 
  }
};

export default function PortfolioPage() {
  return (
    <div style={styles.container}>
      {/* HEADER DAN NAVIGASI */}
      <header style={styles.header}>
        <h1 style={{ fontSize: '2.5em' }}>Balaksix</h1>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* BAGIAN ABOUT */}
      <section id="about" style={styles.section}>
        <h2 style={styles.h2}>About Me</h2>
        <p style={{ lineHeight: '1.6' }}>
          Hello, I am Balaksix. I am a professional full-stack developer specializing in creating modern and responsive web applications. I focus on creating clean code and excellent user experiences.
        </p>
      </section>

      {/* BAGIAN PROJECTS */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.h2}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
          
          {/* Project Card 1: Ganti eusina! */}
          <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
            <h3 style={{ color: '#007bff' }}>Project AI SaaS</h3>
            <p>Built a Micro-SaaS AI tool for generating Instagram bios using Next.js and Google Gemini API.</p>
            <a href="https://bio-perfect-ai-erzk.vercel.app/" style={styles.navLink}>View Live Demo</a>
          </div>

          {/* Project Card 2: Ganti eusina! */}
          <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
            <h3 style={{ color: '#007bff' }}>E-commerce Website</h3>
            <p>Developed a responsive e-commerce platform for selling local products, complete with a payment gateway.</p>
            {/* Link di dieu */}
          </div>
          
        </div>
      </section>

      {/* BAGIAN CONTACT */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.h2}>Contact</h2>
        <p style={{ textAlign: 'center' }}>
          Interested in a collaboration? Feel free to reach out!
        </p>
        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          Email: <a href="mailto:contact@balaksix.com" style={styles.navLink}>contact@balaksix.com</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Balaksix Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
