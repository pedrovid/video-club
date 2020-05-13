const express = require('express');
const { Genre } = require('../db')

//Todos los elementos / => list
function list(req, res, next) {
  Genre.findAll({})
    .then(objects => res.json(objects));
}

//Un elemento /:id => index
function index(req, res, next) {
  const id = req.params.id;
  Genre.findByPk(id, {})
    .then(object => res.json(object));
}

//Crea un elemento /create
function create(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  let genre = new Object();
  genre.description = req.body.description;
  genre.status = req.body.status;
  Genre.create(genre)
      .then(genre => res.json(genre))
}

//Modifica un elemento /:id
function update(req, res, next) {
  const id = req.params.id;
  Genre.findByPk(id, {})
    .then(object => {
      object.description = req.body.description ?
          req.body.description:object.description;

      object.status = req.body.status ? req.body.status:object.status;
      object.update({'name':object.description,'last_name':object.status})
        .then(object => res.json(object));
    });

}

//Eliminar un elemento /:id
function destroy(req, res, next) {
  const id = req.params.id;
  Genre.destroy({ where:{ id:id } })
    .then(object => res.json(object));
}

module.exports = {
	list, index, create, update, destroy
}
