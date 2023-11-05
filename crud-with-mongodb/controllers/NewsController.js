const newsService = require("../services/NewsService");

exports.getAllNews = async (req, res) => {
  try {
    const news = await newsService.getAllNews();
    res.json({ data: news, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createNews = async (req, res) => {
  try {
    const news = await newsService.createNews(req.body);
    res.json({ data: news, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const news = await newsService.getNewsById(req.params.id);
    res.json({ data: news, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const news = await newsService.updateNews(req.params.id, req.body);
    res.json({ data: news, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const news = await newsService.deleteNews(req.params.id);
    res.json({ data: news, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
