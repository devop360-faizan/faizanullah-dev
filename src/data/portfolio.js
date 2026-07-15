import {
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Cloud,
  Layout,
  Briefcase,
  Play,
  Users,
  Link2,
  Truck,
} from "lucide-react";

export const portfolioData = {
  profile: {
    name: "Faizan Ullah",
    role: "Backend Engineer",
    summary:
      "Dedicated Backend Engineer with expertise in PHP, Laravel, Node.js, and Python Flask. Passionate about building scalable systems, optimizing databases, and integrating AI to solve complex business problems.",
    contact: {
      email: "faizanullah.dev5@gmail.com",
      phone: "+923130056857",
      linkedin: "https://pk.linkedin.com/in/faizan-laravel-developer",
      github: "https://github.com/faizanullah-dev",
    },
  },
  skills: {
    expert: ["PHP", "Laravel", "RESTful APIs", "DB Optimization"],
    advanced: [
      "MySQL",
      "SQL",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Bitbucket",
      "Team Leadership",
    ],
    intermediate: [
      "Python Flask",
      "Node.js",
      "Express.js",
      "CodeIgniter",
      "JS",
      "jQuery",
      "HTML",
      "CSS",
      "Bootstrap",
      "React.js",
      "Payment APIs",
    ],
  },
  projects: [
    {
      title: "Lead Generation AI Chatbot",
      description:
        "Admins configure smart chatbots that engage site visitors, qualify leads, and auto-capture data. NLP engine in Python Flask integrated into Laravel admin panel.",
      tags: ["Laravel", "Python Flask", "AI/NLP", "AI Project"],
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "AI Assessment & Review System",
      description:
        "Users submit assessments; a Flask AI engine analyzes responses and returns personalized AI-generated reviews in real time via REST API.",
      tags: ["Laravel", "Python Flask", "LLM", "AI Project"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Booking.com-Inspired App API",
      description:
        "50% feature-parity hotel booking mobile app backend — listings, availability, search filters, Sanctum auth, reservations, and booking management.",
      tags: ["Laravel", "Sanctum", "MySQL", "Mobile API"],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Browser-Based Calling System",
      description:
        "Browser-to-browser calling via Twilio. Call logs, agent management, and real-time call status dashboard — entirely from a web interface.",
      tags: ["Laravel", "Twilio", "JavaScript", "SaaS"],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Weekly Cleaning Schedule System",
      description:
        "Cleaning business platform with weekly job scheduling, staff assignment, completion tracking, and automated QuickBooks invoicing.",
      tags: ["Laravel", "QuickBooks API", "MySQL", "SaaS"],
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: "Custom HRM + Machine Integration",
      description:
        "HRM system connected to a physical machine for real-time employee data capture. Custom modules process live hardware data for complete HR workflows.",
      tags: ["Laravel", "Hardware API", "MySQL", "ERP/HRM"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: "Office Attendance App API",
      description:
        "Internal mobile app backend for employee check-in/out and break logging. Full attendance reports, admin panel, and team management dashboard.",
      tags: ["Laravel", "REST API", "MySQL", "Mobile API"],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Glass Inspection & Installation",
      description:
        "Customers browse glass products, checkout with payment, and an installer is assigned and dispatched. Full end-to-end service booking and fulfillment.",
      tags: ["Laravel", "jQuery", "Bootstrap 5", "Web App"],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Mini eCommerce Store",
      description:
        "First complete project built during internship — product listing, cart, checkout, Stripe payments, and full order management panel, built from scratch.",
      tags: ["PHP", "jQuery", "Stripe", "Internship"],
      icon: <Link2 className="w-6 h-6" />,
    },
    {
      title: "Ride-Hailing App (Uber Clone)",
      description:
        "Comprehensive backend for a ride-hailing service. Driver and rider matching, real-time location tracking, and trip management.",
      tags: ["Laravel", "Python", "Microservices", "PostgreSQL"],
      icon: <Truck className="w-6 h-6" />,
    },
    {
      title: "Real-time Crypto Tracker",
      description:
        "Live cryptocurrency dashboard that tracks market prices, trends, and portfolio value updates using WebSockets and caching.",
      tags: ["Node.js", "WebSockets", "Redis", "React"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Inventory SaaS Platform",
      description:
        "Multi-tenant inventory management software tailored for small businesses. Track stock levels, generate barcodes, and handle supplier orders.",
      tags: ["Laravel", "MySQL", "Vue.js", "SaaS"],
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: "Video Streaming Platform",
      description:
        "On-demand video streaming backend supporting adaptive bitrate streaming, user subscriptions, and watch history.",
      tags: ["PHP", "FFmpeg", "MySQL", "Video"],
      icon: <Play className="w-6 h-6" />,
    },
    {
      title: "Multi-vendor Marketplace",
      description:
        "E-commerce platform allowing multiple vendors to manage their shops, products, and payouts securely using Stripe Connect.",
      tags: ["Laravel", "Stripe Connect", "PostgreSQL", "Marketplace"],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "E-Learning LMS",
      description:
        "Learning Management System backend with video lessons, quiz capabilities, progress tracking, and live Zoom class integration.",
      tags: ["Laravel", "Zoom API", "React.js", "EdTech"],
      icon: <Users className="w-6 h-6" />,
    },
  ],
  experience: [
    {
      role: "Senior Backend Developer",
      company: "Devop360 Technology",
      period: "March 2026 - Present",
      description:
        "Designed and developed scalable backend systems and RESTful APIs using PHP, Laravel, and Node.js. Led integration of third-party services like payment gateways and CRMs to improve workflow efficiency. Collaborated with frontend and product teams to deliver high-performance web applications on schedule.",
    },
    {
      role: "PHP Laravel Developer",
      company: "Tafsol Technologies",
      period: "August 2025 - March 2026",
      description:
        "Built and maintained backend features using Laravel with clean, scalable code architecture. Developed and integrated REST APIs supporting web and mobile applications. Optimized MySQL queries and database structures to improve performance.",
    },
    {
      role: "Laravel Developer (Mid Level)",
      company: "Backtik Solutions",
      period: "August 2024 - August 2025",
      description:
        "Developed backend modules and APIs using Laravel for client-facing web applications. Implemented third-party integrations to extend application functionality and automate workflows. Debugged and resolved backend issues, improving system stability and reliability.",
    },
    {
      role: "PHP CI Laravel Developer",
      company: "Bitlife Technologies (Nairobi County, Kenya Remote)",
      period: "January 2023 - June 2025",
      description:
        "Internship (Jan–June 2023): Backend development with CodeIgniter and Laravel PHP. Contract Year 1 (July 2023–June 2024): Built and maintained backend. Contract Year 2 (July 2024–June 2025): Led backend module development.",
    },
  ],
  education: [
    {
      degree: "BS Computer Science",
      institution: "ILMA University (Formerly IBT), Karachi",
      year: "2025 — Present",
    },
    {
      degree: "DAE – Computer Information Technology",
      institution: "Aptech MSG, Karachi",
      year: "Completed May 2023",
    },
    {
      degree: "Intermediate",
      institution: "Aptech MSG, Karachi",
      year: "2020",
    },
    {
      degree: "Matriculation – Science",
      institution: "BSEK, Karachi",
      year: "April 2019",
    },
  ],
};
