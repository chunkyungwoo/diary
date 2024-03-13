import express from "express";
import DB from "../models/index.js";
import moment from "moment";
import { upLoad } from "../modules/fileupload.js";
import { json } from "sequelize";

const DIARY = DB.models.tbl_diary;
const USER = DB.models.tbl_member;

const router = express.Router();

router.get("/input", async (req, res) => {
  const user = req.session.user;
  console.log("USER", user);
  const toDate = moment().format("YYYY-MM-DD");
  try {
    const m_id = user.m_id;
    const rows = await DIARY.findAll({ where: { d_author: m_id } });
    if (user) {
      return res.render("menu/diary", { rows, toDate });
    } else {
      return res.redirect("/users/login");
    }
  } catch (error) {
    return res.redirect("/users/login");
  }
});

router.post("/input", upLoad.single("d_image"), async (req, res) => {
  const imageFile = req?.file;
  const d_seq = req.query.seq;
  const id = req.session.user?.m_id;
  const user = req.session.user;

  console.log("USER");

  console.log(id);

  req.body.d_image = imageFile?.filename;
  req.body.d_author = id;

  await DIARY.create(req.body);
  // return res.json(req.body);
  return res.redirect("/menu/diary");
});

router.get("/:seq/get", async (req, res) => {
  const seq = req.params.seq;
  const row = await DIARY.findByPk(seq);
  return res.json(row);
});

router.get("get_new_date", async (req, res) => {
  const toDate = moment().format("YYYY-MM-DD");
  return res.json({ toDate });
});

// diarylist 라우터
router.get("/", async (req, res) => {
  const id = req.session.user?.m_id;
  try {
    const user = req.session.user;
    const list = await DIARY.findAll({ where: { d_author: id } });
    if (user) {
      return res.render("menu/diarylist", { list });
    }
  } catch (error) {
    return res.redirect("/users/login");
  }
});

router.get("/:seq/detail", async (req, res) => {
  const seq = req.params.seq;
  const row = await DIARY.findByPk(seq);
  // return res.json(row);
  return res.render("menu/diarydetail", { diary: row });
});

router.get("/:seq/delete", async (req, res) => {
  const d_seq = req.params.seq;
  await DIARY.destroy({ where: { d_seq } });
  return res.redirect("/menu/diary");
});

router.get("/:seq/update", async (req, res) => {
  const seq = req.params.seq;
  try {
    const row = await DIARY.findByPk(seq);
    const image = row.d_image;
    // return res.json(image);
    return res.render("menu/diary", { row, image });
  } catch (error) {
    return res.json(error);
  }
});

router.post(
  "/:seq/update",
  upLoad.single("d_image"),
  async (req, res) => {
    const seq = req.params.seq;
    const imageFile = req.file;
    req.body.d_author = req.session.user.m_id;
    req.body.d_image = imageFile?.filename;
    req.body.m_id = req.session.user.m_id;

    await DIARY.update(req.body, { where: { d_seq: seq } });
    return res.redirect("/menu/diary");
  }
);

export default router;
