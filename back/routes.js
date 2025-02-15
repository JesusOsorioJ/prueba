import task from "./api/task/task.routes.js";

const modules = [
  { name: "task", route: task },
];

export function routes(app) {
  modules.forEach((module) => {
    app.use(`/api/${module.name}`, module.route);
  });
}
