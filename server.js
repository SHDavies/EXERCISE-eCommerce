var express = require('express'),
		cors = require('cors'),
		bodyParser = require('body-parser')

var app = express();

//////////////////Middleware//////////////////
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'));

app.post('/products',})

app.get('/products',})

app.delete('/products',})

app.put('/products',})


app.listen(3000, function() {
	console.log("Listening on port 3000");
});
