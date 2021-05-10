const fetch = require('node-fetch');
const { readFileSync, appendFileSync, unlinkSync, existsSync } = require('fs');

async function trasnlate(pathname) {
  console.log('translate:', pathname);

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

    console.log(pathname, ' success.');
  } catch (e) {
    console.log(pathname, ' failed.');
  }
}

module.exports = trasnlate;
