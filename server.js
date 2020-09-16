const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const productsController = require("./controllers/productsRoutes");
const reviewsController = require("./controllers/reviewsRoutes");
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use("/api/products", productsController);
app.use("/api/reviews", reviewsController);
app.set("port", process.env.PORT || 8080);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
