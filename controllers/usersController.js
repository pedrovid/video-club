const express = require('express');

//Todos los elementos / => list
function list(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  res.render('index', { title: 'Mi app de video list' });
}

//Un elemento /:id => index
function index(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  res.render('index', { title: 'Mi app de video index' });
}
//Crea un elemento /create
function create(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  res.render('index', { title: 'Mi app de video create' });
}
//Modifica un elemento /:id
function update(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  res.render('index', { title: 'Mi app de video update' });
}
//Eliminar un elemento /:id
function destroy(req, res, next) {
  //res.send('Aqui estaràn los usuarios de la app');
  res.render('index', { title: 'Mi app de video destroy' });
}

module.exports = {
	list, index, create, update, destroy
}
