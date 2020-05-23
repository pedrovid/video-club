const express = require('express');
const { Member } = require('../db')

//Todos los elementos / => list
function list(req, res, next) {
  Member.findAll({})
    .then(objects => res.json(objects));
}

//Un elemento /:id => index
function index(req, res, next) {
  const id = req.params.id;
  Member.findByPk(id, {})
    .then(object => res.json(object));
}

//Crea un elemento /create
function create(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  let member = new Object();
  member.name = req.body.name;
  member.last_name = req.body.last_name;
  member.address = req.body.address;
  member.phone = req.body.phone;
  member.status = req.body.status;
  Member.create(member)
      .then(member => res.json(member))
}

//Modifica un elemento /:id
function update(req, res, next) {
  const id = req.params.id;
  Member.findByPk(id, {})
    .then(object => {
      object.name = req.body.name ? req.body.name:object.name;
      object.last_name = req.body.last_name ? req.body.last_name:object.last_name;
      object.address = req.body.address ? req.body.address:object.address;
      object.phone = req.body.phone ? req.body.phone:object.phone;
      object.status = req.body.status ? req.body.status:object.status;
      object.update({'name':object.name,'last_name':object.last_name,
        'address':object.address,'phone':object.phone,'status':object.status})
        .then(object => res.json(object));
    });

}

//Eliminar un elemento /:id
function destroy(req, res, next) {
  const id = req.params.id;
  Member.destroy({ where:{ id:id } })
    .then(object => res.json(object));
}

module.exports = {
	list, index, create, update, destroy
}
