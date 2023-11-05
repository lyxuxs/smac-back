const NewsModel = require("../models/News");

exports.getAllNews = async () => {
  return await NewsModel.find();
};

exports.createNews = async (news) => {
  return await NewsModel.create(news);
};
exports.getNewsById = async (id) => {
  return await NewsModel.findById(id);
};

exports.updateNews = async (id, news) => {
  return await NewsModel.findByIdAndUpdate(id, news);
};

exports.deleteNews = async (id) => {
  return await NewsModel.findByIdAndDelete(id);
};
