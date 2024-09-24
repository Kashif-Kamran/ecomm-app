import express, { Application, urlencoded } from "express";
import routes from './routes';
const app: Application = express();

// add middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes)
// Validation middleware
export default app;
