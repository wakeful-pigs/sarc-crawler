const crawler =  require('./crawler');
const express = require('express');
const PORT = 3000;

//let crawler_handler = (err, data) => {
	//if(err) throw err;
	//console.log(data);
//};

//crawler(crawler_handler);

let root_handler = (req, res) =>{
	crawler((err, data) => {
		if(err) throw err;
		res.send(data);
	})
} 
let listen_handler = () => console.log(`Server running at: ${PORT}`);

var app = express();
app.get('/', root_handler);
app.listen(PORT, listen_handler)
