const express = require('express');
const { Copy } = require('../db')

//Todos los elementos / => list
function list(req, res, next) {
  Copy.findAll({})
    .then(objects => res.json(objects));
}

//Un elemento /:id => index
function index(req, res, next) {
  const id = req.params.id;
  Copy.findByPk(id, {})
    .then(object => res.json(object));
}

//Crea un elemento /create
function create(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  let copy = new Object();
  copy.number = req.body.number;
  copy.format = req.body.format;
  copy.movie_id = req.body.movie_id;
  copy.estatus = req.body.estatus;
  Copy.create(copy)
      .then(copy => res.json(copy))
}

//Modifica un elemento /:id
function update(req, res, next) {
  const id = req.params.id;
  Copy.findByPk(id, {})
    .then(object => {
      copy.number = req.body.number ? req.body.number:object.number;
      copy.format = req.body.format ? req.body.format:object.format;
      copy.movie_id = req.body.movie_id ? req.body.movie_id:object.movie_id;
      copy.estatus = req.body.estatus ? req.body.estatus:object.estatus;
      object.update({'number':object.number,'format':object.format,'movie_id':object.movie_id,'estatus':object.estatus})
        .then(object => res.json(object));
    });

}

//Eliminar un elemento /:id
function destroy(req, res, next) {
  const id = req.params.id;
  Copy.destroy({ where:{ id:id } })
    .then(object => res.json(object));
}

module.exports = {
	list, index, create, update, destroy
}
