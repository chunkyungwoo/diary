import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_animal from "../db/tbl_animal.js";
import _tbl_baby from "../db/tbl_baby.js";
import _tbl_check from "../db/tbl_check.js";
import _tbl_diary from "../db/tbl_diary.js";
import _tbl_member from "../db/tbl_member.js";

export default function initModels(sequelize) {
  const tbl_animal = _tbl_animal.init(sequelize, DataTypes);
  const tbl_baby = _tbl_baby.init(sequelize, DataTypes);
  const tbl_check = _tbl_check.init(sequelize, DataTypes);
  const tbl_diary = _tbl_diary.init(sequelize, DataTypes);
  const tbl_member = _tbl_member.init(sequelize, DataTypes);

  return {
    tbl_animal,
    tbl_baby,
    tbl_check,
    tbl_diary,
    tbl_member,
  };
}
