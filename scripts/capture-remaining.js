const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const projectsDir = path.join(__dirname, "../public/projects");

const targets = [
  { name: "nexusstudent", url: "https://nexusstudent.co.uk/" },
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

async function run() {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
  });

  for (const t of targets) {
    const dest = path.join(projectsDir, `${t.name}.png`);
    const page = await context.newPage();
    try {
      console.log(`Processing ${t.name}...`);
      await page.goto(t.url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(4000);
      await page.screenshot({ path: dest });
      console.log(`Saved ${t.name}.png`);
    } catch (e) {
      console.error(`Error on ${t.name}: ${e.message}`);
    } finally {
      await page.close();
    }
  }

  for (const t of loginTargets) {
    const dest = path.join(projectsDir, `${t.name}.png`);
    const page = await context.newPage();
    try {
      console.log(`Processing login for ${t.name}...`);
      await page.goto(t.url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(3000);

      // Log input HTML to debug if necessary
      const emailInput = await page.$("input[name='email'], input[type='email'], input[name='username']");
      const passInput = await page.$("input[name='password'], input[type='password']");

      if (emailInput && passInput) {
        await emailInput.fill(t.email);
        await passInput.fill(t.pass);
        await page.keyboard.press("Enter");
        await page.waitForTimeout(6000);
      } else {
        console.log(`Inputs not found for ${t.name}, taking login page screenshot.`);
      }

      await page.screenshot({ path: dest });
      console.log(`Saved ${t.name}.png`);
    } catch (e) {
      console.error(`Error logging into ${t.name}: ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("Done remaining captures.");
}

run();
