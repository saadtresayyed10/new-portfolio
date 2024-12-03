import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saad Sayyed",
  initials: "DV",
  url: "https://sayyedsaad.vercel.app",
  location: "Maharashtra, IN",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "I am a Web Developer, Software Engineer, Gothic Architect and Fashion Designer. I love creating art pieces so come on over and tune in with my work!",
  summary:
    "I am a working web developer and also I have my own agency called [Groven](https://groven-portfolio.vercel.app) that offers many services to solve janky mundane problems. I am an architect as well that is building, designing and working on revival of [Gothic Cathedrals](https://www.stpatrickspune.in/) in my town. I am very much drowned in the fashion industry, so I create avant-garde outfits which are heavily inspired from [Rick Owens, Comme Des Garcon, Vetements, Maison Margiela and things of that nature](https://www.rickowens.eu/en/IN).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Springboot",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Express",
    "Python",
    "Go",
    "Postgres",
    "MySQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "C",
    "TailwindCSS",
    "Github",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://sayyedsaad-blog.vercel.app",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "saadsyed950@gmail.com",
    tel: "+917887630243",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saadtresayyed10/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saad-sayyed-trev/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/trEvoR7223",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@stealthgamingsf5909",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Groven",
      badges: [],
      href: "https://groven-portfolio.vercel.app",
      location: "Pune",
      title: "CEO/Software Engineer",
      logoUrl: "/groven.png",
      start: "September 2024",
      end: "Forever",
      description:
        "Architected and wrote the MVP of the SaaS Barber application internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python. Implemented a custom Docker controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "nXtribe: Making Way for Success",
      href: "http://nxtribe.com/",
      badges: [],
      location: "Remote",
      title: "Fullstack Web Developer",
      logoUrl: "/nxtribe.png",
      start: "Nov 2024",
      end: "Current Contract",
      description:
        "Revamped the old website with an enhancing modern era touch. Designed and implemented logic to Blogs section.",
    },
  ],
  education: [
    {
      school: "Savitribai Phule Pune University",
      href: "http://www.unipune.ac.in/",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "/savitri.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Yale University",
      href: "https://www.yale.edu/",
      degree: "Majors in Gothic Architecture",
      logoUrl: "/yale.png",
      start: "2024",
      end: "2030",
    },
    {
      school: "University of Michigan",
      href: "https://umich.edu/",
      degree: "Specialization in AIDS & AIML",
      logoUrl: "/michi.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "The Museum of Modern Art",
      href: "https://www.moma.org/",
      degree: "Fashion as Design",
      logoUrl: "/moma.png",
      start: "2024",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
