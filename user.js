const dbConn = require('../connectionDb').getConnection();
const { Sequelize, DataTypes,Model } = require('sequelize');
//const LiveClass = require('./liveClass');

class User extends Model {}

User.init({
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true
   },
   userid: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
//   publicId: {
//     type: DataTypes.STRING
//   },
//   status: {
//     type: DataTypes.STRING
//   },
//   isLoggedIn: {
//     type: DataTypes.BOOLEAN,
//     defaultValue : false
    
//   },
//   isFBLoginIn: {
//     type: DataTypes.BOOLEAN,
//     defaultValue : false
    
//   },
  name: {
    type: DataTypes.STRING
  },
//   uploadDate: {
//     type: DataTypes.DATE
//   },
//   city: {
//     type: DataTypes.STRING
//   },
  password: {
    type: DataTypes.STRING
  }
//   phoneNumber: {
//     type: DataTypes.STRING
//   }

}, {
  sequelize: dbConn, 
  modelName: 'User',
  tableName: 'user'
});

// User.belongsTo(LiveClass, {
//   foreignKey: 'userId'
// });

module.exports = User;