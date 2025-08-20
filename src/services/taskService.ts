import { PrismaClient } from "@prisma/client";
import type { Task } from "@prisma/client";
import prisma from "../prisma/prismaClient.js"; // se o service está em src/services/

const validStatuses = ["a fazer", "em andamento", "concluído"] as const;
const validPriorities = ["baixa", "média", "alta"] as const;

type Status = typeof validStatuses[number];
type Priority = typeof validPriorities[number];

interface TaskInput {
  title: string;
  description?: string;
  status?: Status;
  priority?: Priority;
  dueDate?: string | Date;
  done?: boolean;
}

// Listar todas as tasks
export const getAllTasks = async (): Promise<Task[]> => {
  return await prisma.task.findMany();
};

// Criar uma nova task
export const createTask = async (data: TaskInput): Promise<Task> => {
  // Validações
  if (!data.title || data.title.trim() === "") {
    throw new Error("Title is required");
  }

  if (data.status && !validStatuses.includes(data.status)) {
    throw new Error("Invalid status");
  }

  if (data.priority && !validPriorities.includes(data.priority)) {
    throw new Error("Invalid priority");
  }

  if (data.dueDate) {
    const date = new Date(data.dueDate);
    if (isNaN(date.getTime())) throw new Error("Invalid dueDate");
  }

  return await prisma.task.create({ data });
};

// Atualizar uma task existente
export const updateTask = async (id: number, data: Partial<TaskInput>): Promise<Task> => {
  if (data.title && data.title.trim() === "") {
    throw new Error("Title cannot be empty");
  }

  if (data.status && !validStatuses.includes(data.status)) {
    throw new Error("Invalid status");
  }

  if (data.priority && !validPriorities.includes(data.priority)) {
    throw new Error("Invalid priority");
  }

  if (data.dueDate) {
    const date = new Date(data.dueDate);
    if (isNaN(date.getTime())) throw new Error("Invalid dueDate");
  }

  if (data.done !== undefined && typeof data.done !== "boolean") {
    throw new Error("done must be a boolean");
  }

  return await prisma.task.update({
    where: { id },
    data,
  });
};

// Alternar/Marcar como concluída
export const toggleDone = async (id: number, done: boolean): Promise<Task> => {
  if (typeof done !== "boolean") {
    throw new Error("done must be a boolean");
  }

  return await prisma.task.update({
    where: { id },
    data: { done },
  });
};

// Deletar task
export const deleteTask = async (id: number): Promise<Task> => {
  const task = await prisma.task.findUnique({ where: { id } });
  if (!task) throw new Error("Task not found");

  return await prisma.task.delete({ where: { id } });
};
