export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: 'Full-Stack' | 'Agency & Web' | 'E-Commerce';
  techStack: string[];
  role: string;
  highlights: string[];
  metrics?: string;
  screenshotUrl: string;
  themeColor: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  location: string;
  highlights?: string[];
}

export interface TechCategory {
  name: string;
  icon: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Pappu Kumar Yadav",
    shortName: "Pappu",
    handle: "@PYadav70",
    leetCodeHandle: "mryadav__70",
    title: "Full-Stack Software Engineer",
    subheading: "I build Modern WebApps. Backends.",
    quote: '"Scalable Apps. Powerful Backends.Web Platforms. Built to Scale.Scalable Web. Seamless UX."',
    status: "AVAILABLE FOR WORK",
    location: "Greater Noida, India",
    timezone: "IST (GMT+5:30)",
    email: "technoyadav1234@gmail.com",
    phone: "+91 8651850583",
    github: "https://github.com/PYadav70",
    linkedin: "https://www.linkedin.com/in/pappu-kumar-yadav-492b412b1/",
    leetcode: "https://leetcode.com/mryadav__70",
    bio: "Passionate Full-Stack Developer and B.Tech Information Technology student at G.L. Bajaj Institute of Technology & Management. Specialized in Next.js, Node.js, PostgreSQL, MongoDB, Prisma ORM, and AWS cloud infrastructure. Driven by clean architecture, type safety, and fast loading speeds.",
  },

  projects: [
    {
      id: "abhiyantri-setu",
      title: "Abhiyantri Setu",
      tagline: "All-in-One Construction Services Marketplace Platform",
      description: "Full-stack marketplace connecting homeowners with 5+ verified professional categories including architects, contractors, interior designers, electricians, and plumbers.",
      longDescription: "Designed and built a complete construction services ecosystem with role-based Client and Provider dashboards. Implemented lead discovery, job posting, quotation workflows, and authentication covering 10+ secure API routes.",
      liveUrl: "https://abhiyantri-setu-coftup23f-abhiyantri.vercel.app/",
      githubUrl: "https://github.com/PYadav70",
      featured: true,
      category: "Full-Stack",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Better Auth", "Tailwind CSS"],
      role: "Full-Stack Developer",
      highlights: [
        "Connected homeowners with 5+ verified service professional categories",
        "Role-based platform with separate Client & Provider dashboards",
        "Lead discovery, job posting, quotation & bidding workflows covering 10+ API routes",
        "Relational PostgreSQL database schema with 7+ entities managed via Prisma ORM"
      ],
      metrics: "10+ API Routes | 7+ Relational Entities",
      screenshotUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
      themeColor: "#f59e0b"
    },
    {
      id: "studio-ads-pro",
      title: "Studio Ads Pro",
      tagline: "Digital Engineering & AI Agents Studio Agency Platform",
      description: "Modern dark-themed agency platform for software development, autonomous AI agents, and mobile products designed to scale businesses.",
      longDescription: "Developed a high-converting agency site showcasing digital engineering services, autonomous AI agents, interactive project portfolio, consultation scheduler, transparent pricing tiers, and client testamonials.",
      liveUrl: "https://www.studioadspro.com/",
      githubUrl: "https://github.com/PYadav70",
      featured: true,
      category: "Agency & Web",
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      role: "Frontend Developer & UI Engineer",
      highlights: [
        "Sleek dark cyber aesthetic with interactive neon accents and particle feel",
        "Consultation booking workflow and interactive service catalog",
        "Responsive, high-performance UI optimized for high core web vitals score",
        "Custom animations, process timeline, and client satisfaction metrics"
      ],
      metrics: "99% Satisfaction Rate | 25+ Delivered Projects Showcase",
      screenshotUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      themeColor: "#8b5cf6"
    },
    {
      id: "hungry-nutrition",
      title: "Hungry Nutrition",
      tagline: "Full-Stack E-Commerce Platform for Supplements & Fitness Products",
      description: "Full-stack e-commerce store with product catalog management, shopping cart, JWT RBAC authentication, and Razorpay payment integration.",
      longDescription: "Architected a scalable e-commerce application for nutrition supplements. Built role-based access control (RBAC) to protect administrative tools, implemented secure Razorpay payment flow, and self-hosted on AWS EC2 with Nginx reverse proxy.",
      liveUrl: "https://hungry-nutrition-website.vercel.app/",
      githubUrl: "https://github.com/PYadav70",
      featured: true,
      category: "E-Commerce",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "AWS EC2", "Nginx"],
      role: "Full-Stack Engineer & DevOps",
      highlights: [
        "Product catalog management, shopping cart, and secure Razorpay checkout",
        "JWT-based authentication and Role-Based Access Control (RBAC)",
        "Self-hosted application on AWS EC2 instance using Nginx reverse proxy",
        "Linux server management, environment setup, and production deployment"
      ],
      metrics: "Self-Hosted AWS EC2 | Integrated Razorpay Gateway",
      screenshotUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      themeColor: "#10b981"
    }
  ] as Project[],

  techCategories: [
    {
      name: "Frontend",
      icon: "Layout",
      skills: [
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "HTML5 / CSS3" }
      ]
    },
    {
      name: "Backend",
      icon: "Server",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
        { name: "Prisma ORM" },
        { name: "JWT Auth" },
        { name: "Zod Schema Validation" }
      ]
    },
    {
      name: "Databases",
      icon: "Database",
      skills: [
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "MySQL" }
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: "Cloud",
      skills: [
        { name: "AWS (EC2, S3)" },
        { name: "Docker" },
        { name: "Nginx Reverse Proxy" },
        { name: "Vercel Deployment" }
      ]
    },
    {
      name: "Languages",
      icon: "Code",
      skills: [
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "C++" }
      ]
    },
    {
      name: "CS Fundamentals",
      icon: "Cpu",
      skills: [
        { name: "Data Structures & Algorithms" },
        { name: "DBMS" },
        { name: "Object Oriented Programming (OOP)" },
        { name: "Computer Networks" },
        { name: "Operating Systems" }
      ]
    }
  ] as TechCategory[],

  experience: [
    {
      id: "infotechbrains",
      role: "SDE Intern",
      company: "InfoTechBrains — Smarter Business Systems",
      location: "Remote",
      period: "June 2025 – Aug 2025",
      type: "Internship",
      description: "Worked on core backend APIs, schema validation, and full-stack LMS module implementation.",
      achievements: [
        "Designed and shipped 12 RESTful API endpoints with Zod schema validation, reducing malformed-request errors by ~40%.",
        "Built a full LMS from scratch (course creation, student enrollment, progress tracking) end-to-end within a 2-month internship window.",
        "Collaborated remotely with cross-functional team members to deliver production-ready features."
      ],
      skills: ["Node.js", "Express.js", "REST APIs", "Zod", "React.js", "Tailwind CSS", "JavaScript"]
    },
    {
      id: "unstop-ca",
      role: "Campus Ambassador",
      company: "Unstop",
      location: "G.L. Bajaj Institute, Greater Noida",
      period: "2024 – Present",
      type: "Leadership",
      description: "Promoted technical culture, coding competitions, and hackathons across campus.",
      achievements: [
        "Organized and promoted 5+ technical events reaching over 1,000+ students across campus.",
        "Facilitated student participation in nationwide hackathons and skill assessments."
      ],
      skills: ["Community Building", "Event Organization", "Public Speaking", "Leadership"]
    }
  ] as Experience[],

  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "G.L. Bajaj Institute of Technology and Management",
      period: "Oct 2023 – Aug 2027 (Expected)",
      grade: "SGPA: 7.53",
      location: "Greater Noida, UP",
      highlights: [
        "Focused coursework in Data Structures, Web Development, DBMS, Networking & Operating Systems",
        "Active member of Technical & Coding Clubs"
      ]
    },
    {
      degree: "Intermediate (12th) — Science (PCM)",
      institution: "Saraswati Vidya Mandir",
      period: "2020 – 2022",
      grade: "75.6%",
      location: "Dhanbad, Jharkhand",
      highlights: ["Physics, Chemistry, Mathematics background with strong analytical foundation"]
    }
  ] as EducationItem[],

  codingStats: {
    leetcode: {
      username: "mryadav__70",
      totalSolved: 400,
      maxRating: 1505,
      globalRank: "Top 15%",
      easy: 95,
      medium: 250,
      hard: 55,
      contestsCount: 6,
      profileUrl: "https://leetcode.com/mryadav__70",
      topics: ["Sliding Window", "Two Pointers", "Hashing", "Sorting Algorithms", "Linked Lists", "Recursion", "Binary Search", "Trees", "Dynamic Programming"]
    },
    certifications: [
      {
        title: "Web Development Certificate",
        issuer: "100xDevs",
        date: "2024",
        credentialUrl: "#"
      }
    ],
    achievements: [
      {
        title: "Smart India Hackathon (SIH)",
        description: "Selected among Top 10 teams in Internal SIH out of all participating teams from G.L. Bajaj Institute.",
        year: "2024"
      },
      {
        title: "Unstop Campus Ambassador",
        description: "Promoted 5+ technical events reaching 1,000+ students across campus.",
        year: "2024"
      }
    ]
  }
};
