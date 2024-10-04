const express = require("express");
const sslRoutes = require("./src/routes/sslRoutes");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/ssl", sslRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
