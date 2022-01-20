const puppeteer = require('puppeteer');



(async () => {
  const browser = await puppeteer.launch( { headless: false});
  const page = await browser.newPage();
  await page.goto('https://www2.correios.com.br/sistemas/buscacep/buscaEndereco.cfm');

  await page.type('[id="cep"]', " 07051000")

  await page.click('[type="submit"]')

  // await browser.close();
})(); 