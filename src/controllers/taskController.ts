import type { Request, Response } from "express";
import * as taskService from "../services/taskService.js";

// Listar todas as tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json({ success: true, data: tasks, message: "Tasks fetched successfully" });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err?.message || "Internal server error" });
  }
};

// Criar uma nova task
export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json({ success: true, data: task, message: "Task created successfully" });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err?.message || "Bad request" });
  }
};

// Atualizar uma task existente
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await taskService.updateTask(Number(id), req.body);
    res.status(200).json({ success: true, data: task, message: "Task updated successfully" });
  } catch (err: any) {
    if (err?.message?.includes("Record to update not found")) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }
    res.status(400).json({ success: false, message: err?.message || "Bad request" });
  }
};

// Alternar/Marcar como concluída
export const toggleDone = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { done } = req.body;
    const task = await taskService.toggleDone(Number(id), done);
    res.status(200).json({ success: true, data: task, message: "Task status updated successfully" });
  } catch (err: any) {
    if (err?.message?.includes("Record to update not found")) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }
    res.status(400).json({ success: false, message: err?.message || "Bad request" });
  }
};

// Deletar task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await taskService.deleteTask(Number(id));
    res.status(200).json({ success: true, message: "Task deleted successfully" });
  } catch (err: any) {
    if (err?.message?.includes("Task not found")) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }
    res.status(500).json({ success: false, message: err?.message || "Internal server error" });
  }
};
