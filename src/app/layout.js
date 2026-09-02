import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Sneha Rudani — Python & Django Developer | Backend Engineer",
  description:
    "Python & Django Developer | Backend Engineer specializing in Django REST Framework (DRF), JWT authentication, database optimization, and scalable web backend systems.",
  keywords: [
    "Python Developer",
    "Django Developer",
    "Backend Engineer",
    "Django REST Framework",
    "DRF Developer",
    "Sneha Rudani",
    "Backend Developer",
  ],
  authors: [{ name: "Sneha Rudani" }],
  openGraph: {
    title: "Sneha Rudani — Python & Django Developer | Backend Engineer",
    description:
      "Python & Django Developer & Backend Engineer portfolio highlighting REST APIs, database ORM, and full-stack systems.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="grain min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
