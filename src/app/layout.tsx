import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  eventConfig,
  SITE_DOMAIN,
  SITE_URL,
  UNSTOP_URL,
} from "@/config/eventConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${eventConfig.title} — ${eventConfig.tagline} | ${eventConfig.organizer.community}`,
    template: `%s | ${eventConfig.title} — ${SITE_DOMAIN}`,
  },
  description:
    "DevHack IIMTU 2026 is a premier developer hackathon organized by GDG on Campus – IIMT, Meerut and IIMT Business Incubation Foundation. Join 200+ developers on 18–19 September 2026 to build solutions in AI, Web, App, and Cloud. Register now on Unstop!",
  applicationName: "DEVHACK 2026",
  keywords: [
    "DevHack",
    "DevHack 2026",
    "DevHack IIMTU 2026",
    "events2226",
    "events2226.co.in",
    "IIMT University Meerut",
    "GDG on Campus IIMT",
    "Google Developer Groups Meerut",
    "Hackathon 2026 India",
    "Hackathon Delhi NCR",
    "Hackathon Uttar Pradesh",
    "AI Hackathon",
    "Web Development Hackathon",
    "Cloud Computing Hackathon",
    "Student Hackathon 2026",
    "Build for Impact",
    "Unstop Hackathon 2026",
    "IIMT Business Incubation Foundation",
    "IIMTU DevHack",
    "Developer Competition India",
  ],
  authors: [
    { name: eventConfig.organizer.community, url: SITE_URL },
    { name: eventConfig.organizer.leadName, url: SITE_URL },
  ],
  creator: eventConfig.organizer.community,
  publisher: eventConfig.organizer.university,
  category: "Technology",
  classification: "Hackathon / Tech Event",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${eventConfig.title} — ${eventConfig.tagline} (18–19 Sept 2026)`,
    description:
      "A developer-focused hackathon where ideas turn into real-world solutions. 18 Sept (Online Build) & 19 Sept (Offline Finale) at IIMT University, Meerut. Cash prizes, mentorship, and networking!",
    url: SITE_URL,
    siteName: `${eventConfig.title} (${SITE_DOMAIN})`,
    images: [
      {
        url: "/images/devhack-logo.jpg",
        width: 1200,
        height: 630,
        alt: `${eventConfig.title} — ${eventConfig.tagline}`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${eventConfig.title} — ${eventConfig.tagline}`,
    description:
      "A developer hackathon organized by GDG on Campus IIMT at IIMT University. Build in AI, Web, App, Cloud. Register on Unstop!",
    images: ["/images/devhack-logo.jpg"],
    creator: "@gdg_iimt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${eventConfig.title} — ${SITE_DOMAIN}`,
      description: eventConfig.subtitle,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: eventConfig.organizer.community,
      url: SITE_URL,
      logo: `${SITE_URL}/images/gdg-logo.png`,
      sameAs: [
        eventConfig.socials.instagram,
        eventConfig.socials.linkedin,
        eventConfig.socials.gdgCommunity,
      ],
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: eventConfig.organizer.university,
        url: "https://iimtindia.net",
      },
    },
    {
      "@type": "Event",
      "@id": `${SITE_URL}/#event`,
      name: `${eventConfig.title} — ${eventConfig.tagline}`,
      description: `${eventConfig.subtitle} Organized by ${eventConfig.organizer.community} at ${eventConfig.organizer.university}. Tracks include AI, Web, App, and Cloud.`,
      startDate: "2026-09-18T09:00:00+05:30",
      endDate: "2026-09-19T18:00:00+05:30",
      eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: eventConfig.location.venue,
        address: {
          "@type": "PostalAddress",
          streetAddress: eventConfig.location.address,
          addressLocality: eventConfig.location.city,
          addressRegion: eventConfig.location.state,
          addressCountry: "IN",
        },
        hasMap: eventConfig.location.mapUrl,
      },
      image: [`${SITE_URL}/images/devhack-logo.jpg`],
      organizer: {
        "@id": `${SITE_URL}/#organization`,
      },
      offers: {
        "@type": "Offer",
        url: UNSTOP_URL,
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        validFrom: "2026-01-01T00:00:00+05:30",
      },
      performer: {
        "@type": "Organization",
        name: eventConfig.organizer.community,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-[#FAFAFC] text-slate-900`}>
        {children}
      </body>
    </html>
  );
}

