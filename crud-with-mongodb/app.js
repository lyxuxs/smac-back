const express = require("express");
const connectDB = require('./db');
const careerRouter = require("./routes/CareersRoutes");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const newsRoutes = require("./routes/NewsRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

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