var request = require('request');
var cheerio = require('cheerio');

url = 'http://sarc.pucrs.br/Default/';

request(url, function(error, response, html){
  if(!error) {
    var $ = cheerio.load(html);

    var children = $('.ms-btoolbar').children()
    for (i = 0; i < children.length; i++) {
       console.log(children.eq(i).text().trim());
    }
  }

})
