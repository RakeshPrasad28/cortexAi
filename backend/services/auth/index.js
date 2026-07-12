import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/",router)

app.get("/", (req, res) => {
  res.send("Hello from auth!");
});

app.listen(PORT, () => {
  console.log(`Auth server is running on port ${PORT}`);
  connectDB();
});