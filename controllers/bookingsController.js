const express = require('express');
const { Bookings } = require('../db')

//Todos los elementos / => list
function list(req, res, next) {
  Bookings.findAll(
    {
      include:['member', 'copy']
    }
  )
    .then(objects => res.json(objects));
}

//Un elemento /:id => index
function index(req, res, next) {
  const id = req.params.id;
  Bookings.findByPk(id, {})
    .then(object => res.json(object));
}

//Crea un elemento /create
function create(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  let booking = new Object();
  booking.date = req.body.date;
  booking.last_name = req.body.last_name;
  booking.member_id = req.body.member_id;
  booking.copy_id = req.body.copy_id;
  Bookings.create(booking)
      .then(booking => res.json(booking))
}

//Modifica un elemento /:id
function update(req, res, next) {
  const id = req.params.id;
  Bookings.findByPk(id, {})
    .then(object => {
      let booking = new Object();
      object.date = req.body.date ? req.body.date:object.date;
      object.member_id = req.body.member_id ? req.body.member_id:object.member_id;
      object.copy_id = req.body.copy_id ? req.body.copy_id:object.copy_id;
      object.update({'date':object.date,'member_id':object.member_id, 'copy_id': object.copy_id})
        .then(object => res.json(object));
    });

}

//Eliminar un elemento /:id
function destroy(req, res, next) {
  const id = req.params.id;
  Bookings.destroy({ where:{ id:id } })
    .then(object => res.json(object));
}

module.exports = {
	list, index, create, update, destroy
}
