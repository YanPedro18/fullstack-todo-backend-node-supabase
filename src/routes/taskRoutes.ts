import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleDone
} from "../controllers/taskController.js";

const router = express.Router();

// Listar todas as tasks
router.get("/", getTasks);

// Criar task
router.post("/", createTask);

// Editar task completa
router.put("/:id", updateTask);

// Marcar task como concluída (ou alternar done)
router.put("/:id/done", toggleDone);

// Deletar task
router.delete("/:id", deleteTask);

export default router;
