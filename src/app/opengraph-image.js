import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Faizan Ullah — Senior Backend Engineer & API Architect";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#090d16",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Glows */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#10b981",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Senior Backend Engineer & API Architect
          </span>
        </div>

        {/* Hero Title & Description */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "68px",
              fontWeight: 900,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Faizan Ullah
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#94a3b8",
              margin: 0,
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Specializing in PHP, Laravel, Node.js, Python Flask, microservices, high-throughput RESTful APIs, and SaaS development.
          </p>
        </div>

        {/* Tech Stack Badges & Domain */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1e293b",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {["PHP", "Laravel", "Node.js", "Python Flask", "MySQL", "REST APIs"].map((tech) => (
              <span
                key={tech}
                style={{
                  backgroundColor: "#1e293b",
                  color: "#cbd5e1",
                  fontSize: "18px",
                  fontWeight: 600,
                  padding: "8px 18px",
                  borderRadius: "8px",
                  border: "1px solid #334155",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#38bdf8",
            }}
          >
            faizanullah-dev.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
