import fetch from 'node-fetch';
import cheerio from 'cheerio';

const URL = 'http://sarc.pucrs.br/Default/';
const format_time = (time) => (new Date().getDay() + 1) + time;

async function crawler() {
  const ans = [];

  const data = await fetch(URL);
  const html = await data.text();

  const $ = cheerio.load(html)('#ctl00_cphTitulo_UpdatePanel2 > div > table');

  for (let i = 0, l = $.length; i < l; i++) {
    let content    = cheerio.load($.eq(i).html());
    let time       = content('span').html();
    let table_data = content('.ms-btoolbar').children();
    for (let j = 0, l = table_data.length; j < l; j+=3) {
      let detail = {
        'time'     : format_time(time),
        'resource' : table_data.eq(j).text().trim(),
        'course'   : table_data.eq(j+1).text().trim(),
        'owner'    : table_data.eq(j+2).text().trim()
      };
      data.push(detail);
    }
  }
  return ans;
};

export default crawler;
