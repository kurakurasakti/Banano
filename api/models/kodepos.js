/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kodepos', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kelurahan: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    kecamatan: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    kabupaten: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    provinsi: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    kodepos: {
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
    tableName: 'kodepos'
  });
};
