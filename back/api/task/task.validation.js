import { checkSchema } from "express-validator";
import prisma from "../../config/prismaLoader.js";

export const createTask = checkSchema({
  title: {
    in: "body",
    isString: { errorMessage: "input must be a string" },
  },
  description: {
    in: "body",
    isString: { errorMessage: "input must be a string" },
  },
});

export const updateTask = checkSchema({
  id: {
    in: "params",
    isString: { errorMessage: "input must be a string" },
    custom: {
      options: async (id) => {
        if (id) {
          const resp = await prisma.task.findFirst({
            where: { id: parseInt(id) },
          });
          if (!resp) {
            return Promise.reject("id not exist");
          }
        }
      },
    },
  },
  title: {
    in: "body",
    isString: { errorMessage: "input must be a string" },
  },
  description: {
    in: "body",
    isString: { errorMessage: "input must be a string" },
  },
});

export const taskId = checkSchema({
  id: {
    in: "params",
    isString: { errorMessage: "input must be a string" },
    custom: {
      options: async (id) => {
        if (id) {
          const resp = await prisma.task.findFirst({
            where: { id: parseInt(id) },
          });
          if (!resp) {
            return Promise.reject("id not exist");
          }
        }
      },
    },
  },
});
