import React from "react";
import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

interface TierGroup {
  tier: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  cardSize: string;
  members: Partner[];
}

const partnerGroups: TierGroup[] = [
  {
    tier: "Powered By",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    badgeBorder: "border-blue-200",
    cardSize: "w-72 sm:w-80 h-32",
    members: [
      {
        name: "Unstop",
        logo: "/images/unstop.png",
        url: "https://unstop.com",
      },
    ],
  },
  {
    tier: "Platform Partner",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    badgeBorder: "border-indigo-200",
    cardSize: "w-64 sm:w-72 h-28",
    members: [
      {
        name: "Work2Hire",
        logo: "/images/w2h.png",
        url: "#",
      },
    ],
  },
  {
    tier: "Community Partners",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-700",
    badgeBorder: "border-slate-200",
    cardSize: "w-56 sm:w-60 h-28",
    members: [
      {
        name: "Event dev X",
        logo: "/images/eventdevx.png",
        url: "#",
      },
      {
        name: "Tech4Hack",
        logo: "/images/tech4hack.png",
        url: "#",
      },
      {
        name: "Builders Hub",
        logo: "/images/buildershub.png",
        url: "#",
      },
      {
        name: "GeeksforGeeks MIET",
        logo: "/images/gfg.png",
        url: "https://www.geeksforgeeks.org",
      },
    ],
  },
];

export function Collaborators() {
  return (
    <section id="collaborators" className="py-20 bg-[#FAFAFC] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Prizes section style */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-50 text-orange-600 border border-orange-200 shadow-sm">
            Partners & Collaborators
          </span>

          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500">COLLABORATORS</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Backed by incredible industry platforms and student developer communities.
          </p>
        </div>

        {/* Partner Tiers */}
        <div className="space-y-12">
          {partnerGroups.map((group) => (
            <div key={group.tier} className="text-center">
              <span
                className={`inline-block text-xs uppercase tracking-wider font-semibold mb-6 px-3.5 py-1 rounded-full border ${group.badgeBg} ${group.badgeText} ${group.badgeBorder}`}
              >
                {group.tier}
              </span>

              <div className="flex flex-wrap items-center justify-center gap-5">
                {group.members.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.url || "#"}
                    target={partner.url && partner.url !== "#" ? "_blank" : "_self"}
                    rel="noreferrer"
                    className={`group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 ${group.cardSize}`}
                  >
                    <div className="relative w-full h-14 flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-2 text-xs font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Collaborators;
