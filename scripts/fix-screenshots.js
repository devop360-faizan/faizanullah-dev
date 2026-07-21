const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const projectsDir = path.join(__dirname, "../public/projects");

const problemSites = [
  { name: "nexusstudent", url: "https://nexusstudent.co.uk/" },
  { name: "paulswindowcleaning", url: "https://paulswindowcleaning.org/" },
  { name: "digistoredirect", url: "https://digistoredirect.com/" },
  { name: "moneyinfocus", url: "https://moneyinfocus.news/" },
];

async function fixScreenshots() {
  console.log("Launching Edge browser to re-capture problem screenshots...");
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

  for (const t of problemSites) {
    const dest = path.join(projectsDir, `${t.name}.png`);
    const page = await context.newPage();
    console.log(`\nNavigating to ${t.name}: ${t.url}`);
    try {
      await page.goto(t.url, { waitUntil: "networkidle", timeout: 60000 }).catch(async () => {
        console.log(`Networkidle timeout for ${t.name}, falling back to domcontentloaded...`);
        await page.goto(t.url, { waitUntil: "domcontentloaded", timeout: 60000 });
      });

      console.log(`Waiting 10 seconds for loaders/preloaders to dissipate...`);
      await page.waitForTimeout(10000);

      // Attempt to hide preloader overlays via JS evaluation if present
      await page.evaluate(() => {
        const loaders = document.querySelectorAll(
          "[class*='loader'], [id*='loader'], [class*='preloader'], [id*='preloader'], [class*='loading'], [id*='splash']"
        );
        loaders.forEach((el) => {
          // Only hide if fixed/absolute full overlay
          const style = window.getComputedStyle(el);
          if (style.position === "fixed" || style.position === "absolute") {
            el.style.display = "none";
          }
        });
      }).catch(() => {});

      // Scroll a little bit down and back up to trigger lazy load
      await page.evaluate(() => window.scrollBy(0, 300));
      await page.waitForTimeout(1000);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(1000);

      await page.screenshot({ path: dest, fullPage: false });
      const stats = fs.statSync(dest);
      console.log(`✔ Re-captured ${t.name}.png successfully (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✘ Error capturing ${t.name}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("\nRe-capture finished.");
}

fixScreenshots();
