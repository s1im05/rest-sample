const express   = require('express'),
    bodyParser  = require('body-parser'),
    app         = express(),
    port = 8000;

require('./app/routes')(app);

app.listen(port, () => {
    console.log('We are live on ' + port);
});