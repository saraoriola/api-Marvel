const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;

const { dbConnection } = require("./config/config");
dbConnection();

app.use(express.json());

app.use(cors());

app.use("/movies", require("./routes/movies"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
