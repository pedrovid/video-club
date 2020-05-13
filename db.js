const Sequelize = require('sequelize');
const directorModel = require('./models/director')
const genreModel = require('./models/genre')
const movieModel = require('./models/movie')



const sequelize = new Sequelize('test1', 'root', 'secret', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

const Director = directorModel(sequelize, Sequelize);
const Genre = genreModel(sequelize, Sequelize);
const Movie = movieModel(sequelize, Sequelize);

Genre.hasMany(Movie, {as:'movies'});
Movie.belongsTo(Genre, {as:'genre'});

Director.hasMany(Movie, {as:'movies'});
Movie.belongsTo(Director, {as:'director'});

sequelize.sync({
  force:true
}).then(()=>{
  console.log('Db created');
})

/*sequelize.authenticate().then(()=>{
  console.log("Conexion OK");
}).catch(err => {
  console.log("Conexion Fallida");
});*/

module.exports= {
  Director, Genre, Movie
}
