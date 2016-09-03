const request = require('request');
const cheerio = require('cheerio');

const URL = 'http://sarc.pucrs.br/Default/';

let requestHandler = (err, response, html) => {
	if(err)
		throw err;

	let statusCode = response.statusCode;
	if(statusCode !== 200)
		throw `Error ${statusCode}`;

	let $ = cheerio.load(html);
	let disciplinas = $('.ms-btoolbar').children();
	let horarios    = $('#ctl00_cphTitulo_UpdatePanel2' + '> div' + '> table')
		.find('.ms-bigcaption');

	for (let i = 0, l = horarios.length; i < l; i++) {
		let horario = horarios[i];
		if (horario.children.length !== 0) {
			console.log(horario.children[0].data);
		}
	}

	for (let i = 0, l = disciplinas.length; i < l; i+=3) {
		let disciplina = children.eq(i);
		console.log(disciplina.text().trim(), children.eq(i+1).text().trim(), children.eq(i+2).text().trim());
	}

}
request(URL, requestHandler);
