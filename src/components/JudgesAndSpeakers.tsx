import React from "react";
import Image from "next/image";

interface Person {
  name: string;
  role: string;
  company: string;
  image: string;
  badge?: string;
}

const judgesList: Person[] = [
  {
    name: "Mohit Sharma",
    role: "Director",
    company: "Lacleo",
    image: "/images/mohit.jpg",
    badge: "Judge",
  },
  {
    name: "Vansh Agrawal",
    role: "Co-Founder & CBO",
    company: "Work2hire",
    image: "/images/vansh.jpg",
    badge: "Judge",
  },
  {
    name: "Tanya Gupta",
    role: "AVP | Technical Product Owner | Author",
    company: "Barclays",
    image: "/images/tanya.jpg",
    badge: "Judge",
  },
  {
    name: "Devansh Bhardwaj",
    role: "Full Stack Developer",
    company: "NIC",
    image: "/images/devansh.jpg",
    badge: "Judge",
  },
  {
    name: "Yash Goyal",
    role: "Strategic Advisor",
    company: "DevHack Advisory",
    image: "/images/yash.jpg",
    badge: "Strategic Advisor",
  },
  {
    name: "Yamini Gaur",
    role: "Educator & Content Creator",
    company: "Tech didi",
    image: "/images/yamini.jpg",
    badge: "Judge",
  },
];

export function JudgesAndSpeakers() {
  return (
    <section id="judges" className="py-20 bg-[#FAFAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200 shadow-sm">
            Evaluation & Mentorship
          </span>

          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            MEET OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500">JUDGES</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Distinguished tech leaders, founders, and industry experts evaluating prototypes and guiding participants at DevHack IIMTU 2026.
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="flex flex-wrap items-stretch justify-center gap-6 sm:gap-8">
          {judgesList.map((person) => (
            <div
              key={person.name}
              className="group relative flex flex-col items-center text-center w-64 sm:w-72 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Profile Avatar */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-orange-400 shadow-md">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Judge Badge Below Photo */}
              <div className="flex items-center justify-center mb-3">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs">
                  {person.badge || "Judge"}
                </span>
              </div>

              {/* Details */}
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-700 leading-snug">
                {person.role}
              </p>
              <p className="mt-1 text-xs text-slate-500 font-normal">
                {person.company}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default JudgesAndSpeakers;
