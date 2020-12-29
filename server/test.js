const puppeteer = require('puppeteer');
const origin = '77001';
const destination = '10001';
const shippingDate = '12/30/2020';
const shippingTime = '19:59';

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // default is true
    const page = await browser.newPage();
    // Configure the navigation timeout
    // await page.setDefaultNavigationTimeout(0);

    await page.goto('https://postcalc.usps.com/')

    // Origin
    await page.type('#Origin', origin, { delay: 20 })
    // Destination
    await page.type('#Destination', destination, { delay: 20 })
    // Date
    // empty input
    await page.evaluate(function () {
        document.querySelector('#ShippingDate').value = ''
    })
    // enter value
    await page.type('#ShippingDate', shippingDate, { delay: 20 })
    // Time
    await page.select('#ShippingTime', shippingTime, { delay: 20 })
    // submit and wait for page loaded
    await page.click('form > #options-section #option_3')
    await page.waitForNavigation({ waitUntil: 'networkidle0' })


    await page.screenshot({ path: 'fullpage.png', fullPage: true })

    // const targetText = await page.$eval('#mail-services-sm-lg > div:nth-child(1) > div.col-sm-12.col-md-10 > h4', el => el.textContent);

    await browser.close();
})();
