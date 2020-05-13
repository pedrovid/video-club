const express = require('express');
const { Movie } = require('../db')


//Crea un elemento /create
function create(req, res, next) {
  let movie = new Object();
  movie.title = req.body.title;
  movie.genreId = req.body.genreId;
  movie.directorId = req.body.directorId;

  Movie.create(movie)
      .then(movie => res.json(movie))
      .catch(err => res.status(500).json({error:err}));
}

function list(req, res, next){
  Movie.findAll({})
    .then(objects => res.json(objects));
}


module.exports = {
create, list
}
