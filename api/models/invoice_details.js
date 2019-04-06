/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoice_details', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    invoiceId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'invoices',
        key: 'id'
      }
    },
    cartId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'carts',
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
    tableName: 'invoice_details'
  });
};
