/* jshint indent: 2 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const users =  sequelize.define('users', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(191),
      allowNull: false,
      unique: true
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'users'
  });
  users.associate = function (models) {
    users.hasMany(models.carts,{
      foreignKey: 'id',
      targetKey : 'userId'
    });
    users.hasMany(models.invocies,{
      foreignKey: 'id',
      targetKey : 'userId'
    });
    users.hasOne(models.user_details,{
      foreignKey: 'id',
      targetKey : 'userId'
    });
  };
  return users;
};
