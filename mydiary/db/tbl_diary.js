import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_diary extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    d_seq: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    d_subject: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    d_content: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    d_date: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    d_time: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    d_image: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    d_author: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_diary',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "d_seq" },
        ]
      },
    ]
  });
  }
}
