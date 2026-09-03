import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEVHACK IIMTU 2026 — BUILD FOR IMPACT | GDG on Campus – IIMT, Meerut",
  description:
    "DevHack IIMTU 2026 is a developer-focused hackathon organized by GDG on Campus – IIMT, Meerut at IIMT University. 18 Sept (Online Build) & 19 Sept (Offline Finale). Register on Devfolio!",
  keywords: [
    "DevHack",
    "DevHack IIMTU 2026",
    "IIMT University Meerut",
    "GDG on Campus IIMT",
    "Hackathon 2026",
    "Build for Impact",
    "Devfolio Hackathon",
  ],
  authors: [{ name: "GDG on Campus – IIMT, Meerut" }],
  openGraph: {
    title: "DEVHACK IIMTU 2026 — BUILD FOR IMPACT",
    description:
      "A developer-focused hackathon where ideas turn into real-world solutions. 18-19 September 2026 at IIMT University, Meerut.",
    siteName: "DEVHACK IIMTU 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#FAFAFC] text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
