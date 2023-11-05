const CareerModel = require("../models/Careers");

exports.getAllCareers = async () => {
  return await CareerModel.find();
};

exports.createCareer = async (career) => {
  return await CareerModel.create(career);
};
exports.getCareerById = async (id) => {
  return await CareerModel.findById(id);
};

exports.updateCareer = async (id, career) => {
  return await CareerModel.findByIdAndUpdate(id, career);
};

exports.deleteCareer = async (id) => {
  return await CareerModel.findByIdAndDelete(id);
};
