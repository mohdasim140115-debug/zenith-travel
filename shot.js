const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 700 } });
  await page.goto("http://localhost:3000/hotels/deluxe-houseboat-dal-lake", { waitUntil: "load", timeout: 30000 });
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 950));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: "C:/Users/AKCOMP~1/AppData/Local/Temp/claude/c--Users-AK-COMPUTER-SERVICES-Desktop-travel/ab8e56b2-13b5-4c72-99e2-a636c22c5efb/scratchpad/rooms-v3.png",
  });
  await browser.close();
  console.log("done");
})();
