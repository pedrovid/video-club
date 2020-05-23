module.exports = (sequelize, type) => {
  const Bookings = sequelize.define('bookings', {
    id:{type: type.INTEGER, primaryKey:true, autoIncrement:true},
    date:{type: type.DATE, notNull:true},
    member_id: type.INTEGER,
    copy_id:type.INTEGER
  });
  return Bookings
};
