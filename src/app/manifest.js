export default function manifest() {
  return {
    name: "Faizan Ullah — Senior Backend Engineer & API Architect",
    short_name: "Faizan Ullah",
    description:
      "Official portfolio of Faizan Ullah, Senior Backend Engineer specializing in PHP, Laravel, Node.js, Python Flask, Microservices, and API Architecture.",
    start_url: "/",
    display: "standalone",
    background_color: "#090d16",
    theme_color: "#090d16",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/me.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
