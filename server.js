var express = require('express'),
		cors = require('cors'),
		bodyParser = require('body-parser'),
		mongojs = require('mongojs');

var app = express();

//////////////////Middleware//////////////////
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'));

var db = mongojs('ecommerce', ['products']);

app.post('/products', function(req, res) {
	db.products.insert(req.body, function(err, response) {
		if (!err) {
			res.json(response);
		} else {
			res.status(500).json(err);
		}
	})
})

app.get('/products', function(req, res) {
	db.products.find(req.query, function(err, products) {
		if (!err) {
			res.json(products);
		} else {
			res.status(500).json(err);
		}
	})
})

app.delete('/products', function(req, res) {
	db.products.remove(req.query, function(err, response) {
		if (err) {
			res.status(500).json(err);
		} else {
			res.json(response);
		}
	})
})

app.put('/products', function(req, res) {
	console.log(req.query);
	console.log(req.body);
	db.products.update(req.query, req.body, function(err, response) {
		if (!err) {
			res.json(response);
		} else {
			res.status(500).json(err);
		}
	})
})


app.listen(3000, function() {
	console.log("Listening on port 3000");
});