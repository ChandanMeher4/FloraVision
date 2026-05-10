import "./globals.css";

export const metadata = {
  title: "FloraVision - Earth's Exhale | Premium Indoor Plants",
  description: "FloraVision symbolizes the purity and vitality of the Earth's natural environment. Discover our curated collection of premium indoor plants.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
