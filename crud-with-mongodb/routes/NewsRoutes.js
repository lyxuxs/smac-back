const express = require("express");
const {
  getAllNews,
  createNews,
  getNewsById,
  updateNews,
  deleteNews,
} = require("../controllers/NewsController");

const router = express.Router();

router.route("/").get(getAllNews).post(createNews);
router.route("/:id").get(getNewsById).put(updateNews).delete(deleteNews);

module.exports = router;
