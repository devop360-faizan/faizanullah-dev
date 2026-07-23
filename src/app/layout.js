import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://faizanullahtech.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Faizan Ullah — Senior Backend Engineer & API Architect",
    template: "%s | Faizan Ullah",
  },
  description:
    "Faizan Ullah is a Senior Backend Engineer & API Architect specializing in PHP, Laravel, Node.js, Python Flask, microservices, high-throughput RESTful APIs, and database optimization.",
  applicationName: "Faizan Ullah Portfolio",
  authors: [{ name: "Faizan Ullah", url: "https://faizanullahtech.com" }],
  generator: "Next.js",
  keywords: [
    "Faizan Ullah",
    "Faizan Ullah Developer",
    "Faizan Ullah Backend Engineer",
    "Faizan Ullah Laravel",
    "Faizan Ullah Pakistan",
    "faizanullahtech.com",
    "Senior Backend Engineer",
    "Backend Developer",
    "API Architect",
    "Laravel Developer",
    "PHP Developer",
    "Node.js Developer",
    "Python Flask Developer",
    "SaaS Backend Engineer",
    "REST API Architect",
    "High Throughput APIs",
    "Database Optimization Expert",
    "MySQL Optimization",
    "PostgreSQL Engineer",
    "Microservices Architect",
    "Backend Engineer Karachi",
    "Hire Laravel Developer Pakistan",
    "Remote Senior Backend Engineer",
    "Full Stack API Developer",
    "CRMLogy",
    "Leja Book",
    "Digistore Direct",
    "IDAA Assessment",
    "Devop360 Backend Developer",
  ],
  creator: "Faizan Ullah",
  publisher: "Faizan Ullah",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Faizan Ullah — Senior Backend Engineer & API Architect",
    description:
      "Portfolio of Faizan Ullah, Senior Backend Engineer specializing in Laravel, PHP, Node.js, Python Flask, high-throughput REST APIs, and database optimization.",
    url: siteUrl,
    siteName: "Faizan Ullah Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Faizan Ullah — Senior Backend Engineer & API Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faizan Ullah — Senior Backend Engineer & API Architect",
    description:
      "Senior Backend Engineer specializing in PHP, Laravel, Node.js, Python Flask, database optimization, and high-throughput RESTful APIs.",
    creator: "@faizanullahdev",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Faizan Ullah",
      alternateName: ["Faizan Ullah Dev", "Faizan Laravel Developer"],
      jobTitle: "Senior Backend Engineer & API Architect",
      worksFor: {
        "@type": "Organization",
        name: "Devop360 Technology",
      },
      url: siteUrl,
      sameAs: [
        "https://pk.linkedin.com/in/faizan-laravel-developer",
        "https://github.com/faizanullah-dev",
      ],
      email: "faizanullah.dev5@gmail.com",
      telephone: "+923130056857",
      knowsAbout: [
        "PHP",
        "Laravel",
        "Node.js",
        "Python Flask",
        "RESTful APIs",
        "Database Optimization",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "SaaS Architecture",
        "Microservices",
        "System Design",
      ],
      description:
        "Dedicated Backend Engineer with expertise in PHP, Laravel, Node.js, and Python Flask. Passionate about building scalable systems, high-throughput RESTful APIs, optimizing databases, and integrating AI.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Faizan Ullah Portfolio",
      description:
        "Official Portfolio of Faizan Ullah, Senior Backend Engineer & API Architect",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Faizan Ullah — Senior Backend Engineer & API Architect",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
