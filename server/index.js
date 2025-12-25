import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoutes from "./routes/analyze.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/analyze", analyzeRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
