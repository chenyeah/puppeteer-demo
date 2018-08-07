const puppeteer = require('puppeteer');
const timeout = delay => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(1);
      } catch (e) {
        reject(0);
      }
    }, delay);
  });
};
let screenshot = async () => {
  const browser = await puppeteer.launch({
    // 若是手动下载的chromium需要指定chromium地址, 默认引用地址为 /项目目录/node_modules/puppeteer/.local-chromium/
    //  executablePath:"",
    //设置超时时间
    timeout: 15000,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: false,
    // 关闭headless模式, 会打开浏览器
    headless: false
  });
  const page = await browser.newPage();

  await page.goto('https://www.baidu.com/s?wd=羽叶blog');
  // 点击搜索框拟人输入 鬼才会想起

  // 回车
  await timeout(3000);
  /* var toThree = await page.$('#page > a:nth-child(3)');
  await toThree.click();
  await timeout(1000); */
  var toBlog = await page.$('#content_left>.result:nth-child(6) a');
  await toBlog.click();
  await timeout(4000);
  browser.close();
};

let n = 0;
function sleep() {
  n++;
  console.log(n);
  screenshot();
  if (n <= 50) {
    setTimeout(sleep, 30000);
  }
}
sleep();
