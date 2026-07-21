const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const projectsDir = path.join(__dirname, "../public/projects");

const targets = [
  { name: "digistoredirect", url: "https://digistoredirect.com/" },
  { name: "paulswindowcleaning", url: "https://paulswindowcleaning.org/" },
  { name: "moneyinfocus", url: "https://moneyinfocus.news/" },
];

async function run() {
  const browser = await chromium.launch({
    channel: "msedge",
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  });

  for (const t of targets) {
    const page = await context.newPage();
    const dest = path.join(projectsDir, `${t.name}.png`);
    console.log(`\n=== Debugging & Capturing ${t.name} (${t.url}) ===`);

    try {
      await page.goto(t.url, { waitUntil: "domcontentloaded", timeout: 45000 });
      console.log(`Page title: ${await page.title()}`);

      // Wait 8 seconds for JS scripts to execute
      await page.waitForTimeout(8000);

      // Inspect and forcibly destroy any preloader/loading overlays
      const removedCount = await page.evaluate(() => {
        let count = 0;
        // Search all elements in body
        const allElements = Array.from(document.querySelectorAll("body *"));
        allElements.forEach((el) => {
          const style = window.getComputedStyle(el);
          const className = (el.className || "").toString().toLowerCase();
          const id = (el.id || "").toString().toLowerCase();

          const isLoaderText =
            className.includes("loader") ||
            className.includes("loading") ||
            className.includes("preloader") ||
            className.includes("splash") ||
            id.includes("loader") ||
            id.includes("loading") ||
            id.includes("preloader") ||
            id.includes("splash");

          const isFixedOverlay =
            (style.position === "fixed" || style.position === "absolute") &&
            parseInt(style.zIndex, 10) > 100 &&
            (parseInt(style.width, 10) > 300 || style.width.includes("100%"));

          if (isLoaderText || isFixedOverlay) {
            el.style.setProperty("display", "none", "important");
            el.style.setProperty("opacity", "0", "important");
            el.style.setProperty("visibility", "hidden", "important");
            count++;
          }
        });
        return count;
      });

      console.log(`Hidden/Removed ${removedCount} potential overlay elements.`);

      // Ensure body overflow is auto/scrollable
      await page.evaluate(() => {
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
      });

      // Scroll slightly down to trigger lazy images
      await page.evaluate(() => window.scrollBy(0, 400));
      await page.waitForTimeout(1500);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(1500);

      await page.screenshot({ path: dest });
      const stats = fs.statSync(dest);
      console.log(`✔ Saved ${t.name}.png (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✘ Error on ${t.name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("\nDebug capture complete.");
}

run();
