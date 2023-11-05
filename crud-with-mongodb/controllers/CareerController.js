const careerService = require("../services/CareerService");

exports.getAllCareers = async (req, res) => {
  try {
    const careers = await careerService.getAllCareers();
    res.json({ data: careers, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCareer = async (req, res) => {
  try {
    const career = await careerService.createCareer(req.body);
    res.json({ data: career, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCareerById = async (req, res) => {
  try {
    const career = await careerService.getCareerById(req.params.id);
    res.json({ data: career, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCareer = async (req, res) => {
  try {
    const career = await careerService.updateCareer(req.params.id, req.body);
    res.json({ data: career, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCareer = async (req, res) => {
  try {
    const career = await careerService.deleteCareer(req.params.id);
    res.json({ data: career, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
