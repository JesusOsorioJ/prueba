import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from './routes.js';
import configExpress from './config/express.js';

const app = express();

// Cors y bodyParser
app.use(bodyParser.json());
app.use(cors());

configExpress(app);

// Routes
routes(app);

// Error Handlers
app.use((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Internal Server Error",
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
