/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const  invoices = sequelize.define('invoices', {
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
    userDetailId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users_details',
        key: 'id'
      }
    },
    invoiceDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    invoiceCode: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    TotalBelanja: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    paid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(4),
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
    tableName: 'invoices'

  });
  invoices.associate = function (models) {
    invoices.belongsToMany(models.users,{
      foreignKey:'id',
      targetKey:'userId'
    });
    invoices.hasMany(models.invoice_details,{
      foreignKey:'id',
      targetKey:'invoiceId'
    })
  };
  return invoices;
};
