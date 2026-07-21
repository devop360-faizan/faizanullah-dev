const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectsDir = path.join(__dirname, "../public/projects");
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

const targets = [
  { name: "nexusstudent", url: "https://nexusstudent.co.uk/" },
  { name: "lejabook", url: "https://lejabook.com/" },
  { name: "idaaassessment", url: "https://www.idaaassessment.com/" },
  { name: "usrarecurrency", url: "https://www.usrarecurrency.com/" },
  { name: "digistoredirect", url: "https://digistoredirect.com/" },
  {
    name: "henry-griffitts",
    url: "https://henry-griffitts.thebackendprojects.com/",
  },
  { name: "paulswindowcleaning", url: "https://paulswindowcleaning.org/" },
  { name: "smartworldkenya", url: "https://smartworldkenya.com/" },
  { name: "transitionthewarrior", url: "https://transitionthewarrior.org/" },
  { name: "moneyinfocus", url: "https://moneyinfocus.news/" },
];

for (const t of targets) {
  const dest = path.join(projectsDir, `${t.name}.png`);
  console.log(`Capturing screenshot for ${t.name} (${t.url})...`);
  try {
    const cmd = `npx playwright screenshot --channel msedge --viewport-size "1440,900" --wait-for-timeout 4000 "${t.url}" "${dest}"`;
    execSync(cmd, { stdio: "inherit" });
    console.log(`Successfully saved ${t.name}.png`);
  } catch (err) {
    console.error(`Failed to capture ${t.name}:`, err.message);
  }
}

