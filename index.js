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

app.get('/hello/:id', function (req, res) {
    res.send({status:200,message:"Hello," + req.params.id})
})

app.get('/hello', function (req, res) {
    res.send({status:200,message:"Hello"})
})

app.get('/search', function (req, res) {
    const {s} = req.query;
    if(!s){
        res.send({status:500, error:true, message:"you have to provide a search"})

    }
    else{
    res.send({status:200, message:"ok", data:s})}
})


app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
  