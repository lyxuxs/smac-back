const express = require("express");
const cors = require("cors");
const connectDB = require('./db');
const careerRouter = require("./routes/CareersRoutes");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const newsRoutes = require("./routes/NewsRoutes");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('dotenv').config();

connectDB();

app.use(express.json());

app.use("/api/Carrers", careerRouter);
app.use("/api/News", newsRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;