const express = require('express');
const app = express();
const PORT = 3001;

var today = new Date();
var time = today.getHours() + ":" + today.getSeconds();

app.get('/', (req, res) => {
  res.send('ok');
});


app.get('/test', function (req, res) {
    res.send('{status:200, message:"ok"}')
})

app.get('/time', function (req, res) {
    res.send({status:200, message:time})
})


app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
  