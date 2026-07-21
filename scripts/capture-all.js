const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const projectsDir = path.join(__dirname, "../public/projects");
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

const publicTargets = [
  { name: "nexusstudent", url: "https://nexusstudent.co.uk/" },
  { name: "lejabook", url: "https://lejabook.com/" },
  { name: "idaaassessment", url: "https://www.idaaassessment.com/" },
  { name: "usrarecurrency", url: "https://www.usrarecurrency.com/" },
  { name: "digistoredirect", url: "https://digistoredirect.com/" },
  { name: "henry-griffitts", url: "https://henry-griffitts.thebackendprojects.com/" },
  { name: "paulswindowcleaning", url: "https://paulswindowcleaning.org/" },
  { name: "smartworldkenya", url: "https://smartworldkenya.com/" },
  { name: "transitionthewarrior", url: "https://transitionthewarrior.org/" },
  { name: "moneyinfocus", url: "https://moneyinfocus.news/" },
];

const loginTargets = [
  {
    name: "anaq",
    url: "https://anaq.thebackendprojects.com/login",
    email: "anaq@yopmail.com",
    pass: "nova7401",
  },
  {
    name: "leadup",
    url: "http://staging.leadup.thebackendprojects.com/login",
    email: "leadup@yopmail.com",
    pass: "nmdp7788",
  },
];

async function runCapture() {
  console.log("Launching Edge browser...");
  const browser = await chromium.launch({
    channel: "msedge",
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });

  console.log("\n--- Capturing Public Sites ---");
  for (const t of publicTargets) {
    const dest = path.join(projectsDir, `${t.name}.png`);
    const page = await context.newPage();
    console.log(`Navigating to ${t.name}: ${t.url}`);
    try {
      await page.goto(t.url, { waitUntil: "domcontentloaded", timeout: 45000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: dest, fullPage: false });
      const stats = fs.statSync(dest);
      console.log(`✔ Saved ${t.name}.png (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✘ Error capturing ${t.name}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  console.log("\n--- Capturing Login Portals ---");
  for (const t of loginTargets) {
    const dest = path.join(projectsDir, `${t.name}.png`);
    const page = await context.newPage();
    console.log(`Navigating to ${t.name}: ${t.url}`);
    try {
      await page.goto(t.url, { waitUntil: "domcontentloaded", timeout: 45000 });
      await page.waitForTimeout(2000);

      // Find inputs
      const emailInput = await page.$("input[type='email'], input[name='email'], input[name='username'], input[name='login']");
      const passInput = await page.$("input[type='password'], input[name='password']");

      if (emailInput && passInput) {
        console.log(`Filling credentials for ${t.name}...`);
        await emailInput.fill(t.email);
        await passInput.fill(t.pass);

        const submitBtn = await page.$("button[type='submit'], input[type='submit'], button:has-text('Login'), button:has-text('Sign In')");
        if (submitBtn) {
          await Promise.all([
            page.waitForNavigation({ timeout: 15000, waitUntil: "domcontentloaded" }).catch(() => {}),
            submitBtn.click(),
          ]);
        }
      }
      await page.waitForTimeout(3000);
      await page.screenshot({ path: dest, fullPage: false });
      const stats = fs.statSync(dest);
      console.log(`✔ Saved ${t.name}.png post-login (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✘ Error logging into ${t.name}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("\nAll screenshot tasks completed!");
}

runCapture();
