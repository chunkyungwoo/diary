import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_animal extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    a_seq: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    a_active: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    a_date: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    a_time: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    a_subject: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    a_content: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    a_image: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    a_food: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    a_weight: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_animal',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "a_seq" },
        ]
      },
    ]
  });
  }
}
