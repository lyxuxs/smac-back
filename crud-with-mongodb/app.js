const express = require("express");
const cors = require("cors");
const connectDB = require('./db');
const careerRouter = require("./routes/CareersRoutes");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const router = require("./routes/router");
const newsRoutes = require("./routes/NewsRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('dotenv').config();

connectDB();

app.use(express.json());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://salemalmakrani.net');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use("/api/Carrers", careerRouter);
app.use("/api/News", newsRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

});

module.exports = app;