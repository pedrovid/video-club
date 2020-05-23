const Sequelize = require('sequelize');
const directorModel = require('./models/director')
const genreModel = require('./models/genre')
const movieModel = require('./models/movie')
const actorModel = require('./models/actor')
const moviesActorsModel = require('./models/moviesactors')
const memberModel = require('./models/member')
const bookingsModel = require('./models/bookings')
const copyModel = require('./models/copy')


const sequelize = new Sequelize('test1', 'root', 'secret', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

const Director = directorModel(sequelize, Sequelize);
const Genre = genreModel(sequelize, Sequelize);
const Movie = movieModel(sequelize, Sequelize);
const Actor = actorModel(sequelize, Sequelize);
const MoviesActors = moviesActorsModel(sequelize, Sequelize);
const Member = memberModel(sequelize, Sequelize);
const Bookings = bookingsModel(sequelize, Sequelize);
const Copy = copyModel(sequelize, Sequelize);

Genre.hasMany(Movie, {as:'movies'});
Movie.belongsTo(Genre, {as:'genre'});

Director.hasMany(Movie, {as:'movies'});
Movie.belongsTo(Director, {as:'director'});

MoviesActors.belongsTo(Movie, {foreignKey:'movieId'});
MoviesActors.belongsTo(Actor, {foreignKey:'actorId'});

Bookings.belongsTo(Member, {foreignKey:'member_id'});
Bookings.belongsTo(Copy, {foreignKey:'copy_id'});

Movie.belongsToMany(Actor, {
  through: 'moviesActors',
  foreignKey:'actorId',
  as:'actors'
});

Actor.belongsToMany(Movie, {
  through: 'moviesActors',
  foreignKey:'movieId',
  as:'movies'
});

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
  Director, Genre, Movie, Actor, Member, Copy, Bookings
}
