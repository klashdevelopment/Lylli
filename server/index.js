var express = require('express');
var app = express();

app.get('/drpc', (req, res) => {

});

app.listen(7150, ()=>{
    console.log('Started Lylli Server');
})