const express = require('express');
const app = express();
const PORT = 3001;
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
const sortedMovies = movies.sort((a,b) => {
    if (a.year !== b.year) return a.year - b.year;
  })
const sortedMoviesByRating = movies.sort((a,b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
  })

let title1=[];

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

app.get('/movies/create', function (req, res){
    res.send('create movies')
})

app.get('/movies/read', function (req, res){
    res.send({status:200, data: movies })
})

app.get('/movies/update' , function (req, res){
    res.send('update movies')
})

app.get('/movies/delete', function (req, res){
    res.send('delete movies')
})

app.get('/movies/read/by-date', function (req, res){
    res.send({status:200, data: sortedMovies })
})

app.get('/movies/read/by-rating', function (req, res){
    res.send({status:200, data: sortedMoviesByRating })
})

app.get('/movies/read/by-title', function (req, res){
    title1=movies.sort(function(a, b) {
     titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;});
    res.send({status:200, data: title1})
})




app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
  