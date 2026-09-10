export interface EventConfig {
  domain: string;
  siteUrl: string;
  unstopUrl: string;
  devfolioUrl: string;
  title: string;
  tagline: string;
  subtitle: string;
  dates: {
    heroDisplay: string;
    onlineBuild: string;
    offlineFinale: string;
    day1Date: string;
    day2Date: string;
    fullYear: string;
  };
  location: {
    venue: string;
    address: string;
    city: string;
    state: string;
    mapUrl: string;
  };
  organizer: {
    community: string;
    university: string;
    incubation: string;
    leadName: string;
    leadRole: string;
    officialEmail: string;
    personalEmail: string;
  };
  stats: {
    studentsOnCampus: string;
    digitalReach: string;
    regionalReach: string;
    expectedDevelopers: string;
  };
  prizeConfig: {
    showPrizePool: boolean;
    prizePoolAmount: string;
    categories: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
      color: string;
    }>;
    specialRecognitionText: string;
  };
  socials: {
    instagram?: string;
    linkedin?: string;
    github?: string;
    gdgCommunity?: string;
  };
  tracks: Array<{
    id: string;
    title: string;
    tag: string;
    icon: string;
    description: string;
    gradient: string;
    accentColor: string;
  }>;
  timeline: Array<{
    id: string;
    date: string;
    month: string;
    title: string;
    description: string;
    badge?: string;
    isKeyMilestone?: boolean;
  }>;
  judgingCriteria: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    badge: string;
  }>;
  whyJoin: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
    category?: string;
  }>;
}

export const SITE_DOMAIN = "events2226.co.in";
export const SITE_URL = `https://${SITE_DOMAIN}`;

export const UNSTOP_URL = "https://unstop.com/p/devhack-2026-gdg-on-campus-iimt-meerut-1750208";
export const DEVFOLIO_URL = UNSTOP_URL; // Alias for single point of reference

export const eventConfig: EventConfig = {
  domain: SITE_DOMAIN,
  siteUrl: SITE_URL,
  unstopUrl: UNSTOP_URL,
  devfolioUrl: UNSTOP_URL,
  title: "DEVHACK IIMTU 2026",
  tagline: "BUILD FOR IMPACT",
  subtitle: "A developer-focused hackathon where ideas turn into real-world solutions.",
  dates: {
    heroDisplay: "18–19 SEPTEMBER 2026",
    onlineBuild: "18 SEPT — ONLINE BUILD",
    offlineFinale: "19 SEPT — OFFLINE FINALE",
    day1Date: "18 September 2026",
    day2Date: "19 September 2026",
    fullYear: "2026",
  },
  location: {
    venue: "IIMT University, Meerut",
    address: "IIMT University, O Pocket, Ganga Nagar",
    city: "Meerut",
    state: "Uttar Pradesh",
    mapUrl: "https://maps.google.com/?q=IIMT+University+Meerut",
  },
  organizer: {
    community: "GDG on Campus – IIMT, Meerut",
    university: "IIMT University, Meerut",
    incubation: "IIMT Business Incubation Foundation",
    leadName: "Vansh Aneja",
    leadRole: "DevHack Organizer",
    officialEmail: "gdg@iimtindia.net",
    personalEmail: "vanshaneja.connect@gmail.com",
  },
  stats: {
    studentsOnCampus: "20,000+",
    digitalReach: "50,000+",
    regionalReach: "NCR + UP + UK + HR",
    expectedDevelopers: "200+",
  },
  prizeConfig: {
    showPrizePool: false,
    prizePoolAmount: "",
    categories: [
      {
        id: "winner",
        title: "Winner",
        description: "Awarded to the overall top-performing team displaying exceptional engineering, innovation, and execution.",
        icon: "🏆",
        color: "from-amber-400 to-yellow-500",
      },
      {
        id: "runner-up-1",
        title: "1st Runner-Up",
        description: "Recognizing outstanding technical implementation, problem solving, and demonstration.",
        icon: "🥈",
        color: "from-slate-300 to-slate-400",
      },
      {
        id: "runner-up-2",
        title: "2nd Runner-Up",
        description: "Celebrating impressive prototype quality, creative thinking, and presentation.",
        icon: "🥉",
        color: "from-amber-600 to-amber-700",
      },
      {
        id: "best-ai",
        title: "Best AI Project",
        description: "For the team utilizing AI/ML models in the most innovative, meaningful, and functional way.",
        icon: "🤖",
        color: "from-blue-500 to-indigo-600",
      },
      {
        id: "best-innovation",
        title: "Best Innovation / Social Impact",
        description: "For the project addressing a critical real-world problem with maximum societal impact potential.",
        icon: "💡",
        color: "from-emerald-500 to-green-600",
      },
    ],
    specialRecognitionText: "Certificates and official recognition for contributors, organizers, and judges.",
  },
  socials: {
    instagram: "https://www.instagram.com/gdg_iimt/",
    linkedin: "https://www.linkedin.com/company/gdg-on-campus-iimt/",
    gdgCommunity: "https://gdg.community.dev/gdg-on-campus-iimt-university-meerut-india/",
  },
  tracks: [
    {
      id: "ai",
      title: "AI",
      tag: "ARTIFICIAL INTELLIGENCE",
      icon: "🤖",
      description: "Build intelligent solutions using Artificial Intelligence and Machine Learning.",
      gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
      accentColor: "#4285F4",
    },
    {
      id: "web",
      title: "WEB",
      tag: "MODERN WEB DEV",
      icon: "🌐",
      description: "Create modern web applications and digital experiences.",
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      accentColor: "#34A853",
    },
    {
      id: "app",
      title: "APP",
      tag: "MOBILE TECH",
      icon: "📱",
      description: "Build mobile applications that solve real problems.",
      gradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
      accentColor: "#FBBC05",
    },
    {
      id: "cloud",
      title: "CLOUD",
      tag: "CLOUD & INFRA",
      icon: "☁️",
      description: "Leverage cloud technologies to build scalable solutions.",
      gradient: "from-red-500/10 via-rose-500/5 to-transparent",
      accentColor: "#EA4335",
    },
  ],
  timeline: [
    {
      id: "t1",
      date: "10",
      month: "SEPTEMBER",
      title: "Registrations & Team Formation Open",
      description: "Sign up on Unstop, build your team, or find teammates to start brainstorming your ideas.",
      badge: "Kickoff",
      isKeyMilestone: true,
    },
    {
      id: "t2",
      date: "17",
      month: "SEPTEMBER",
      title: "Team Formation Deadline",
      description: "Finalize your team composition and prepare for the 2-day hybrid hackathon.",
      badge: "Deadline",
    },
    {
      id: "t3",
      date: "18",
      month: "SEPTEMBER",
      title: "Online Build",
      description: "Online development + mentorship. Build your project remotely with guidance from industry experts.",
      badge: "Day 01",
      isKeyMilestone: true,
    },
    {
      id: "t4",
      date: "18",
      month: "SEPTEMBER",
      title: "Project Submission",
      description: "Submit project source code, GitHub repository link, and demo video by the cutoff time.",
      badge: "Submission",
    },
    {
      id: "t5",
      date: "19",
      month: "SEPTEMBER",
      title: "Offline Finale",
      description: "Shortlisted teams gather at IIMT University, Meerut to present and demonstrate projects before judges.",
      badge: "Day 02 — On Campus",
      isKeyMilestone: true,
    },
    {
      id: "t6",
      date: "19",
      month: "SEPTEMBER",
      title: "Evaluation & Awards",
      description: "Final judging rounds, live scoring, closing ceremony, and winner announcements.",
      badge: "Grand Finale",
      isKeyMilestone: true,
    },
  ],
  judgingCriteria: [
    {
      id: "j1",
      title: "Innovation & Originality",
      description: "How unique and creative is the solution?",
      icon: "Sparkles",
      badge: "Creativity",
    },
    {
      id: "j2",
      title: "Technical Execution",
      description: "How effectively has the technology been implemented?",
      icon: "Code2",
      badge: "Code Quality",
    },
    {
      id: "j3",
      title: "Real-World Impact",
      description: "Does the solution address a meaningful problem?",
      icon: "Target",
      badge: "Value",
    },
    {
      id: "j4",
      title: "Presentation & Demo",
      description: "How clearly is the solution communicated and demonstrated?",
      icon: "Presentation",
      badge: "Communication",
    },
    {
      id: "j5",
      title: "Use of Technology",
      description: "How effectively are the chosen technologies utilized?",
      icon: "Cpu",
      badge: "Tech Stack",
    },
  ],
  whyJoin: [
    {
      id: "build",
      title: "BUILD",
      description: "Turn ideas into working prototypes over 2 action-packed days.",
      icon: "Hammer",
      color: "blue",
    },
    {
      id: "learn",
      title: "LEARN",
      description: "Explore technologies, new frameworks, and modern architecture.",
      icon: "BookOpen",
      color: "green",
    },
    {
      id: "connect",
      title: "CONNECT",
      description: "Meet passionate developers, mentors, and tech enthusiasts.",
      icon: "Users",
      color: "yellow",
    },
    {
      id: "compete",
      title: "COMPETE",
      description: "Challenge yourself against talented builders across the region.",
      icon: "Trophy",
      color: "red",
    },
    {
      id: "showcase",
      title: "SHOWCASE",
      description: "Present your project live to an esteemed judging panel.",
      icon: "MonitorPlay",
      color: "blue",
    },
    {
      id: "impact",
      title: "IMPACT",
      description: "Build meaningful solutions that address real-world challenges.",
      icon: "Zap",
      color: "green",
    },
  ],
  faqs: [
    {
      question: "What is DevHack IIMTU 2026?",
      answer: "DevHack IIMTU 2026 is a developer-focused hackathon organized by GDG on Campus – IIMT, Meerut. It brings together student developers, innovators, and tech enthusiasts to build impactful solutions for real-world problems.",
    },
    {
      question: "When is DevHack happening?",
      answer: "DevHack takes place on 18–19 September 2026. Day 01 (18 Sept) is the Online Build, and Day 02 (19 Sept) is the Offline Finale.",
    },
    {
      question: "Where is the Offline Finale held?",
      answer: "The Offline Finale will be hosted on campus at IIMT University, Meerut, Uttar Pradesh. Shortlisted teams will be invited to demonstrate their projects live.",
    },
    {
      question: "What is the format of the hackathon?",
      answer: "It follows a hybrid 2-day format: Day 01 is an Online Build where teams code remotely with access to online mentors. Shortlisted teams advance to Day 02 on-campus for live presentations and final judging.",
    },
    {
      question: "What technologies can I use?",
      answer: "You are free to use any modern tech stack, framework, language, or platform. Key focus areas include AI, Web, App, and Cloud, but you are welcome to combine technologies or explore emerging fields.",
    },
    {
      question: "What are the technology areas / tracks?",
      answer: "The primary tracks are AI, WEB, APP, and CLOUD. Tracks are non-restrictive — you can combine elements across multiple domains to address your problem statement.",
    },
    {
      question: "How does the online build work?",
      answer: "On 18 September 2026, participating teams work remotely to build their projects. You will have access to online check-ins and mentor support throughout the day before submitting your code and demo video.",
    },
    {
      question: "What happens during the Offline Finale?",
      answer: "Shortlisted teams present their working prototypes on campus at IIMT University on 19 September 2026. You will interact with judges, network with fellow developers, and attend the awards ceremony.",
    },
    {
      question: "How will projects be evaluated?",
      answer: "Projects are evaluated on 5 key criteria: Innovation & Originality, Technical Execution, Real-World Impact, Presentation & Demo, and Effective Use of Technology.",
    },
    {
      question: "Where do I register?",
      answer: "You can register directly on Unstop by clicking any 'REGISTER ON UNSTOP' button on this site.",
    },
  ],
};
