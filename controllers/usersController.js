const express = require('express');
const User = require('../models/user')

//Todos los elementos / => list
function list(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  User.find().then(obj=>{
    res.status(200).json({
      message:"Usuarios del sistema",
      objs:obj
    })
  })
  .catch(err=>res.status(500).json({
    message:"Error al cargar los usuarios del sistema",
    objs:err
  }));
}

//Un elemento /:id => index
function index(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  const id = req.params.id;
  User.findOne({"_id":id}).then(obj=>{
    res.status(200).json({
      message:`Usuario del sistema con id = ${id}`,
      objs:obj
    })
  })
  .catch(err=>res.status(500).json({
    message:`Error al cargar los Usuario del sistema con id = ${id}`,
    objs:err
  }));
}
//Crea un elemento /create
function create(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  let email = req.body.email;
  let name = req.body.name;
  let lastName = req.body.lastName;
  let password = req.body.password;
  let user = new User({
    _email:email,
    _name:name,
    _lastName:lastName,
    _password:password
  });

  user.save().then((obj)=>{
    res.status(200).json({
      message:"Usuario creado correctamente",
      objs:obj
    })
  })
  .catch(err=>res.status(500).json({
    message:"no se pudo guardar el usuario",
    objs: err
  }));


}
//Modifica un elemento /:id
function update(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  res.render('index', { title: 'Mi app de video update' });
}
//Eliminar un elemento /:id
function destroy(req, res, next) {
  const id = req.params.id;
  User.remove({"_id":id}).then(obj=>{
    res.status(200).json({
      message:`Usuario del sistema con id = ${id}`,
      objs:obj
    })
  })
  .catch(err=>res.status(500).json({
    message:`Error al cargar los Usuario del sistema con id = ${id}`,
    objs:err
  }));
}

module.exports = {
	list, index, create, update, destroy
}
