export const PORTFOLIO_DATA = {
  hero: {
    name: "Ahmad Habib Diaz Irfandi",
    role: "Web & Bot Developer | Network Infrastructure Enthusiast",
    tagline: "Crafting robust web systems, automating processes, and managing scalable networks.",
  },
  about: {
    bio: "I am a passionate developer specializing in backend architecture, API integration, and system administration. With a strong foundation in Linux (Ubuntu) environments, I build scalable solutions that bridge the gap between software and infrastructure. Whether it's developing complex payment systems, creating automated bots, or deploying robust servers, I thrive on solving technical challenges.",
  },
  skills: [
    { category: "Website", items: ["Laravel", "Filament PHP", "ReactJS", "NextJS", "VueJS"] },
    { category: "Database", items: ["MySQL", "MariaDB", "phpMyAdmin"] },
    { category: "Infrastructure", items: ["Linux Admin", "Nginx", "Docker", "Mikrotik", "Server maintenance"] },
  ],
  projects: [
    {
      id: 1,
      title: "Sistem Pembayaran SPP",
      description: "A comprehensive school tuition payment system built with Laravel and Filament PHP. Features automated WhatsApp reminders for pending payments.",
      tags: ["Laravel", "Filament PHP", "WhatsApp API", "MySQL"],
      icon: "Code"
    },
    {
      id: 2,
      title: "WhatsApp Bot System",
      description: "An automated WhatsApp bot using Node.js and Baileys library. Integrates with Tripay API for balance checking and includes a media downloader feature.",
      tags: ["Node.js", "Baileys", "Tripay API", "Automation"],
      icon: "Terminal"
    },
    {
      id: 3,
      title: "Linux Server Deployment",
      description: "End-to-end server setup and management. Includes Nginx configuration, LVM (Logical Volume Management), and database troubleshooting.",
      tags: ["Linux", "Nginx", "LVM", "SysAdmin"],
      icon: "Server"
    }
  ],
  contact: {
    email: "diazirfandi@hotmail.com", // Placeholder
    github: "https://github.com/DiazIrfandi",
    linkedin: "https://www.linkedin.com/in/ahmad-habib-6a90ba404/"
  }
};

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
  },
  slideUp: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
};