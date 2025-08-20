import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

// Rotas
app.use("/tasks", taskRoutes);

// Rota raiz só para teste de funcionamento
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "API rodando!" });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Backend rodando em http://localhost:${PORT}`));
