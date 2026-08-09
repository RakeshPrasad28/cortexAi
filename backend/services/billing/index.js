import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/billing.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8004;

app.use(express.json());
app.use("/",router)

app.get("/", (req, res) => {
  res.send("Hello from billing!");
});

app.listen(PORT, () => {
  console.log(`billing server is running on port ${PORT}`);
  connectDB();
});