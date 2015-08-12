var express = require('express'),
		cors = require('cors'),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose');

var app = express();

var productCtrl = require('./controllers/productCtrl');

//////////////////Middleware//////////////////
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'));

//////////////////Endpoints//////////////////
app.post('/products', productCtrl.create);

app.get('/products', productCtrl.read);

app.put('/products/:id', productCtrl.update);

app.delete('/products/:id', productCtrl.delete);

//////////////////Connections//////////////////
var mongoUri = 'mongodb://localhost:27017/ecommerce';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});


app.listen(3000, function() {
	console.log("Listening on port 3000");
});
