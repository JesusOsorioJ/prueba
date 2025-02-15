import * as service from "./task.services.js";

export const getAllTask = async (req, res, next) => {
  try {
    const resp = await service.getAllTask();
    res.status(200).json(resp);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  try {
    await service.createTask(req.body);
    const resp = await service.getAllTask();
    res.status(201).json(resp);
  } catch (error) {
    console.log(error)
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.updateTask(parseInt(id), req.body);
    const resp = await service.getAllTask();
    res.status(201).json(resp);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.deleteTask(parseInt(id));
    const resp = await service.getAllTask();
    res.status(201).json(resp);
  } catch (error) {
    next(error);
  }
};
