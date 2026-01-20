export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  tags: string[];
  features: string[];
  image: string;
  linkLive: string;
  linkCode: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "ImageSearch Pro",
    role: "Frontend Developer",
    description:
      "A dynamic image discovery application powered by the Pixabay API. It features advanced asynchronous data fetching, infinite-style pagination with a 'Load more' system, and a polished UI with smooth scrolling and modal previews.",
    tags: ["JavaScript", "Axios", "Async/Await", "Vite", "SimpleLightbox"],
    features: [
      "Dynamic Pagination",
      "Smooth Scroll UX",
      "Secure API Integration",
      "Responsive Gallery Grid",
    ],
    image: "/imagesearch.png",
    linkLive: "https://buievska.github.io/goit-js-hw-12/",
    linkCode: "https://github.com/Buievska/goit-js-hw-12",
  },
  {
    id: 2,
    title: "NoteHub",
    role: "Full-Stack Developer",
    description:
      "A comprehensive note-taking web application designed for secure personal data management. I developed both the client-side interface and the server-side logic, implementing a robust authentication system and dynamic note organization.",
    tags: ["React", "Node.js", "JWT", "Express", "CSS3"],
    features: [
      "Secure User Authentication",
      "Full CRUD Functionality",
      "Real-time Search & Filtering",
      "State-driven User Interface",
    ],
    image: "/notehub.png",
    linkLive: "https://09-auth-hmms.vercel.app/",
    linkCode: "https://github.com/Buievska/09-auth",
  },
  {
    id: 3,
    title: "Watchcharm",
    role: "Team Lead & Full-Stack Developer",
    description:
      "A collaborative landing page project focused on practicing professional team workflows and semantic web development. As a Team Lead, I coordinated the development process and ensured technical consistency.",
    tags: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
    features: [
      "Responsive Web Design",
      "Agile Team Collaboration",
      "Git Workflow Mastery",
      "Pixel Perfect Layout",
    ],
    image: "/watchcharm.png",
    linkLive: "https://buievska.github.io/project-DreamTeam13/",
    linkCode: "https://github.com/Buievska/project-DreamTeam13",
  },
  {
    id: 4,
    title: "CosmoZoo Production",
    role: "Full-Stack Developer & Lead Designer",
    description:
      "The official digital platform for a Los Angeles-based creative studio. I spearheaded the entire process from custom UI/UX design to final deployment, creating a high-performance visual experience that showcases the studio`s portfolio in photo and video production.",
    tags: ["HTML5", "CSS3", "JavaScript", "Vite", "UI/UX Design"],
    features: [
      "Bespoke Visual Identity",
      "High-Resolution Media Portfolio",
      "Performance-Driven Architecture",
      "Fully Responsive Layout",
    ],
    image: "/cosmozoo-production.png",
    linkLive: "https://cosmozooproduction.com/",
    linkCode: "https://github.com/Buievska/cosmozoo-portfolio",
  },
  {
    id: 5,
    title: "Mebleria",
    role: "Team Lead & Full-Stack Developer",
    description:
      "A sophisticated e-commerce platform for a furniture retailer. This project focuses on modular web architecture and high-performance delivery using Vite. As Team Lead, I oversaw the modular code structure and synchronized the efforts of the development team.",
    tags: ["HTML5", "CSS3", "JavaScript", "Vite", "Git"],
    features: [
      "Modular Project Structure",
      "Responsive E-commerce UI",
      "Vite-Powered Build Tooling",
      "Collaborative Git Workflow",
    ],
    image: "/mebleria.png",
    linkLive: "https://buievska.github.io/js-shop-group-10/",
    linkCode: "https://github.com/Buievska/js-shop-group-10",
  },
  {
    id: 6,
    title: "Beverly Films",
    role: "Full-Stack Developer & Lead Designer",
    description:
      "A high-performance 'Coming Soon' landing page for a cinematography production house. I designed the visual identity and developed the site to establish a professional brand presence during the studio's pre-launch phase.",
    tags: ["HTML5", "CSS3", "JavaScript", "Vite", "UI/UX Design"],
    features: [
      "Brand Identity Integration",
      "Vite-Optimized Performance",
      "Fully Responsive Design",
      "Clean Minimalist Aesthetic",
    ],
    image: "/beverly-films.png",
    linkLive: "https://buievska.github.io/beverly_films/",
    linkCode: "https://github.com/Buievska/beverly_films",
  },
  {
    id: 7,
    title: "ToolNext",
    role: "Team Lead & Full-Stack Developer",
    description:
      "A robust marketplace for construction tool rentals. Leveraging Next.js 15 and React 19, the platform provides a seamless experience for both tool owners and renters. As Team Lead, I architected the feature-based structure and spearheaded the integration of advanced state management and server-side optimization.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Zustand", "React Query"],
    features: [
      "Feature-Based Architecture",
      "Complex Inventory Management",
      "Advanced Form Validation",
      "Server-Side State Syncing",
    ],
    image: "/toolnext.png",
    linkLive: "https://project-group-6-fronted.vercel.app/",
    linkCode: "https://github.com/Buievska/project_group_6_fronted",
  },
  {
    id: 8,
    title: "Interactive Portfolio System",
    role: "Full-Stack Developer & Lead Designer",
    description:
      "Comprehensive development of a personal portfolio platform using Next.js and TypeScript. The project includes a dynamic routing system for cases, secure integration with EmailJS, and a custom UI style library based on CSS Modules with Glassmorphism effects.",
    tags: ["Next.js", "TypeScript", "EmailJS", "CSS Modules", "UI/UX Design"],
    features: [
      "Dynamic Project Routing",
      "Secure Contact System",
      "Mobile-First Architecture",
      "Advanced CSS Micro-interactions",
    ],
    image: "/portfolio-main.png",
    linkLive: "https://portfolio-me-ruddy-phi.vercel.app/",
    linkCode: "https://github.com/Buievska/portfolio_me",
  },
];
