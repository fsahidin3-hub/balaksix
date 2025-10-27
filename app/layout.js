// File: app/layout.js
// Ieu file utama pikeun HTML sareng CSS dasar

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Balaksix - Professional Portfolio</title>
        <meta name="description" content="Official portfolio and projects of Balaksix." />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
