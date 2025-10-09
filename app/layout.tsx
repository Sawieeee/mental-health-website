import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CrisisBanner from "../components/CrisisBanner";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "4U Mental Health Platform",
  description: "A luxurious, modern web-based mental health awareness platform.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "4U Mental Health Platform",
    description: "Awareness, support, and compassionate tools for mental well-being.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    images: [
      {
        url: "/images/Mental-Health-Assessment.jpg",
        width: 1200,
        height: 630,
        alt: "4U Mental Health Platform",
      },
    ],
  },
};

export const viewport = {
  themeColor: "#2e7d32",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <CrisisBanner />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
