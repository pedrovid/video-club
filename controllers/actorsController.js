const express = require('express');
const { Actor } = require('../db')

//Todos los elementos / => list
function list(req, res, next) {
  Actor.findAll({})
    .then(objects => res.json(objects));
}

//Un elemento /:id => index
function index(req, res, next) {
  const id = req.params.id;
  Actor.findByPk(id, {})
    .then(object => res.json(object));
}

//Crea un elemento /create
function create(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  let actor = new Object();
  actor.name = req.body.name;
  actor.last_name = req.body.last_name;
  Actor.create(actor)
      .then(actor => res.json(actor))
}

//Modifica un elemento /:id
function update(req, res, next) {
  const id = req.params.id;
  Actor.findByPk(id, {})
    .then(object => {
      object.name = req.body.name ? req.body.name:object.name;
      object.last_name = req.body.last_name ? req.body.last_name:object.last_name;
      object.update({'name':object.name,'last_name':object.last_name})
        .then(object => res.json(object));
    });

}

//Eliminar un elemento /:id
function destroy(req, res, next) {
  const id = req.params.id;
  Actor.destroy({ where:{ id:id } })
    .then(object => res.json(object));
}

module.exports = {
	list, index, create, update, destroy
}
