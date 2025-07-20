import {
  backend,
  creator,
  css,
  fantasy,
  git,
  gql,
  hellocustom,
  html,
  javascript,
  laravel,
  logicsDrive,
  mcl,
  mobile,
  mysql,
  nextash,
  purelogics,
  reactjs,
  redux,
  sesDlc,
  shopify,
  techorix,
  techorixPNG,
  tetralogics,
  upwork,
  vue,
  web,
  banner
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Laravel Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "gql",
    icon: gql,
  },
  {
    name: "vue",
    icon: vue,
  },
];

const experiences = [
  {
    title: "Shopify App Developer (Laravel + React)",
    company_name: "Swishtag",
    icon: purelogics,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "At SwishTag, I’ve been building advanced Shopify apps using Laravel and React, with deep integration of AI technologies like ChatGPT. I handle full-stack development—from backend APIs and authentication to frontend dashboards.",
      "During my time here, I’ve contributed to the development of multiple AI-powered Shopify apps that improve customer interaction, collect user-generated content, and enhance store automation. I’ve also integrated ChatGPT into real-time support tools, designed scalable app structures, and delivered production-ready solutions used by active merchants",
    ],
  },
  {
    title: "Laravel Developer",
    company_name: "PureLogics",
    icon: techorix,
    iconBg: "#E6DEDD",
    date: "June 2022 - Jan 2023",
    points: [
      "At PureLogics, I returned to development with a focus on Laravel and API-based business applications. I was responsible for building scalable APIs, crafting backend logic, and creating reliable database structures.",
      "Working on diverse projects helped me mature as a backend developer. I learned to optimize queries, design modular codebases, and implement features that aligned with client requirements and performance goals.",
    ],
  },
  {
    title: "Freelance",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "Oct 2021 - Jan 2022",
    points: ["Laravel Developer"],
  },
  {
    title: "System Administrator",
    company_name: "Xavor Corporation",
    icon: logicsDrive,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Oct 2021",
    points: [
      "At Xavor Corporation, I transitioned into a technical support and infrastructure role as a System Administrator. I managed server configurations, monitored systems, and resolved performance issues across client platforms.",
      "This position helped me understand how things work behind the scenes—networks, server-side operations, and security management. I also gained confidence in client communication and troubleshooting under pressure",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Tetralogicx",
    icon: tetralogics,
    iconBg: "#E6DEDD",
    date: "July 2020 - Oct 2020 · 4 mos",
    points: [
      "As a frontend developer, I employ a variety of cutting-edge technologies, including jQuery, JavaScript, and Liquaid, to craft exceptional user experiences.",
      "My skill set allows me to develop responsive and scalable user interfaces that integrate seamlessly with back-end systems, ensuring a cohesive and robust web application.",
      "I am committed to continuous learning, regularly updating my skills and knowledge to stay in tune with the ever-evolving landscape of web development.",
    ],
  },
  {
    title: "Frontend Developer - Intern",
    company_name: "NexTash",
    icon: nextash,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Feb 2020 · 6 mos",
    points: [
      "During my three-month internship, I acquired valuable hands-on experience in company profile management and website development, providing me with a solid foundation in practical industry applications.",
      "I refined my skills in creating and managing company profiles and in building engaging, functional websites, enhancing my overall understanding of web development.",
      "This experience allowed me to develop strong project management and communication skills, alongside honing my technical abilities, making me a well-rounded professional in the web development sphere.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GoodAuthentic",
    description:
      "GoodAuthentic is a Shopify app that automates video testimonial collection from customers. It sends post-purchase emails with custom questions for video reviews. Merchants can approve or reject videos and reward customers with gift cards. This helps build trust with authentic UGC and boosts engagement effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
    ],
    image: banner,
    url_link: "https://apps.shopify.com/goodauthentic-ugc?st_source=autocomplete&surface_detail=autocomplete_apps",
  },
  {
    name: "SoleRank",
    description:
      "SoleRank is built for sneaker stores to improve their Google ad performance. It adds missing GTINs and optimizes product data for better discoverability. The app fixes limited performance issues in Google Merchant Center. With just a few clicks, merchants can boost visibility and drive more sales.",
    tags: [
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "polaris",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "red-text-gradient",
      },
    ],
    image: banner,
    url_link: "https://apps.shopify.com/solerank?st_source=autocomplete&surface_detail=autocomplete_apps",
  },
  {
    name: "Store Bot AI",
    description:
      "Store Bot AI is a smart chatbot that supports customers 24/7 using ChatGPT. It answers product and order queries and allows order cancellations directly in chat. Customers can also search products by name or collection. Merchants get chat analytics to track engagement and improve support.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: banner,
    url_link:
      "https://apps.shopify.com/store-bot-ai",
  },
  {
    name: "Melbourne City Limo",
    description:
      "Melbourne City Limo is one of the most reputable and reliable chauffeur service providers in Australia.",
    tags: [
      {
        name: "html",
        color: "red-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "php",
        color: "purple-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: mcl,
    url_link: "https://melbournecitylimo.com.au/",
  },
  {
    name: "Fantasy Supply Website",
    description: "Seamless e-commerce operations enabled for Fantasy Supply.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "shopify",
        color: "purple-text-gradient",
      },
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "liquid",
        color: "green-text-gradient",
      },
    ],
    image: fantasy,
    url_link: "https://fantasysupply.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };

