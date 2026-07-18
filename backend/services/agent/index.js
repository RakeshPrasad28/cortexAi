import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/agent.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/",router)
app.get("/", (req, res) => {
  res.send("Hello from agent!");
});

app.listen(PORT, () => {
  console.log(`Agent server is running on port ${PORT}`);
  connectDB();
});