import React from "react";
import Image from "next/image";

interface Person {
  name: string;
  role: string;
  company: string;
  image: string;
}

const judgesAndSpeakers: Person[] = [
  {
    name: "Vansh Agarwal",
    role: "CBO",
    company: "Work2Hire",
    image: "/images/vansh.jpg",
  },
  {
    name: "Yamini Gaur",
    role: "Educator & Content Creator",
    company: "Tech didi",
    image: "/images/yamini.jpg",
  },
  {
    name: "Tanya Gupta",
    role: "AVP",
    company: "Barclays",
    image: "/images/tanya.jpg",
  },
  {
    name: "Devansh Bharadwaj",
    role: "Full Stack Developer",
    company: "NLC",
    image: "/images/devansh.jpg",
  },
  {
    name: "Mohit Sharma",
    role: "ABO Consultant",
    company: "Lacleo AI",
    image: "/images/mohit.jpg",
  },
];

export function JudgesAndSpeakers() {
  return (
    <section id="judges-speakers" className="py-20 bg-[#FAFAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200 shadow-sm">
            Mentorship & Evaluation
          </span>

          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            JUDGES & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500">SPEAKERS</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Learn from seasoned leaders, engineers, and founders guiding projects and sharing real-world industry perspectives.
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="flex flex-wrap items-stretch justify-center gap-6 sm:gap-8">
          {judgesAndSpeakers.map((person) => (
            <div
              key={person.name}
              className="group relative flex flex-col items-center text-center w-64 sm:w-72 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Profile Avatar */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-5 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-orange-400 shadow-md">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-1.5 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-blue-50 text-blue-700 border border-blue-200">
                  Judge
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-orange-50 text-orange-700 border border-orange-200">
                  Speaker
                </span>
              </div>

              {/* Details */}
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {person.role}
              </p>
              <p className="text-xs text-slate-500 font-normal">
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
