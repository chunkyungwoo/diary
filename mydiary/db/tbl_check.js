import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_check extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    u_num: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    u_user: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    u_check: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    u_checkmark: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_check',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "u_num" },
        ]
      },
    ]
  });
  }
}
