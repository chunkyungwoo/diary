import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_baby extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    p_seq: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    p_weight: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    p_active: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    p_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    p_food: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    p_temperature: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    p_date: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    p_time: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    p_image: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    p_urine: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    p_ordure: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    p_sickness: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_baby',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "p_seq" },
        ]
      },
    ]
  });
  }
}
