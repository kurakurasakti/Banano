/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uploads', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image_name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING(191),
      allowNull: false
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
    tableName: 'uploads'
  });
};
