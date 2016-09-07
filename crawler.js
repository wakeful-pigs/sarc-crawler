const request = require('request');
const cheerio = require('cheerio');

const URL = 'http://sarc.pucrs.br/Default/';

let requestHandler = (err, response, html) => {
	if(err)
		throw err;

	let statusCode = response.statusCode;
	if(statusCode !== 200)
		throw `Error ${statusCode}`;

	let $ = cheerio.load(cheerio.load(html)('#ctl00_cphTitulo_UpdatePanel2').html());

	let resources = $('div > table');
	for (let i = 0, l = resources.length; i < l; i++) {
		let content = cheerio.load(resources.eq(i).html());
		let horario = content('span').html();
		let table_data= content('.ms-btoolbar').children();
		for (let i = 0, l = table_data.length; i < l; i+=3) {
			let resource = table_data.eq(i).text().trim();
			let course   = table_data.eq(i+1).text().trim();
			let resp     = table_data.eq(i+2).text().trim();
			console.log(horario, resource, course, resp);
		}
	}
}
request(URL, requestHandler);
