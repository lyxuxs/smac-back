const express = require("express");

const {
  getAllCareers,
  createCareer,
  getCareerById,
  updateCareer,
  deleteCareer,
} = require("../controllers/CareerController");

const router = express.Router();

router.route("/").get(getAllCareers).post(createCareer);
router.route("/:id").get(getCareerById).put(updateCareer).delete(deleteCareer);

module.exports = router;
