const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    port = 8383;

app.use(cors());
app.use(bodyParser.json());

require('./app/routes')(app);

app.listen(port, () => {
    console.log('We are live on http://localhost:' + port);
});