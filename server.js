const express = require("express");
const cors = require("cors");
require("dotenv").config();

const passport = require("passport");
require("./config/passport");

const connectDB = require("./config/db");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

/* DATABASE CONNECTION */
connectDB();

/* MIDDLEWARE */
app.use(cors({
  origin: "*", // Allow all origins (for development). In production, specify your frontend URL.
}));
app.use(express.json());
app.use(passport.initialize());

/* ROUTES */
const authRoutes = require("./routes/authRoutes");
const mbtiRoutes = require("./routes/mbtiRoutes"); // mbti routes

app.use("/api/auth", authRoutes);
app.use("/api/mbti", mbtiRoutes); // ✅ 

/* SWAGGER SETUP */
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CounselX API",
      version: "1.0.0",
      description: "API documentation for CounselX backend",
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"], // already correct
};

const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

/* ROOT REDIRECT */
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

/* SERVER */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ${process.env.BASE_URL || "http://localhost:5000"}`);
});