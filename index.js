const crawler =  require('./crawler');

let crawler_handler = (err, data) => {
	if(err) throw err;
	console.log(data);
};

crawler(crawler_handler);
