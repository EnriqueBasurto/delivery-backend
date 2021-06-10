
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');

const { database } = require('./config');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3001);
app.use(session({
  secret: 'delivery',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.use(require('./src/routes'));
app.use('/tiendas', require('./src/routes/tiendas'));

// Starting
app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});

//sin express
/*const http = require('http');

const server =  http.createServer((req, res) => {
  res.status = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
});

server.listen(3000, () => {
  console.log('Serve on port 3000');
});*/

//express sin middlewares
/*const express =  require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Request get received')
})

app.post('/about', (req, res) => {
  res.send('Request post received')
})

app.put('/about', (req, res) => {
  res.send('Request put received')
})

app.delete('/about', (req, res) => {
  res.send('Request delete received')
})

app.listen( 3000, () => {
  console.log('serve on port 3000')
});*/
