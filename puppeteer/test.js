const resemble = require('resemblejs');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        await page.goto('https://8081-febecddbabdbfacfebedfdaefe.examlyiopb.examly.io/spring-mvc');
        // await page.goto('http://localhost:3000');
        await page.setViewport({
        width:1200,
        height:800,
        })
		
		await page.waitForSelector('#loginForm', {timeout : 1500});

        console.log('TESTCASE:test_case1:success');
    }
     catch(e){
		console.log('TESTCASE:test_case1:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
  
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        await page.goto('https://8081-febecddbabdbfacfebedfdaefe.examlyiopb.examly.io/spring-mvc');
        // await page.goto('http://localhost:3000');
        await page.setViewport({
        width:1200,
        height:800,
        })
		
		await page.waitForSelector('#loginForm', {timeout : 1500});
		await page.click('#signup');
		await page.waitForSelector('#signupForm', {timeout : 1500});
		
        console.log('TESTCASE:test_case2:success');
    }
     catch(e){
		console.log('TESTCASE:test_case2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
  
    (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        await page.goto('https://8081-febecddbabdbfacfebedfdaefe.examlyiopb.examly.io/spring-mvc');
        // await page.goto('http://localhost:3000');
        await page.setViewport({
        width:1200,
        height:800,
        })
		
		await page.waitForSelector('#loginForm', {timeout : 1500});
		await page.type('#email', 'admin');
		await page.type('#password', 'Admin@123');
		
        console.log('TESTCASE:test_case3:success');
    }
     catch(e){
		console.log('TESTCASE:test_case3:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();