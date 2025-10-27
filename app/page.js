// File: app/page.js
// Kodeu kanggo Front-End dan Tampilan Portfolio Klien (LENGKEP)

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
    fontWeight: 'bold',
    transition: 'color 0.3s'
  },
  navLinkHover: {
    color: '#0056b3'
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
  },
  projectCard: {
    backgroundColor: '#2a2a2a', 
    padding: '15px', 
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
  }
};

// Komponen Card Proyek
const ProjectCard = ({ title, description, link }) => (
    <div style={styles.projectCard}>
        <h3 style={{ color: '#007bff' }}>{title}</h3>
        <p style={{ fontSize: '0.9em', color: '#ccc' }}>{description}</p>
        {link && <a href={link} target="_blank" style={styles.navLink}>Lihat Demo →</a>}
    </div>
);


export default function PortfolioPage() {
  return (
    <div style={styles.container}>
      {/* HEADER DAN NAVIGASI */}
      <header style={styles.header}>
        <h1 style={{ fontSize: '2.5em' }}>Balaksix Portfolio</h1>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>Tentang</a>
          <a href="#projects" style={styles.navLink}>Proyek</a>
          <a href="#contact" style={styles.navLink}>Kontak</a>
        </nav>
      </header>

      {/* BAGIAN ABOUT - EUSI CONTO LENGKEP */}
      <section id="about" style={styles.section}>
        <h2 style={styles.h2}>Tentang Saya</h2>
        <p style={{ lineHeight: '1.6', textAlign: 'justify', color: '#e0e0e0' }}>
          Halo, nami abdi Balaksix. Abdi saurang *Full-Stack Developer* anu berpengalaman dina ngawangun aplikasi web modern nganggo Next.js, React, sareng Node.js. Abdi fokus kana nyiptakeun solusi téknologi anu éfisién sareng desain anu *user-friendly*. Abdi percanten yén kodeu anu bersih tiasa ngahasilkeun pangalaman digital anu luar biasa. Hayu urang gawé bareng ngawujudkeun proyék impian anjeun!
        </p>
      </section>

      {/* BAGIAN PROJECTS - EUSI CONTO LENGKEP */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.h2}>Proyek Pilihan</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
          
          <ProjectCard 
            title="BioPerfect AI (Micro-SaaS)"
            description="Aplikasi Micro-SaaS AI kanggo ngahasilkeun Bio Instagram anu dioptimalkeun. Dibangun nganggo Next.js sareng Gemini API."
            link="https://bio-perfect-ai-erzk.vercel.app/"
          />

          <ProjectCard 
            title="Sistem E-commerce Lokal"
            description="Sistem penjualan *online* saderhana kalayan integrasi Midtrans, fokus kana produk *handicraft* lokal."
            link="#" // Ganti ku link asli klien
          />
          
          <ProjectCard 
            title="Landing Page Perusahaan"
            description="Desain *Landing Page* anu *responsive* sareng konvérsi tinggi pikeun jasa konsultan finansial."
            link="#" // Ganti ku link asli klien
          />
        </div>
      </section>

      {/* BAGIAN CONTACT - EUSI CONTO LENGKEP */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.h2}>Hubungi Saya</h2>
        <p style={{ textAlign: 'center', color: '#e0e0e0' }}>
          Pikeun kolaborasi, proposal proyek, atanapi diskusi téknologi, mangga hubungi abdi:
        </p>
        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          Email: <a href="mailto:balaksix.dev@email.com" style={styles.navLink}>balaksix.dev@email.com</a>
        </p>
        <p style={{ textAlign: 'center' }}>
          GitHub: <a href="https://github.com/fsahidin3-hub" target="_blank" style={styles.navLink}>fsahidin3-hub</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Balaksix Portfolio. Ditenagakeun ku Next.js & Vercel.</p>
      </footer>
    </div>
  );
}
