import { Router } from "express";
import * as controller from "./task.controllers.js";
import * as validatiom from "./task.validation.js";
import { errorHandler } from "../../config/expressValidator.js";

const router = Router();

router.get("/", controller.getAllTask);
router.post("/", validatiom.createTask, errorHandler, controller.createTask);
router.put("/:id", validatiom.updateTask, errorHandler, controller.updateTask);
router.delete("/:id", validatiom.taskId, errorHandler, controller.deleteTask);

export default router;
