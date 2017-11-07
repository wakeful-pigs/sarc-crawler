import fetch from 'node-fetch'
import cheerio from 'cheerio'

const URL = 'http://sarc.pucrs.br/Default/'
const formatTime = (time) => (new Date().getDay() + 1) + time

async function crawler () {
  const ans = []

  const data = await fetch(URL)
  const html = await data.text()

  const $ = cheerio.load(html)('#ctl00_cphTitulo_UpdatePanel2 > div > table')

  for (let i = 0, l = $.length; i < l; i++) {
    const content = cheerio.load($.eq(i).html())
    const time = content('span').html()
    const tableData = content('.ms-btoolbar').children()
    for (let j = 0, l = tableData.length; j < l; j += 3) {
      let detail = {
        'time': formatTime(time),
        'resource': tableData.eq(j).text().trim(),
        'course': tableData.eq(j + 1).text().trim(),
        'owner': tableData.eq(j + 2).text().trim()
      }
      ans.push(detail)
    }
  }
  return ans
};

export default crawler
