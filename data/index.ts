import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiGraphql,
  SiSolidity,
  SiWeb3Dotjs,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiFigma,
  SiReact as SiReactNative,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiRedux,
  SiDjango,
  SiRedis,
  SiMysql,
  SiFirebase,
  SiFlutter,
  SiNginx,
  SiPython,
  SiGo,
  SiRust,
  SiGit
} from "react-icons/si";
import { FaEthereum } from "react-icons/fa";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "/projects" },
  { name: "Experience", link: "#experience" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Contributing to Open Source Projects",
    description: "Giving Back",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Assimilate Cryptocurrency Platform (Assimilate.cc)",
    des: "• Full-stack platform for Assimilate cryptocurrency with key metrics analysis\n• Real-time data visualization: mindshare, market cap, holder distribution, sentiment ratings\n• Backend: Node.js, PostgreSQL, Prisma ORM for robust data management\n• Blockchain integration using Ether.js for seamless Web3 connectivity\n• Interactive Vue.js frontend with dynamic graphs and intuitive UI\n• Real-time LLM-powered chatbot for instant user support and insights\n• Deployed on AWS ensuring scalability and reliability",
    img: "/projects/projectAssimilate.png",
    images: [
      "/projects/projectAssimilate.png",
      "/projects/sentiment.png",
      "/projects/simCore.png",
      "/projects/simGraphs.png"
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/git.svg"],
    link: "https://assimilate.cc/",
  },
  {
    id: 2,
    title: "Assimilate News Platform (Assimilate.news)",
    des: "• Full-stack news platform delivering real-time updates and community insights\n• Backend: Node.js and PostgreSQL for efficient content management\n• React.js frontend with modern, minimalist UI and smooth navigation\n• Dynamic content rendering focused on readability and user engagement\n• PostHog integration for in-depth user analytics and behavior tracking\n• Deployed on AWS for scalability and high availability across devices",
    img: "/projects/asmNews.png",
    images: [
      "/projects/asmNews.png",
      "/projects/asmNews2.png"
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/git.svg"],
    link: "https://assimilate.news/",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    des: "• Complete ecommerce platform from signup to checkout\n• Firebase authentication for secure user verification\n• React Router for seamless navigation across all pages\n• Various React hooks and Firebase for efficient database management\n• GitHub for version control and collaborative development",
    img: "/projects/portfolio1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/git.svg"],
    link: "https://e-commerce-project-mauve.vercel.app/",
  },
  {
    id: 4,
    title: "Ethereum Transfer Portal Web3.0",
    des: "• Web3.0 application for sending and receiving Ethereum cryptocurrency\n• MetaMask wallet integration for secure transactions\n• Smart contract on blockchain developed using Solidity\n• React and Tailwind CSS for modern, responsive frontend\n• Ethers.js library for seamless transactions on Ethereum mainnet",
    img: "/projects/Screenshot (148).png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/git.svg"],
    link: "https://web-3-0-project-1.vercel.app/",
  },
  {
    id: 5,
    title: "Expense Tracker",
    des: "• Comprehensive expense tracker with add, delete, and update functionality\n• Premium features: dark mode and expense download capability\n• Redux for efficient state management across the application\n• Firebase for database and authentication services\n• GitHub for version control and code management",
    img: "/projects/portfolio2.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/git.svg"],
    link: "https://expense-tracker-ashy-three.vercel.app/",
  },
  {
    id: 6,
    title: "Mail Box - Client",
    des: "• Mailbox application for sending, reading, updating, receiving, and deleting mails\n• Firebase for secure database and authentication management\n• Redux for centralized state management\n• Custom hooks implementation for reusable logic\n• Deployed on Vercel for fast, reliable hosting",
    img: "/projects/portfolio3.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/git.svg"],
    link: "https://mailbox-client-project.vercel.app/",
  },
  {
    id: 7,
    title: "Restaurant Site",
    des: "• Functional website to order from restaurant menu\n• Context API for efficient state management\n• React useState hooks for component-level state\n• GitHub for version control\n• Deployed on Vercel for seamless user experience",
    img: "/projects/portfolio4.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/git.svg"],
    link: "https://restaurant-site-gamma.vercel.app/",
  },
  {
    id: 8,
    title: "Music-Listener like Spotify",
    des: "• Spotify clone for music listening experience\n• Built with HTML, CSS, and JavaScript\n• GitHub for version control\n• Deployed on Vercel for easy access",
    img: "/projects/istockphoto-1138180728-612x612.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/git.svg"],
    link: "https://spotify-clone-tau-ashen.vercel.app/",
  },
  {
    id: 9,
    title: "Sentinel Core",
    des: "• Full-stack platform for blockchain analytics and insights\n• Real-time data processing and visualization\n• Modern UI with responsive design\n• Deployed for high performance and scalability",
    img: "/projects/sentinel-core.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/git.svg"],
    link: "https://thesentinelcore.com/",
  },
  {
    id: 10,
    title: "NFT Marketplace",
    des: "• NFT marketplace playground for minting and trading NFTs\n• User account setup and management system\n• XRP (XRP Ledger) integration for blockchain transactions\n• Frontend: Next.js with Tailwind CSS for modern, responsive UI\n• Backend: Express.js with XRPL ledger for blockchain operations\n• Complete navigation: all pages in navbar, footer with profile, favorites, FAQ\n• Side dashboard with explore more features\n• GitHub for version control and collaborative development\n• Deployed on Vercel for seamless user experience",
    img: "/projects/nft-marketplace-1.png",
    images: [
      "/projects/nft-marketplace-1.png",
      "/projects/nft-marketplace-2.png",
      "/projects/nft-marketplace-3.png",
      "/projects/nft-marketplace-4.png"
    ],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/git.svg"],
    link: "https://nft-marketplace-eight-hazel.vercel.app/",
  },
  {
    id: 11,
    title: "BeTimeful - News Feed Eradicator",
    des: "• Full-stack development of BeTimeful app and web extension platform\n• World's only News Feed Eradicator for social media and YouTube\n• Cross-platform solution: iOS app, Android app, Chrome extension, Safari extension\n• Core features: Block distracting apps, remove news feeds, timed breaks system\n• Screen time tracking and analytics for iOS and Android devices\n• Difficulty modes: Normal mode and Timeout mode for break management\n• Feedless YouTube and Instagram experience without ads or distractions\n• User can message, post, and learn without getting distracted\n• Fully block or partially block social media apps with timed break access\n• Real-time screen time reports and progress tracking\n• Built for productivity and mental health improvement\n• Deployed and accessible across all devices (mobile, iPad, desktop)",
    img: "/projects/betimeful-1.png",
    images: ["/projects/betimeful-1.png"],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/git.svg"],
    link: "https://www.betimeful.com/",
  },
  {
    id: 12,
    title: "Bhaobhao - Pet Service Booking Platform",
    des: "• Full-stack pet service booking platform similar to UrbanCompany\n• Multi-role system: User panel, Admin panel, and Groomer panel\n• Complete booking system for pet grooming and care services\n• User features: Browse services, book appointments, track bookings, payment integration\n• Admin panel: Manage services, users, groomers, bookings, and platform analytics\n• Groomer panel: Accept/reject bookings, manage schedule, view assigned appointments\n• Real-time booking status updates and notifications\n• Service management: Add, edit, and manage pet care services\n• User authentication and role-based access control\n• Booking calendar and scheduling system\n• Payment gateway integration for seamless transactions\n• Responsive design for web and mobile devices\n• Deployed and live for pet service bookings",
    img: "/projects/bhaobhao-1.png",
    images: ["/projects/bhaobhao-1.png", "/projects/bhaobhao-2.png"],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/git.svg"],
    link: "https://app.bhaobhao.in/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    role: "Fullstack Developer",
    company: "Jumpfast Technologies",
    period: "Jan 2024 - Present",
    icon: "/exp1.svg",
    description: [
      "Designed and developed full-stack management systems serving 500+ to 100K+ users with SQL database architecture",
      "Built scalable enterprise dashboards using Django and Bootstrap for large-scale data management",
      "Developed React Native mobile applications with responsive UI and seamless API integration",
      "Created WhatsApp business automation flows for international clients, streamlining communication workflows",
      "Worked with cloud platforms (AWS/GCP/Azure) for deployment, scaling, and infrastructure management",
      "Led complete project lifecycles from requirements gathering to production deployment under tight deadlines",
      "Conducted technical training sessions and presented solutions to stakeholders",
    ],
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Lindustries Pvt. Ltd.",
    period: "Jun 2023 - Dec 2023",
    icon: "/exp2.svg",
    description: [
      "Built NFT Marketplace using Next.js, TypeScript, TailwindCSS, and XRPL Ledger",
      "Developed responsive UI ensuring seamless cross-platform desktop and mobile performance",
      "Integrated Web3 technologies including XRP Ledger, XXUM Wallet, and IPFS decentralized storage",
      "Collaborated in agile sprints, daily standups, and retrospectives to ensure efficient project delivery",
    ],
  },
  {
    id: 3,
    role: "Frontend React Developer",
    company: "Coding Tribes",
    period: "Mar 2023 - Jun 2023",
    icon: "/exp3.svg",
    description: [
      "Migrated company website from WordPress to modern React architecture with Firebase backend",
      "Implemented Redux state management and developed new UI features, increasing customer traffic by 75%",
      "Contributed to browser extension development with focus on user experience and performance optimization",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/AyushGupta-0",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/ayushgupta",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ayush-gupta-2276b221b/",
  },
];

export const techStackTop = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
];

export const techStackBottom = [
  { name: "Solidity", icon: SiSolidity, color: "#363636" },
  { name: "Web3.js", icon: SiWeb3Dotjs, color: "#F16822" },
  { name: "Ethers.js", icon: FaEthereum, color: "#627EEA" },
  { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "React Native", icon: SiReactNative, color: "#61DAFB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Rust", icon: SiRust, color: "#FFFFFF" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];
