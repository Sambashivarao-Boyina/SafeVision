const express = require("express");
const app = express();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL (React Vite)
    credentials: true,
  })
);

async function main() {
  await mongoose.connect(process.env.MONGO_DB_URL);
}

main().then(() => {
  console.log("Connected to Database");
});



app.get("/", (req, res) => {
    res.json({ message: "Welcome to SafeVision" });
})



app.listen(PORT, () => {
    console.log(`server is listening under port ${PORT}`);
    
})