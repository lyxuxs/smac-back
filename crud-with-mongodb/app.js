const express = require("express");
const cors = require("cors");
const connectDB = require('./db');
const careerRouter = require("./routes/CareersRoutes");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const router = require("./routes/router");
const newsRoutes = require("./routes/NewsRoutes");
const https = require("https");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');


// const options = {
//   key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
//   cert: fs.readFileSync("/srv/www/keys/chain.pem")
// };
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: ["http://salemalmakrani.net", "https://salemalmakrani.net", "http://admin.salemalmakrani.net", "https://admin.salemalmakrani.net"] }));//Add your front end url to avoid the cors error
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('dotenv').config();
app.use(function (req, res, next) {
  next(createError(404));
});
connectDB();

app.use(express.json());



app.use("/api/Carrers", careerRouter);
app.use("/api/News", newsRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use(router);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

});

module.exports = app;