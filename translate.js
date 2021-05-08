const fetch = require('node-fetch');
const path = require('path');
const {
  readdirSync,
  statSync,
  readFileSync,
  appendFileSync,
  unlinkSync,
  existsSync,
} = require('fs');

const dirDocs = './docs';
const dir = path.join(__dirname, dirDocs);

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function travel(dir, callback) {
  const dirs = readdirSync(dir);
  for (let i = 0; i < dirs.length; i++) {
    const file = dirs[i];
    const pathname = path.join(dir, file);
    if (statSync(pathname).isDirectory()) {
      await travel(pathname, callback);
    } else {
      await callback(pathname);
    }
  }
}

travel(dir, async function(pathname) {
  console.log('travel', pathname);
  if (path.extname(pathname) === '.md' && pathname.indexOf('en-US') < 0) {
    /* 随机 sleep 防止被 google 反爬虫 */
    await delay(parseInt(Math.random() * 3000 + 2000));

    const fileContent = readFileSync(pathname, { encoding: 'utf-8' });

    const enFilePath =
      pathname.slice(0, pathname.indexOf('.md')) +
      '.en-US' +
      pathname.slice(pathname.indexOf('.md'));

    if (existsSync(enFilePath)) {
      unlinkSync(enFilePath);
    }

    const url = `https://translate.googleapis.com/translate_a/single?oe=UTF-8&i=UTF-8&client=gtx&dt=t&hl=zh-CN&sl=zh-CN&tl=en&text=${encodeURIComponent(
      fileContent,
    )}`;

    // console.log('fetch~~~');
    // console.log('pathname=', pathname)
    // console.log(url);

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data && data[0]) {
        data[0].forEach(item => {
          if (item && item[0]) {
            appendFileSync(enFilePath, item[0]);
          }
        });
      }
    } catch (e) {
      console.log(pathname, 'translate failed.');
    }
  }
});
