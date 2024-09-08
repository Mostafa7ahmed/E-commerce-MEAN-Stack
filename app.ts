import { Server } from 'http';
import express from 'express';
const app: express.Application = express();
import dotenv from 'dotenv';
import dbConnection from './config/db';

import mountRoutes from './routes';

app.use(express.json());
dotenv.config();
dbConnection();
mountRoutes(app);

// Use a different name for your local server variable
let httpServer:Server;

httpServer = app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});

process.on('unhandledRejection', (err: Error) => {
  console.error(`Unhandled Rejection Error: ${err.name} | ${err.message}`);
  httpServer.close(() => {
    console.error('Application is shutting down...');
    process.exit(1);
  });
});
 