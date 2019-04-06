/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const products = sequelize.define('products', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    deskripsi: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    img1: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    img2: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    img3: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    categoryId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    stock: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    harga: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    diskon: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
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
    tableName: 'products'
  });
  products.associate = function (models) {
    products.hasMany(models.sizes,{
      foreignKey:'id',
      sourceKey:'productId'
    })
  }
};
