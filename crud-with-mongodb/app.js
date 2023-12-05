const express = require("express");
const cors = require("cors");
const connectDB = require('./db');
const careerRouter = require("./routes/CareersRoutes");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const router = require("./routes/router");
const newsRoutes = require("./routes/NewsRoutes");
const https = require("https"),
  fs = require("fs");

// const options = {
//   key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
//   cert: fs.readFileSync("/srv/www/keys/chain.pem")
// };
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('dotenv').config();

connectDB();

app.use(express.json());

const corsOptions = {
  origin: 'https://salemalmakrani.net',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.use("/api/Carrers", careerRouter);
app.use("/api/News", newsRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use(router);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

});

module.exports = app;