import prisma from '../../config/prismaLoader.js';

export const getAllTask = async () => {
  const resp = await prisma.task.findMany();
  return resp;
};

export const createTask = async (data) => {
  const resp = await prisma.task.create({ 
    data: {
      title: data.title,
      description: data.description
    }
  });
  return resp;
};

export const updateTask = async (id, data) => {
  const resp = await prisma.task.update({
    where: {id},
    data: {
      title: data.title,
      description: data.description
    }
  });
  return resp;
};

export const deleteTask = async (id) => {
  const resp = await prisma.task.deleteMany({
    where: {id}
  });
  return resp;
};