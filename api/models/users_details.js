/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_details', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    namaDepan: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    namaBlakang: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    alamatSatu: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    alamatDua: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    kota: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    wilayah: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    kelurahan: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    kodepos: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    nomorTlp: {
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
    tableName: 'users_details'
  });
};
