import { Syne, DM_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Harish R — MERN Stack Developer",
  description:
    "Full Stack Developer specializing in React.js, Node.js, Express.js, and MongoDB. Building scalable web applications and AI-integrated systems.",
  keywords: ["MERN Stack", "React", "Node.js", "Full Stack Developer", "Harish R"],
  authors: [{ name: "Harish R" }],
  openGraph: {
    title: "Harish R — MERN Stack Developer",
    description: "Full Stack Developer building scalable web applications and AI-integrated systems.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
