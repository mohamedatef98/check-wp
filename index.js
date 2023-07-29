const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const MV_URL =
  "https://www.migrationsverket.se/English/Contact-us/Check-your-application-without-logging-in.html";
const CASE_NUMBER = 52567090;
const STATUS_BOX_SELECTOR = By.css('.information-box a');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get(MV_URL);
    await driver.findElement(By.css(`input[type="number"]`)).sendKeys(CASE_NUMBER, Key.RETURN);
    await driver.wait(until.elementLocated(STATUS_BOX_SELECTOR), 5000);
    const title = await driver.findElement(STATUS_BOX_SELECTOR).getText()
    console.log(title.trim().split(" "))
  } finally {
    await driver.quit();
  }
})();