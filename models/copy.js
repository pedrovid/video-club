module.exports = (sequelize, type) => {
  const Copy = sequelize.define('copies', {
    id:{type: type.INTEGER, primaryKey:true, autoIncrement:true},
    number: type.INTEGER,
    format: type.BOOLEAN,
    movie_id: type.INTEGER,
    status: type.BOOLEAN
  });
  return Copy
};
