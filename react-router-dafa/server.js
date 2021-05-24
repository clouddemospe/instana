const express = require('express');
const cors = require('cors')
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.use(cors());

app.get('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(PORT, function () {
	console.log("Listening on port 8080");
});
