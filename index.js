const express = require('express');
const connectToMongo = require('./db');

connectToMongo();

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.get('/login', (req, res) => {
   res.send('welcome to login page');
})

app.listen(port, () => {
   console.log("Example app listening at http://localhost:%s", port);
});