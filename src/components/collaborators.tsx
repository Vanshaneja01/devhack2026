import React from "react";
import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

interface TierGroup {
  tier: string;
  members: Partner[];
  sizeClass?: string;
}

const partnerGroups: TierGroup[] = [
  {
    tier: "Powered By",
    sizeClass: "h-16 md:h-20 w-48 md:w-56",
    members: [
      {
        name: "Unstop",
        logo: "/images/collaborators/unstop.png",
        url: "https://unstop.com",
      },
    ],
  },
  {
    tier: "Platform Partner",
    sizeClass: "h-12 md:h-14 w-40 md:w-48",
    members: [
      {
        name: "Work2Hire",
        logo: "/images/collaborators/w2h.png",
        url: "#",
      },
    ],
  },
  {
    tier: "Community Partners",
    sizeClass: "h-12 md:h-14 w-36 md:w-44",
    members: [
      {
        name: "Event dev X",
        logo: "/images/collaborators/eventdevx.png",
        url: "#",
      },
      {
        name: "Tech4Hack",
        logo: "/images/collaborators/tech4hack.png",
        url: "#",
      },
      {
        name: "Builders Hub",
        logo: "/images/collaborators/buildershub.png",
        url: "#",
      },
      {
        name: "GeeksforGeeks",
        logo: "/images/collaborators/gfg.png",
        url: "https://www.geeksforgeeks.org",
      },
    ],
  },
];

export default function Collaborators() {
  return (
    <section id="collaborators" className="py-20 bg-black/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Our <span className="text-emerald-400">Collaborators</span>
          </h2>
          <p className="mt-3 text-neutral-400 max-w-xl mx-auto text-sm sm:text-base">
            Backed by incredible industry platforms and student developer communities.
          </p>
        </div>

        <div className="space-y-12">
          {partnerGroups.map((group) => (
            <div key={group.tier} className="text-center">
              <span className="inline-block text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-6 px-4 py-1 rounded-full border border-neutral-800 bg-neutral-900/60">
                {group.tier}
              </span>

              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {group.members.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.url || "#"}
                    target={partner.url && partner.url !== "#" ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="group flex flex-col items-center justify-center p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:border-emerald-500/40 hover:bg-neutral-900/90 transition-all duration-300"
                  >
                    <div className={`relative ${group.sizeClass} flex items-center justify-center`}>
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="mt-2 text-xs font-medium text-neutral-400 group-hover:text-white transition-colors">
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
