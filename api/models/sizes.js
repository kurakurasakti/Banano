/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sizes', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    bust: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    waist: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hip: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    length: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
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
    tableName: 'sizes'
  });
};
