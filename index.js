const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const MV_URL =
  "https://www.migrationsverket.se/English/Contact-us/Check-your-application-without-logging-in.html";
const CASE_NUMBER = 52567092;

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get(MV_URL);
    await driver.findElement(By.css(`input[type="number"]`)).sendKeys(CASE_NUMBER, Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();