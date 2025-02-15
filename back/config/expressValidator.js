import { validationResult } from "express-validator";

export const errorHandler = (req, res, next) => {
  try {
    validationResult(req).throw();
    next();
  } catch (err) {
    res.status(403).json({ errors: err.array() });
  }
};
